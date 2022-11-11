import { getDocs,collection,addDoc,doc,getDoc,updateDoc, deleteDoc } from "firebase/firestore/lite";

class ProfessorService {

    static listar = (firestoreDb,callback)=>{
        getDocs(collection(firestoreDb,'professor'))
        .then(
            (snapshot)=>{
                const professores = []
                snapshot.forEach(
                    (document)=>{
                        const id = document.id
                        //console.log(document.data().nome)
                        const {nome,curso,salario} = document.data()
                        //console.log(salario)
                        professores.push({id,nome,curso,salario})
                    }//document
                )//snapshot.forEach
                callback(professores)
            }//snapshot
        )//then
        .catch(error=>console.log(error))
    }

    static criar = (firestoreDb,callback,professor)=>{
        addDoc(collection(firestoreDb,'professor'),professor)
        .then(
            (docRef)=>{
                callback(docRef.id)
            }
        )
        .catch(error=>console.log(error))
    }

    static recuperar = (firestoreDb,callback,id)=>{
        getDoc(doc(firestoreDb,'professor',id))
        .then(
            (docSnap)=>{
                if(docSnap.exists()){
                    callback(docSnap.data())
                }
            }
        )
        .catch(error=>console.log(error))
    }

    static atualizar = (firestoreDb,callback,id,professor)=>{
        updateDoc( doc(firestoreDb,'professor',id) , professor)
        .then(
            ()=>{
                callback()
            }
        )
        .catch(error=>console.log(error))
    }
    static apagar = (firestoreDb,callback,id)=> {
        deleteDoc(doc(firestoreDb,'professor',id))
        .then(()=>callback(true))
        .catch(error=>console.log(error))
    }
}

export default ProfessorService;