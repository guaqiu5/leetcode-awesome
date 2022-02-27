// 写出一个程序，接受一个十六进制的数，输出该数值的十进制表示。

// 数据范围：保证结果在 1 \le n \le 2^{31}-1 \1≤n≤2 
// 31
//  −1 

// 注意本题有多组输入
// 输入描述：
// 输入一个十六进制的数值字符串。注意：一个用例会同时有多组输入数据，请参考帖子https://www.nowcoder.com/discuss/276处理多组输入的问题。

// 输出描述：
// 输出该数值的十进制字符串。不同组的测试用例用\n隔开。

// 示例1
// 输入：
// 0xA
// 0xAA
// 复制
// 输出：
// 10
// 170
// 复制



let input
let map = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    'A': 10,
    'B': 11,
    'C': 12,
    'D': 13,
    'E': 14,
    'F': 15,
}
while (input = readline()) {
    let arr = input.split('')
    arr.splice(0, 2)
    let ans = 0;
    for (let i = 0; i < arr.length; i++) {
        ans += map[arr[arr.length - 1 - i]] * Math.pow(16, i)
    }
    console.log(ans)
}