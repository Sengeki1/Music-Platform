function myfun() {
  
    const emailAddress = document.getElementById('email').value;
    const passWord = document.getElementById('pw').value; 
  
    const Email = localStorage.getItem("Email");
    const Password = localStorage.getItem("Password");
  
    if (emailAddress == "" || passWord == "")
    {
      swal("Opps...!", "Input field must be fill!", "error");
    } else if (emailAddress == Email && passWord == Password)
    {
      setTimeout(function () {
        window.location.href = "../index.html"
      }, 1000);
      swal("Good job!", "Login Successful!", "success");
    } else 
    {
      swal("Opps...!", "Something is Wrong!\n Check Password or Email!", "error");
    }
  
}
  
function checker() {
  
    let emailId = document.getElementById('email');
    let icon = document.getElementById('icon2');
    let mailFormat =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
    icon.style.display = "inline-block";
    
    if (emailId.value.match(mailFormat)) {
      
      icon.innerHTML = '<i class="fas fa-circle-check"></i>';
      icon.style.color = '#008000';
  
    } else if (emailId.value == "") {
      
      icon.style.display = 'none';
  
    } else {
  
      icon.innerHTML = '<i class="fas fa-exclamation-circle"></i>';
      icon.style.color = '#ff2851';
  
    }
  
}
   