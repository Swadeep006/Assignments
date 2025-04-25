addNum([1,2,3],2);
function addNum(array, num) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i] + num);
  }
  console.log(newArray);
}
