var checkbox = document.getElementById("Changetheme");// get checkbox to variable

//check storage if dark mode was on or off and

if (sessionStorage.getItem("mode")== "dark"){
    darkMode(); // if dark mode is on, run this function

} else {
    nodark(); // else run this function
}

// if the checkbox state is changed, ruh this other function

if (checkbox.checked) {
    darkmode(); // if the checkbox is checked, run this function

} else {
    nodark(); // else run this function
}

// function for checkbox when checkbox is checked

function darkMode() {
    document.body.classList.add("dark-mode");
    // add a class to the body tag
    checkbox.checked = true; //set checkbox to be checked state
    
}