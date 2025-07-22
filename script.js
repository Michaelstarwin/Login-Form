 function validateForm() {
      let name = document.getElementById("name").value.trim();
      let email = document.getElementById("email").value.trim();
      let error = document.getElementById("errorMsg");

      if (name === "" || email === "") {
        error.textContent = "Please fill out all fields." ;
        return false; 
      }

      error.textContent = ""; 
      alert("Form submitted successfully!");
      return true;
    }