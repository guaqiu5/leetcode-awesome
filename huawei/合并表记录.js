const num = parseInt(readline())
let map = new Map()
for (let i = 0; i < num; i++) {
    let input = readline().split(' ')
    input[1] = parseInt(input[1])
        //console.log(input)
    if (map.has(input[0])) {
        map.set(input[0], input[1] + map.get(input[0]))
    } else {
        map.set(input[0], input[1])
    }
}
let ans = [];
for (const key of map) {
    ans.push(key)
}
ans.sort((a, b) => {
    return a[0] - b[0]
})
for (let i = 0; i < ans.length; i++) {

    let res = ans[i].join(' ')
    console.log(res)

}