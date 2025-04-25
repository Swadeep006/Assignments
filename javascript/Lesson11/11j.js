addArrays([1,1,2],[1,1,3]);
function addArrays(array1, array2) {
  const newArray = [];
  for (let i = 0; i < array1.length; i++) {
    newArray.push(array1[i] + array2[i]);
  }
  console.log(newArray);
}
