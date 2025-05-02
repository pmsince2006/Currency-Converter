document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("errorMessage");
  
    // Simple validation (you can add real auth here)
    if (email === "user@example.com" && password === "password123") {
      errorMessage.textContent = "";
      alert("Login successful! Redirecting...");
      // Redirect to dashboard or home
      window.location.href = "converter.html"; // Placeholder
    } else {
      errorMessage.textContent = "Invalid email or password.";
    }
  });
  