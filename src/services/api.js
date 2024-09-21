import axios from "axios"

const signupApi = async (username , password) => {
   try{
   
   const res = await axios.get("https://dataproject-6552b-default-rtdb.firebaseio.com/users.json") 
   const usersData = Object.keys(res.data).map(id => ({id , ...res.data[id]}))

   for(let i = 0 ; i < usersData.length ; i++){
     if(usersData[i].username === username){
        throw new Error("user already exists")
     }
   }

   await axios.post("https://dataproject-6552b-default-rtdb.firebaseio.com/users.json" , {username , password})
   return username
   
  }catch(err){
     throw err
   }
}



const loginApi = async (username , password) => {
    try{
    const res = await axios.get("https://dataproject-6552b-default-rtdb.firebaseio.com/users.json") 
    const usersData = Object.keys(res.data).map(id => ({id , ...res.data[id]}))
 
  console.log("res-" , res)
    let isUserExist = false
    for(let i = 0 ; i < usersData.length ; i++){
      if(usersData[i].username === username){
        isUserExist = true

        if(usersData[i].password === password){
            console.log("resSuccess-" , res)
            return username
        }else {
            throw new Error("Invalid password")
        }
      }
    }

    if(!isUserExist){
        throw new Error ("User does not exist")
    }
    
   }catch(err){
      throw err
    }
 }
 

export {signupApi , loginApi}

