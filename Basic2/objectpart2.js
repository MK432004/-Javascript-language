//const tinderuser = new Object()
const tinderusertwo = {}
tinderusertwo.id = " 1234567 "
tinderusertwo.name = "manish"
tinderusertwo.islodin  = false
//console.log(tinderusertwo);
const reguleruser = {
    email:" manish@gmail.com",
       fullname: {
        username :{
            firstname : "manish",
            lastname: " kumar"

        }
    }
}
//console.log(reguleruser.email.username.firstname)
const object1 = { 1: "a", 2: " b", 3: " 4"}
const object2 = { 4: "d " , 5: " m ", 6: " m"}
const objectt3 = { object1, object2}
//console.log(objectt3)

const object4 = Object.assign({} , object1, object2)
const corse  = {
username: "manishkumar",
corseprise: "999",
corseinstrucer: "hitesh"
}
//corse.corseinstrucer
const {corseprise : price }  = corse
//console.log(corseprise)
console.log(price)
