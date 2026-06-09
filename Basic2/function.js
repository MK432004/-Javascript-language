function user(){
   // console.log("m")
    //console.log("a")
   // console.log("n")
   // console.log("i")
   // console.log("s" )
  //  console.log("h")

}
user()
function addtwonumber(number1, number2){
    console.log(number1+number2);
}
addtwonumber(4,5)
addtwonumber(3, null)
    const result= addtwonumber(3,5)
    console.log(result)
    function addtwonumer(num1, num2){
        //let result = num1+num2
       // return result
       return num1+num2

    }
   // const resultt = addtwonumber(2,4)
   //console.log("res: "  resultt)
   function loginuser(username){
    if(username=== undefined){
        console.log("pleasse inter your useer name")
        return
    }
    return `${username} just logged in`
   }
   //console.log( loginuser())
   function calculationcart( val1, val2,...num1){
    return num1
   }

//console.log(calculationcart(200 , 799, 800,499))
const users ={
    username: "manish",
    emaiid: "manish@gmail.com",
    price: 444

}
function handleobject (anyobject){
    console.log(`username is ${anyobject.username} and price ${anyobject.price} `);

}
//handleobject(users)
handleobject({
    username: "manish",
    price: 777
})
const newarry = [ 33,33,334,45,]
function returnvalu(getarr){
   return getarr[2,3]

}
console.log(returnvalu(newarry))