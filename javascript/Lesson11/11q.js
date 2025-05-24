function findindex(array, word) {
  let k = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) {
      k = i;
      break;
    }
  }
  return k;
}
console.log(findindex(["hello","happy","search","abc","laugh","search"],"search"));