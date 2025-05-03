import { validateLogin, isStrongPassword } from "./script.js";

describe("Login Validation", function () {
  it("should fail if fields are blank", function () {
    const result = validateLogin("", "");
    expect(result.success).toBeFalse();
    expect(result.message).toContain("mandatory");
  });

  it("should fail if password is weak", function () {
    const result = validateLogin("user1@gmail.com", "abc");
    expect(result.success).toBeFalse();
    expect(result.message).toContain("Weak password");
  });

  it("should fail if credentials are wrong", function () {
    const result = validateLogin("wrong@mail.com", "Wrong@123");
    expect(result.success).toBeFalse();
    expect(result.message).toContain("Invalid");
  });

  it("should pass with correct credentials", function () {
    const result = validateLogin("user1@gmail.com", "Pass@123");
    expect(result.success).toBeTrue();
  });
  it("should fail this test for demo purposes", () => {
    expect(validateLogin("wrong@example.com", "wrongpass")).toBe(true); // Deliberate fail
  });
});

describe("Password Strength Checker", function () {
  it("should fail if password is too short", function () {
    expect(isStrongPassword("A@1a")).toBeFalse();
  });

  it("should pass if strong password", function () {
    expect(isStrongPassword("Strong@123")).toBeTrue();
  });
});
