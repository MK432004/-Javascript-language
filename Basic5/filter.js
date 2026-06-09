// filter 
const mycoding = [ 1,2,3,4,5,6]
// const myunums = mycoding.filter((values)=> values >4)
// console.log(myunums)
// const mynums = mycoding.filter((values)=> {
//     return values>2
// })
// console.log(mynums)

// for each loop se
 const newnums = [] 
mycoding.forEach((vlaue)=> {
    if(vlaue>4){
        newnums.push(vlaue)
    }
})
console.log(newnums)
