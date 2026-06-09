// filter 
const mycoding = [ 1,2,3,4,5,6]
// const myunums = mycoding.filter((values)=> values >4)
// console.log(myunums)
// const mynums = mycoding.filter((values)=> {
//     return values>2
// })
// console.log(mynums)

// for each loop se
//  const newnums = [] 
// mycoding.forEach((vlaue)=> {
//     if(vlaue>4){
//         newnums.push(vlaue)
//     }
// })
// console.log(newnums)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
   const userBooks = books.filter( (bk) => bk.genre ==='Non-Fiction' )
  const user = books.filter((value)=>  {
  return value.genre === 'History' && value.publish >=1989

  })
    console.log(userBooks)
  console.log(user)
  
