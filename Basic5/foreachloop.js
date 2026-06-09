const coding = [ 'java ', 'js', 'cpp', 'dbms']
// coding.forEach(function(value){
//     console.log(value)
// })
// coding.forEach((value)=>{
// console.log(value)
// })
// function printme(item){
//     console.log(item);
// }
// coding.forEach(printme)


// coding.forEach((item, index,arr)=>{
//     console.log(item,index, arr)
// })
const myobject = [
    {
    language : " java script",
    languagefile: " js"
 },
 {
    language : " java script",
    languagefile: " js"
 },
 {
    language : " java ",
    languagefile: " java"
 },
 {
    language : "python",
    languagefile: "py"
 }
]
myobject.forEach((item)=>{
    console.log(item.language)
})