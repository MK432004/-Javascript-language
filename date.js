//  dates 
const Mydate  =  new Date()
console.log(Mydate.toString())
console.log(typeof Mydate)
let createnewdate  = new Date( 2024 ,0, 4)
console.log( createnewdate.toLocaleString());
let MytimeStamp = Date.now()
console.log(MytimeStamp);
let date = new Date()
console.log(date.toLocaleDateString())
console.log(date.toDateString())
console.log(date.toISOString())