function removeEgg(foods) {
  const foods1 = foods.slice();
  const result = [];
  let count = 0;
  for (let i = foods1.length - 1; i >= 0; i--) {
    if (foods1[i] === "egg" && count < 2) {
      count++;
      continue;
    }
    result.push(foods1[i]);
  }
  return foods1.reverse();
}
console.log(removeEgg(["help", "gnanesh", "egg", "egg", "egg", "happy"]));
