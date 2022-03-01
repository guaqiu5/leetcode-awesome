var topKFrequent = function(nums, k) {
    let map = new Map()
    let arr = [...new Set(nums)]
    for (const num of nums) {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1)
        } else {
            map.set(num, 1)
        }
    }
    return arr.sort((a, b) => map.get(b) - map.get(a)).slice(0, k)
};