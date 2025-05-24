function removeEgg(foods) {
  let foods1 = [];
  let count = 0;
  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === "egg" && count < 2) {
      count++;
      continue;
    }
    foods1.push(foods[i]);
  }
  return foods1;
}
console.log(removeEgg(["help", "gnanesh", "egg", "egg","egg" ,"happy"]));
