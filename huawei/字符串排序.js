const num = parseInt(readline())
let input = []
for (let i = 0; i < num; i++) {
    input.push(readline())
}
input.sort()
input.forEach(i => console.log(i))