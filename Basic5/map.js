const myarry = [ 1,2, 3, 4,5,5 ,7, 8, 9, 10]
// map use in java script

//   const newarry = myarry.map((num)=> {
//     if(num==7)
//         return console.log(num)
//     // return num+10
//     // return num-10
//   })


// chaning apply in duble map and filter 
 const newarry = myarry
                .map((num) => num * 10)
                .map((num) => num+10)
                .filter((num) => num>50)
  console.log(newarry)

