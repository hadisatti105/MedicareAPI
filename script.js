function validateForm() {
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  // Basic email check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email.");
    return false;
  }

  // Basic phone check (10+ digits)
  const phoneRegex = /^[0-9]{10,}$/;
  if (!phoneRegex.test(phone)) {
    alert("Please enter a valid phone number (at least 10 digits).");
    return false;
  }

  return true; // allow submission
}
