const user = {
    name: " manish ",
    price : 999,
    welcomemass :  function (){
        console.log(`${ this.name} ,welcome to website `);
        console.log(this);

    }
}
//user.welcomemass();
//user.name = "anish"
//user.welcomemass();
console.log(this); 
// const  chai = function (){
//     let username = " manish "
//     console.log(this.username); 
     

// }
// chai();
const chai = ()=> {
    let username = " manish "
    console.log(this);

}
chai(); 

//  const add = (num1, num2)=> {
//     return num1+ num2

//}
//const add = (num1,num2)=> (num1+ num2)
const add = (num1, num2)=> ({username: "manish"})
console.log(add())
