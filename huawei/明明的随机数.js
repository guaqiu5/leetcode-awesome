//去重加排序 这也鸭困难 无语hw

let num
while (num = readline()) {
    let set = new Set()
    for (let i = 0; i < num; i++) {
        set.add(readline())
    }
    const arr = [...set].sort((a, b) => a - b)
    arr.forEach((i) => {
        console.log(i)
    })
}