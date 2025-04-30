function createSecretHolder(secret) {
  let hiddenSecret = secret;

  return {
    getSecret: function () {
      return hiddenSecret;
    },
    setSecret: function (newSecret) {
      hiddenSecret = newSecret;
    },
  };
}

// Usage
const secretObj = createSecretHolder("myPassword");

console.log(secretObj.getSecret()); // myPassword
secretObj.setSecret("newPassword123");
console.log(secretObj.getSecret()); // newPassword123
