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
    } 
    inputBox.value = "";
}