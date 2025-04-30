function createSecretHolder(secret) {
  // 'secret' is captured by the closure
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
