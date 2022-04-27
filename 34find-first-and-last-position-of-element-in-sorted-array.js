var searchRange = function(nums, target) {
    let left=0
    let right=nums.length-1
    let res=[-1,-1]
    while(left<right){
        //寻找右边界
        let mid=parseInt((left+right+1)/2)
        if(nums[mid]<=target){
            left=mid
        }else{
            right=mid-1
        }
    }
    if(nums[left]==target) res[1]=right

    //寻找左边界  right为之前的有边界 left为0
    left=0
    while(left<right){
        let mid=parseInt((left+right)/2)
        if(nums[mid]>=target){
            right=mid
        }else{
            left=mid+1
        }
    }
    if(nums[right]==target) res[0]=right
    return res
};