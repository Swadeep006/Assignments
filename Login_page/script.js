const validCredentials = [
  { username: "user1@gmail.com", password: "Pass@123" },
  { username: "admin@site.com", password: "Admin#2024" },
  { username: "test@example.com", password: "Test@1234" },
];

function isStrongPassword(password) {
  const strongRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{8,}$/;
  return strongRegex.test(password);
}

function validateLogin(username, password) {
  if (!username || !password) {
    return { success: false, message: "Both fields are mandatory!" };
  }

  if (!isStrongPassword(password)) {
    return {
      success: false,
      message:
        "Weak password! Use at least 8 characters, including uppercase, lowercase, number, and special character.",
    };
  }

  const isValid = validCredentials.some(
    (cred) => cred.username === username && cred.password === password
  );

  if (isValid) {
    return { success: true };
  } else {
    return { success: false, message: "Invalid username or password!" };
  }
}

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMessage = document.getElementById("error-message");

  const result = validateLogin(username, password);

  if (result.success) {
    window.location.href = "https://www.youtube.com";
  } else {
    errorMessage.textContent = result.message;
  }
});
