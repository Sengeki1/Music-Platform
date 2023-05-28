function myfun() {
    
    const x1 = document.getElementById('name').value;
    const x2 = document.getElementById('card').value;
    const x3 = document.getElementById('date').value;
    const x4 = document.getElementById('cvc').value;
  
    localStorage.setItem("name", x1);
    localStorage.setItem("card", x2);
    localStorage.setItem("date", x3);
    localStorage.setItem("cvc", x4);
  
    if (x1 == "" || x2 == "" || x3 == "" || x4 == "") {
      swal("Opps...!", "Input field must be fill!", "error");
    }
    else if (x2.innerText != true)
    {
      swal("Opps...!", "Please check your Card Number!", "error");
    }
    else if (x3 != true) 
    {
      swal("Opps...!", "Please check the expire date!", "error");
    }
    else if (x4 != true)
    {
      swal("Opps...!", "Please check your CVC!", "error");
    }
    else 
    {
      setTimeout(function () {
        window.location.href = "../index.html"
      }, 1000);
      swal("Good job!", "Payment Successful!", "success");
    }
  }