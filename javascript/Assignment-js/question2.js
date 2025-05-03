function longestPalindromeSubstring(stringg) {
  let answerString;
  let len = -1;
  for (let i = 0; i < stringg.length; i++) {
    for (let j = i; j < stringg.length; j++) {
      if (chkpalindrome(stringg.substring(i, j + 1))) {
        let anslen = stringg.substring(i, j + 1).length;
        if (len < anslen) {
          len = anslen;
          answerString = stringg.substring(i, j + 1);
        }
      }
    }
  }
  console.log(answerString);
}
function chkpalindrome(stringg) {
  if (stringg === stringg.split("").reverse().join("")) return 1;
  else return 0;
}
longestPalindromeSubstring("czabazz");
// stringg = prompt("Enter the string:");
// console.log(longestPalindromeSubstring(stringg));
