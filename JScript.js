function validateInput() {
    const username = document.querySelector('.inpu1[type="text"]').value;
    const password = document.querySelector('.inpu1[type="password"]').value;
  

    if (username.length < 6 || password.length < 6) {
        alert('Username and password must be at least 6 characters long.');
        return false;
      }
    
      if (!/^\d+$/.test(password)) {
        alert('Password should contain only numbers.');
        return false;
      }

    if (username === "vikas@gmail.com" && password === "123456") {
      window.location.href = "home.html";
      return true;
    } else {
      alert('Invalid username or password.');
      return false;
    }
  
    return true;
  }
  
