import { View, Text, SafeAreaView, FlatList, Button } from "react-native"
import { useEffect, useState } from "react"
import { estilos } from "../css/MeuCSS"

import EstudanteService from "../service/EstudanteService"
import { firestoreDb } from "../firebase/firebase_config"

const ListarEstudante = (props) => {

    const [estudantes,setEstudantes] = useState([])
    const [flag, setFlag] = useState(false)
    useEffect(
        () => {
            EstudanteService.listar(
                firestoreDb,
                (estudantes) => {
                    //console.log(estudantes)
                    setEstudantes(estudantes)
                }
            )
        }
        ,
        []
    )
    const apagarEstudante= (id)=>{
        EstudanteService.apagar(
            firestoreDb,
            (resultado)=>{
               let estTemp = estudantes
               for(let i=0;i<estTemp.length;i++){
                if(estTemp[i].id === id){
                    estTemp.splice(i,1)
                    break;
                }
               }
               setEstudantes(estTemp)
               setFlag(!flag)
            },
            id)
    }

    return (
        <View style={estilos.container}>
            <Text style={estilos.cabecalho}>Listar Estudantes</Text>
            {console.log(estudantes)}
            <SafeAreaView>
                <FlatList 
                    data={estudantes}
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
                                    <Text style={{margin:5}}>{item.ira}</Text>
                                    <View style={{margin:5}}>
                                        <Button 
                                            title="Editar" 
                                            onPress={()=>props.navigation.navigate('EditarEstudante',{id:item.id})}
                                            />
                                    </View>
                                    <View style={{margin:5}}>
                                        <Button 
                                        title="Apagar"
                                        onPress={()=>apagarEstudante(item.id)}
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

export default ListarEstudante