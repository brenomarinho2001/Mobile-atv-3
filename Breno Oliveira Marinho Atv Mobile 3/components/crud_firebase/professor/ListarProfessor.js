import { View, Text, SafeAreaView, FlatList, Button } from "react-native"
import { useEffect, useState } from "react"
import { estilos } from "../css/MeuCSS"

import ProfessorService from "../service/ProfessorService"
import { firestoreDb } from "../firebase/firebase_config"

const ListarProfessor = (props) => {
    const [professores,setProfessores] = useState([])
    const [flag, setFlag] = useState(false)
    useEffect(
        () => {
            ProfessorService.listar(
                firestoreDb,
                (professores) => {
                    //console.log(professores)
                    setProfessores(professores)
                }
            )
        }
        ,
        []
    )
    const apagarProfessor = (id)=>{
        ProfessorService.apagar(
            firestoreDb,
            (resultado)=>{
               let profTemp = professores
               for(let i=0;i<profTemp.length;i++){
                if(profTemp[i].id === id){
                    profTemp.splice(i,1)
                    break;
                }
               }
               setProfessores(profTemp)
               setFlag(!flag)
            },
            id)
    }

    return (
        <View style={estilos.container}>
            <Text style={estilos.cabecalho}>Listar Professores</Text>
            {console.log(professores)}
            <SafeAreaView>
                <FlatList 
                    data={professores}
                    renderItem={
                        ({item})=>{
                            return (
                                <View
                                    style={{
                        
                                        flexDirection:'row',
                                        justifyContent:'center'
                                    }}
                                >
                                    <Text style={{width:'20%',fontWeight:'bold'}}>{item.nome}</Text>
                                    <Text style={{width:'25%'}}>{item.curso}</Text>
                                    <Text style={{margin:5}}>{item.salario}</Text>
                                    <View style={{margin:5}}>
                                        <Button 
                                            title="Editar" 
                                            onPress={()=>props.navigation.navigate('EditarProfessor',{id:item.id})}
                                            />
                                    </View>
                                    <View style={{margin:5}}>
                                        <Button 
                                            title="Apagar"
                                            onPress={()=>apagarProfessor(item.id)} 
                                            />
                                    </View>
                                </View>
                            )
                        }
                    }
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        </View>
    )
}

export default ListarProfessor;
