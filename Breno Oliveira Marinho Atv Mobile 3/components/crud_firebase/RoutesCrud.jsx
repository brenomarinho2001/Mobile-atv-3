import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeEstudante from "./estudante/HomeEstudante";
import CriarEstudante from "./estudante/CriarEstudante";
import ListarEstudante from "./estudante/ListarEstudante";
import EditarEstudante from "./estudante/EditarEstudante";

import ListarProfessor from "./professor/ListarProfessor";
import CriarProfessor from "./professor/CriarProfessor";
import HomeProfessor from './professor/HomeProfessor';
import EditarProfessor from './professor/EditarProfessor';


const Stack = createNativeStackNavigator()

const RoutesCrud = ()=> {
    return (
        <Stack.Navigator>

            <Stack.Screen 

                name='HomeEstudante' 
                component={HomeEstudante} 
                options={{title:'Home'}}/>

            <Stack.Screen 

                name='CriarEstudante' 
                component={CriarEstudante} 
                options={{title:'Criar Estudante'}}/>

            <Stack.Screen 

                name='ListarEstudante' 
                component={ListarEstudante} 
                options={{title:'Listar Estudantes'}}/>

            <Stack.Screen 

                name='EditarEstudante' 
                component={EditarEstudante} 
                options={{title:'Editar Estudante'}}/>
                
            <Stack.Screen 

                name='HomeProfessor' 
                component={HomeProfessor} 
                options={{title:'Home'}}/>

            <Stack.Screen 

                name='ListarProfessor' 
                component={ListarProfessor} 
                options={{title:'Listar Professor'}}/>

            <Stack.Screen 

                name='CriarProfessor' 
                component={CriarProfessor} 
                options={{title:'Criar Professor'}}/>

            <Stack.Screen 

                name='EditarProfessor' 
                component={EditarProfessor} 
                options={{title:'Editar Professor'}}/>
                
        </Stack.Navigator>
    )
}

export default RoutesCrud