const promisesone = new Promise(function(resolve, reject){
    setTimeout(function(){
      console.log(" async task complete ")
      resolve()
    }, 1000)
})
 Promisesone.than(function(){
    console.log("promies consumed ")
 })



new promis(function(resolve,reject){
  setTimeout(function(){
    console.log("async tast is run ")
    resolve()
  }, 1000)

}).than(function(){
  console.log("async task is complete")
})

const promisthree = new Promise(function(resolve,reject){
  setTimeout(function(){
    resolve({ username: "manish kumar", email: "manish@gmil.com"} )
  } , 1000)
    

})

promisthree.then(function(user){
 console.log(user)
})


const promiesfour = new Promise(function(resolve, reject){
  setTimeout(function(){
    let error = true;
    if(!error){
      resolve({ username: "manish" , email: "manish2gmil.com"})
    }else{
      reject(' error :somthing wrong ')
    }
    
    
  }, 1000)

})

promiesfour.than((user)=>{
  console.log(user)
})  return user.username;
}).than((username)=>{
  console.log(username)
}).catch(function(error){
  console.log(error)
})



const promisefive = new Promise(function(){
  setTimeout(function(){
    let error = true;
    if(!error){
      resolve({ username: "manish" , email: "manish2gmil.com"})
    }else{
      reject(' js  ')
    }
    }, 1000)
})

async function consumepromisefive(){
 try {
  const response = await promisefive
  console.log(response);
  }catch(error){
  console.log(error)
  }
}

consumepromisefive()


async function getAllusers() {
  await fetch
  
}