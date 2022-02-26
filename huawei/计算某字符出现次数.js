// 描述
// 写出一个程序，接受一个由字母、数字和空格组成的字符串，和一个字符，然后输出输入字符串中该字符的出现次数。（不区分大小写字母）

// 数据范围： 1 \le n \le 1000 \1≤n≤1000 
// 输入描述：
// 第一行输入一个由字母和数字以及空格组成的字符串，第二行输入一个字符。

// 输出描述：
// 输出输入字符串中含有该字符的个数。（不区分大小写字母）

// 示例1
// 输入：
// ABCabc
// A
// 复制
// 输出：
// 2
// 复制

//我的愚蠢做法 hashmap 且不知道toLowerCase api.. 就当练练map的api吧

let input = readline()
let char = readline()

function init(char, map) {
    if (char.charCodeAt() < 97) {
        //代表是大写字母
        //看看map里有没有 没有为0 再看有没有他的小写 没有也为0
        map.has(char) ? null : map.set(char, 0)
        map.has(String.fromCharCode(char.charCodeAt() + 32)) ? null : map.set(String.fromCharCode(char.charCodeAt() + 32), 0)
    } else {
        map.has(char) ? null : map.set(char, 0)
        map.has(String.fromCharCode(char.charCodeAt() - 32)) ? null : map.set(String.fromCharCode(char.charCodeAt() - 32), 0)

    }
}

function computeCharNum(str, char) {
    let arr = str.split('')

    let hashMap = new Map()
    arr.forEach((i) => {
        if (hashMap.has(i)) {
            let num = hashMap.get(i)
            hashMap.set(i, ++num)
        } else {
            hashMap.set(i, 1)
        }
    })

    if (char.charCodeAt() > 122 || char.charCodeAt() < 65) {
        return hashMap.has(char) ? hashMap.get(char) : 0
    }
    init(char, hashMap)
    return char.charCodeAt() < 97 ? hashMap.get(char) + hashMap.get(String.fromCharCode(char.charCodeAt() + 32)) : hashMap.get(char) + hashMap.get(String.fromCharCode(char.charCodeAt() - 32))


}
console.log(computeCharNum(input, char))



//很妙的做法
let input = readline().toLowerCase()
let char = readline().toLowerCase()
const arr = input.split(char)
console.log(arr.length - 1)