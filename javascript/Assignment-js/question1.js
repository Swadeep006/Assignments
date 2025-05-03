formatCurrency(123456, "EUR");
function formatCurrency(amount, currencyCode) {
  amount = Number(amount);
  amount = String(amount.toFixed(2));
  let divide = amount.split(".");
  console.log(divide);
  let real = divide[0];
  let decimal = divide[1];
  let realstring = "";
  let n = real.length;
  if (currencyCode === "INR") {
    for (let i = n - 1; i >= n - 3; i--) {
      realstring += real[i];
    }
    if (n > 3) {
      realstring += ",";
    }

    let count = 0;
    for (let i = n - 4; i >= 0; i--) {
      count++;
      realstring += real[i];
      if (count === 2 && i !== 0) {
        count = 0;
        realstring += ",";
      }
    }
    realstring = realstring.split("").reverse().join("");
    console.log(`₹${realstring}.${decimal}`);
  }
  if (currencyCode === "USD") {
    let count = 0;
    for (let i = n - 1; i >= 0; i--) {
      count++;
      realstring += real[i];
      if (count === 3 && i !== 0) {
        count = 0;
        realstring += ",";
      }
    }
    realstring = realstring.split("").reverse().join("");
    console.log(`$${realstring}.${decimal}`);
  }
  if (currencyCode === "EUR") {
    let count = 0;
    for (let i = n - 1; i >= 0; i--) {
      count++;
      realstring += real[i];
      if (count === 3 && i !== 0) {
        count = 0;
        realstring += ".";
      }
    }
    realstring = realstring.split("").reverse().join("");
    console.log(`€${realstring},${decimal}`);
  }
}
