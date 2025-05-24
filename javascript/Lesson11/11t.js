function removeEgg(foods) {
  let foods1 = [];
  let count = 0;
  for (let i = foods.length-1; i >= 0; i--) {
    if (foods[i] === "egg" && count < 2) {
      count++;
      continue;
    }
    foods1.push(foods[i]);
  }
  return foods1.reverse();
}
console.log(removeEgg(["help", "gnanesh", "egg", "egg", "egg", "happy"]));
