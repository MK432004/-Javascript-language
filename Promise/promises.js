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

promiesfour.than()