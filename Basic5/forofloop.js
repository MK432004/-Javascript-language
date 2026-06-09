// for of loop 
// const arry = [ 1, 2, 3, 4, 5, 6, 7]
// for (const num  of arry) {
//     console.log(num)
// }
const greating = "manissh kumarn "
for (const great  of greating) {
    if(great==" "){
        continue
    } 
    
    //console.log(` value ${great}`)
}
// map
const map = new Map()
map.set('in ', " india")
map.set('usa', "united state  io amerika")
map.set('fr', " france")
console.log(map)
for (const key of map) {
    console.log(key)
    
}