// Get the container element
var btnContainer = document.getElementById("myDIV");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("btn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
// Get the container element
var hbtnContainer = document.getElementById("hamDIV");

// Get all buttons with class="btn" inside the container
var hbtns = hbtnContainer.getElementsByClassName("btn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < hbtns.length; i++) {
    hbtns[i].addEventListener("click", function() {
        var hcurrent = document.getElementsByClassName("hactive");
        hcurrent[0].className = hcurrent[0].className.replace(" hactive", "");
        this.className += " hactive";
    });
}
