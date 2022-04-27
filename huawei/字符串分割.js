// 描述
// •连续输入字符串，请按长度为8拆分每个输入字符串并进行输出；

// •长度不是8整数倍的字符串请在后面补数字0，空字符串不处理。
// （注：本题有多组输入）
// 输入描述：
// 连续输入字符串(输入多次,每个字符串长度小于等于100)

// 输出描述：
// 依次输出所有分割后的长度为8的新字符串

// 示例1
// 输入：
// abc
// 123456789
// 复制
// 输出：
// abc00000
// 12345678
// 90000000


let str
while (str = readline()) {
    let length = str.length
    let level = 0
    while (length >= 8) {
        let arr = []
        for (let i = 8 * level; i < 8 * (level + 1); i++) {
            arr.push(str[i])
            length--
        }
        level++
        console.log(arr.join(''))
    }
    if (length > 0) {
        let arr = new Array(8)
        for (let i = 0; i < arr.length; i++) {
            arr[i] = 0
        }
        for (let i = 0; i < str.length % 8; i++) {
            arr[i] = str[Math.floor(str.length / 8) * 8 + i]
        }
        console.log(arr.join(''))
    }
}