import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged ,signOut  } from "firebase/auth";
import { getDatabase,ref,set,onValue,push  } from "firebase/database";
import { app } from "./firebaseconfig";
import { resolve } from "path";


let auth = getAuth(app)
let db = getDatabase(app)


export let fbLogin=(body:any)=>{
    return new Promise((resolve,reject)=>{
        if(!body.email || !body.password){
            reject("Email and Password is Required")
        }else{
            signInWithEmailAndPassword(auth,body.email,body.password).then(res=>{
                let id = res.user.uid
                
                const referece = ref(db,`users/${id}`)
            
                onValue(referece,(data)=>{
                    if(data.exists()){
                        resolve(data.val())
                    }else{
                        reject("No Data Found")
                    }
                } )
            
            }).catch(err=>{
                reject(err)
            })
        }
    })
}

export let fbSignUp=(body:any)=>{
    return new Promise((resolve,reject)=>{
        if(!body.email || !body.password){
            reject("Email and Password is Required")
        }else{
            createUserWithEmailAndPassword(auth,body.email,body.password).then(res=>{
                let id = res.user.uid
                
                body.id = id
                const referece = ref(db,`users/${id}`)
                set(referece,body).then(user=>{
                    resolve("User Created Succefully")
                }).catch(error=>{
                    reject(error)
                })
            
            }).catch(err=>{
                reject(err)
            })
        }
    })


}
export let fbAuth=()=>{
  return new Promise((resolve,reject)=>{ 
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const uid = user.uid;
          resolve(uid)
          // ...
        } else {
            reject("No User ")
          // User is signed out
          // ...
        }
      });

  });

}


export let fbAdd=(nodename:string,body:any,id?:string)=>{

return new Promise((resolve,reject)=>{

    const quizId = push(ref(db,`${nodename}/`)).key
body.id =  quizId

    const reference = ref(db,`${nodename}/${body.id}`)
    set(reference,body).then(res=>{
            resolve("Data Send Successfully");
    }).catch(err=>{
            reject(err)
    });

});


}
export let fbGet=(nodename:string,id?:string)=>{

    return new Promise((resolve,reject)=>{
        const reference = ref(db,`${nodename}/${id?id:""}`)
        onValue(reference,(data)=>{
            if(Object.values(data.exists())){
                resolve(data.val())
            }else{
                reject("No Data Found")
            }
        })
    
    });






}











export let fbDelete=()=>{}
export let fbEdit=()=>{}
export let fbGetById=()=>{}