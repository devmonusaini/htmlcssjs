function handleSubmit(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the values from the input fields
  const firstName = document.getElementById("first-name").value.trim();
  const lastName = document.getElementById("last-name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value.trim();

  // Validation
  const errors = [];

  // Validate First Name and Last Name
  if (!firstName) {
    errors.push("First Name is required.");
  }
  if (!lastName) {
    errors.push("Last Name is required.");
  }

  // Validate Email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    errors.push("Please enter a valid email address.");
  }

  // Validate Phone Number
  const phonePattern = /^[0-9]{10,15}$/; // Allows 10 to 15 digits only
  if (!phonePattern.test(phone)) {
    errors.push("Please enter a valid phone number (10-15 digits).");
  }

  // Validate Password
  if (password.length < 8) {
    errors.push("Password must be at least 8 characters long.");
  }

  // Log errors if any
  if (errors.length > 0) {
    alert(errors.join("\n")); // Show errors in an alert
    return; // Stop further processing
  }

  // Log the data to the console if all validations pass
  console.log({
    firstName,
    lastName,
    email,
    phone,
    password,
  });

  // Show success message
  const successMessage = document.getElementById("success-message");
  successMessage.style.display = "block";

  // Optionally, hide the success message after a few seconds
  setTimeout(() => {
    successMessage.style.display = "none";
  }, 3000); // Adjust duration as needed
}

function toggleMenu() {
  const navToggleBox = document.getElementById("nav-toggle-box");

  if (navToggleBox.classList.contains("active")) {
    navToggleBox.classList.remove("active");
  } else {
    navToggleBox.classList.add("active");
  }
}
