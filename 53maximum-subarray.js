let maxSubArray = function(nums) {
    let sum
    let max = nums[0]
    for (const num of nums) {
        if (sum > 0) {
            sum += num
        } else {
            sum = num
        }
        max = Math.max(max, sum)
    }
}