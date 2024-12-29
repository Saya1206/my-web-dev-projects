function validateForm() {
  // Get form values
  let username = document.getElementById("uname").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("pass").value;

  // Error flags
  let isValid = true;

  // Clear previous errors
  document.getElementById("usernameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("passwordError").innerText = "";

  // Username check
  if (username === "") {
    document.getElementById("usernameError").innerText = "Username is required";
    isValid = false;
  }

  // Email check
  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (email === "") {
    document.getElementById("emailError").innerText = "Email is required";
    isValid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById("emailError").innerText =
      "Please enter a valid email address";
    isValid = false;
  }

  // Password check
  if (password === "") {
    document.getElementById("passwordError").innerText = "Password is required";
    isValid = false;
  } else if (password.length < 6) {
    document.getElementById("passwordError").innerText =
      "Password must be at least 6 characters";
    isValid = false;
  }

  // Check if all validations passed
  if (isValid) {
    alert("Form submitted successfully!");
  }
}
