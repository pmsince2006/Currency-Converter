document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // prevent actual form submission
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("formMessage");
  
    if (!name || !email || !message) {
      formMessage.style.color = "red";
      formMessage.textContent = "Please fill out all fields.";
      return;
    }
  
    // Simulate sending message
    formMessage.style.color = "green";
    formMessage.textContent = `Thank you, ${name}. Your message has been sent!`;
  
    // Optionally reset the form
    document.getElementById("contactForm").reset();
  });
  