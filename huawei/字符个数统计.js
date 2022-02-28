const input = readline()
let set = new Set()
for (let i = 0; i < input.length; i++) {
    set.add(input[i])
}
console.log(set.size)