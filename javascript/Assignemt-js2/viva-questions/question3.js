function filterObjectProperties(obj, minLength) {
  const filteredObject = {};
  const keys = Object.keys(obj);
  console.log(keys);

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]; 
    if (typeof obj[key] === "string" && obj[key].length >= minLength) {
      filteredObject[key] = obj[key];
    }   
  }

  return filteredObject;
}
const data = { a: "short", b: "longer string", c: 123, d: "very long string indeed" };
const filtered = filterObjectProperties(data, 6);
console.log(filtered);
