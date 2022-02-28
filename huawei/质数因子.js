//迭代 从2开始循环 当每次循环输入的值能整除i 那就一直除以当前i
//最后的值如果>1 那他本身也是质数

let input = parseInt(readline())
let res = ''
for (let i = 2; i * i <= input; i++) {
    while (input % i == 0) {
        res = res + i + ' ';
        input /= i;
    }
}
if (input > 1) res += input

console.log(res)