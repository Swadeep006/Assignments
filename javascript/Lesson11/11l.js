function minMax(nums) {
  const result = {
    min: nums[0],
    max: nums[0],
  };
  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    if (value < result.min) {
      result.min = value;
    }
    if (value > result.max) {
      result.max = value;
    }

  }
  return result;
}

console.log(minMax([1,-3,5]));