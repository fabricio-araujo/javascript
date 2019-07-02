let valores = [8, 1, 7, 4, 2, 9]


// for(let pos = 0; pos < num.length; pos ++){
//     console.log(` A posição ${pos} tem o valor ${valores[pos]}`)
// }

for(let pos in valores) {
    console.log(valores[pos])
}

let pos = num.indexOf()
if(pos == -1) {
    console.log('Non Ecziste')
}else {
    console.log(`O valor está na posição ${pos}`)
}