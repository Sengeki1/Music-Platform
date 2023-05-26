function validation() {

    let emailId = document.getElementById('email');
    let icon = document.getElementById('icon1');
    let mailFormat =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    icon.style.display = "inline-block";
      
    if (emailId.value.match(mailFormat)) {
        
      icon.innerHTML = '<i class="fas fa-circle-check"></i>';
      icon.style.color = '#008000';
      return true;
    
    } else if (emailId.value == "") {
        
      icon.style.display = 'none';
      return false;
    
    } else {
    
      icon.innerHTML = '<i class="fas fa-exclamation-circle"></i>';
      icon.style.color = '#ff2851';
      return false;
    
    }
    
  }
  
  function see () {
    
    let input = document.getElementById('pw');
    let input2 = document.getElementById('confirm-pw');
  
    if (input.type === "password" && input2.type === "password") {
      
      input.type = "text";
      input2.type = "text";
  
    } else {
  
      input.type = "password";
      input2.type = "password";
  
    }
  }
  
  function confirm() {
  
    let password = document.getElementById('pw');
    let confirmPass = document.getElementById('confirm-pw');
    let icon = document.getElementById('icon2');
  
    if (password.value == confirmPass.value) {
  
      icon.innerHTML = '<i class="fas fa-circle-check"></i>';
      icon.style.color = "#008000";
  
    } else {
  
      icon.innerHTML = '<i class="fas fa-exclamation-circle"></i>';
      icon.style.color = "#ff2851";
      
    }
  }
  
  
  function check () {
  
    let pass = document.getElementById('pw');
    let message = document.getElementById('error');
    var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}/;
  
    if (pass.value.match(pattern)) {
      message.innerText = "Your password is valid";
      message.style.color = "green";
    } else {
      message.innerText = "The password is to weak";
      message.style.color = "red";
    }
  
  }
  
  function myfun() {
    
    const x1 = document.getElementById('username').value;
    const x2 = document.getElementById('email').value;
    const x3 = document.getElementById('pw').value;
    const x4 = document.getElementById('confirm-pw').value;
    const x5 = document.getElementById('m');
    const x6 = document.getElementById('f');
    const x7 = document.getElementById('error');
  
    localStorage.setItem("Username", x1);
    localStorage.setItem("Email", x2);
    localStorage.setItem("Password", x3);
    localStorage.setItem("Confirm-pw", x4);
    localStorage.setItem("male", x5);
    localStorage.setItem("female", x6)
  
    if (x1 == "" || x2 == "" || x3 == "" || x4 == "") {
      swal("Opps...!", "Input field must be fill!", "error");
    }
    else if (x5.checked != true && x6.checked != true)
    {  
      swal("Opps...!", "Please check your Gender!", "error");
    }
    else if (x7.innerText != "Your password is valid")
    {
      swal("Opps...!", "Please check your Password!", "error");
    }
    else if (validation() == false)
    {
      swal("Opps...!", "Please check your Email!", "error");
    } 
    else if (x3 != x4) 
    {
      swal("Opps...!", "Please check your Password!", "error");
    }
    else 
    {
      setTimeout(function () {
        window.location.href = "../index.html"
      }, 1000);
      swal("Good job!", "Registration Successful!", "success");
    }
  }
  