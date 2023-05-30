function cardSpace() {
  const carddigit = document.getElementById('card').value;
    if(carddigit.length == 4 || carddigit.length == 9 || carddigit.length == 14){
      document.getElementById('card').value = carddigit+" ";
      document.getElementById('card').max = 1;
    }
}
function addSlashes() {
  const expiredate = document.getElementById('date').value;
    if(expiredate.length == 2){
      document.getElementById('date').value = expiredate+"/";
      document.getElementById('date').max = 1;
    }
}

function myfun() {
  const card = document.getElementById('card').value;
  const date = document.getElementById('date').value;
  const name = document.getElementById('name').value;
  const cvc = document.getElementById('cvc').value;
  if(card == "" || date == "" || name == "" || cvc == ""){
    swal("Opps...!", "Input field must be fill!", "error");
  } else{
      setTimeout(function () {
        window.location.href = "../index.html"
      }, 1000);
      swal("Good job!", "Payment Successful!", "success");
  }
}