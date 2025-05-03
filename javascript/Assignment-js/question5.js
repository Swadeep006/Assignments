function evaluateConditions(obj) {
    if (obj.age > 18 && obj.hasLicense === true) return "Eligible to drive";
    if (obj.temperature > 30 || obj.humidity > 70)
      return "Warning:High discomfort level";
    if ((obj.role === "admin" || obj.role === "editor") && obj.isActive === true)
      return "Access granted";
  }
  console.log(
    evaluateConditions({
      age: 18,
      hasLicense: true,
      temperature: 34,
      humidity: 50,
      role: "admin",
      isActive: true,
    })
  );