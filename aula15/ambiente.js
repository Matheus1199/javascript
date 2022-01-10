var num = [4, 3, 6]
num[3] = 7
num.push(9)
num.length

console.log(num)
var pos = num.indexOf(4)
if (pos == -1) {
    console.log('o valor não foi encontrado!')
} else {
    console.log(`O valor 4 está na posição ${pos}`)
}
