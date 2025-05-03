export const validCredentials = [
  { username: "user1@gmail.com", password: "Pass@123" },
  { username: "admin@site.com", password: "Admin#2024" },
  { username: "test@example.com", password: "Test@1234" }
];

export function isStrongPassword(password) {
  const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{8,}$/;
  return strongRegex.test(password);
}

export function validateLogin(username, password) {
  if (!username || !password) {
    return { success: false, message: "Both fields are mandatory!" };
  }

  if (!isStrongPassword(password)) {
    return {
      success: false,
      message: "Weak password. Include A-Z, a-z, number, and special character."
    };
  }

  const match = validCredentials.some(
    (u) => u.username === username && u.password === password
  );

  return match ? { success: true } : { success: false, message: "Invalid username or password!" };
}
