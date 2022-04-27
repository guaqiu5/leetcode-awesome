//二分模版题

var searchInsert = function(nums, target) {
    if(!nums.length) return -1
    let left=0
    let right=nums.length

    while(left<right){
        let mid=parseInt( left + ((right - left) >> 1))
        console.log(mid)
        if(nums[mid]==target) return mid
       if(nums[mid]<target){
           left=mid+1
       }else{
           right=mid
       }
    }
    return right

}