const marval_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman ", "flash" ,"Batman"]
//marval_heros.push(dc_heros)
//console.log(marval_heros)
//console.log(marval_heros[3])
//marval_heros.concat(dc_heros)
//console.log(marval_heros)
const  all_heros = [...marval_heros, ...dc_heros]
console.log(all_heros)