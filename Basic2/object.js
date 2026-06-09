

 // object literal

const mysymbl = Symbol("key1")

 const jsuser = { 
    name : "manish",
    age : 18,
    [mysymbl] : "mykey1",
    location : "aurangabad",
    email: "manish@gimail.com",
    logsinday : ["mondzy",  " tuesday" ," wenesday"]

}
console.log(jsuser.email)
console.log(jsuser["email"])
console.log(jsuser[mysymbl])
//Object.freeze(jsuser)
jsuser.email = "maish@kumargimail"
console.log(jsuser)


jsuser.greeting  = function(){
    console.log("helo user good moring ");
}
console.log(jsuser.greeting())
jsuser.gretingtwo = function(){
    console.log(`" helo user " , ${this.name}` )
}
console.log(jsuser.greeting())
console.log(jsuser.gretingtwo())
