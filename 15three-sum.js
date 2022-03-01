//排序+双指针
var threeSum = function(nums) {
    nums.sort((a, b) => a - b) // 排序
    let res = []
    for (let i = 0, len = nums.length; i < len; i++) {
        if (nums[i] > 0) break // 排除不可能情况
        if (nums[i] === nums[i - 1]) continue // 去重
        let L = i + 1,
            R = len - 1;
        while (L < R) {
            let sum = nums[i] + nums[L] + nums[R]
            if (sum === 0) {
                res.push([nums[i], nums[L], nums[R]])
                while (nums[L] === nums[++L]) continue // 及时去重
            } else if (sum > 0) {
                while (nums[R] === nums[--R]) continue
            } else if (sum < 0) {
                while (nums[L] === nums[++L]) continue
            }
        }
    }
    return res
};