function add(){
    
    const inputBox = document.getElementById("input_text");
    const listContainer = document.getElementById("playlist-container");

    if(inputBox.value === ''){
        alert("You must insert a playlist!");
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveData();
    } 
    inputBox.value = "";
}

const list = document.getElementById("playlist-container");

list.addEventListener('click', (e) =>{
    if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("Data", list.innerHTML);
}

function checkTask () {
    list.innerHTML = localStorage.getItem("Data");
}
checkTask();

document.getElementById('btn').addEventListener("click", function () {
    window.location.href="login/login.html"
});

function redirect() {
    window.location.href="payment/index.html"
}