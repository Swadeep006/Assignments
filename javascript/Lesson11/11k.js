countPositive([1,-3,5]);
function countPositive(nums){
    let count =0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]>0) count++;
    }
    console.log(count);
}