document.getElementById("signup-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("message");

    if (username && email && password) {
        // Here you would typically send the data to a server.
        message.textContent = "Sign up successful!";
        message.style.color = "green";

        // Reset form
        document.getElementById("signup-form").reset();
    } else {
        message.textContent = "Please fill in all fields.";
        message.style.color = "red";
    }
});
