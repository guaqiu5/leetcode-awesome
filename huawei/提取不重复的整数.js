const input = readline()
let set = new Set()
for (let i = input.length; i >= 0; i--) {
    set.add(input[i])
}
console.log([...set].join(''))