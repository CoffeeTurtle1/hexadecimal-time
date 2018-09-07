const clock = document.getElementById('clock'); // Get the clock element from index.html
var time;
var hexTime = "";


function getHexTime() { // Function for calculating the current time in hexadecimal
    time = new Date(); // Get the current time

    // Get the number of minuets since the start of the day
    var mins = time.getHours() * 60; 
    mins += time.getMinutes();

    hexTime = "0x" + (Math.round(mins / 5.625)).toString(16); // Calculate the hexadecimal time 
    clock.innerText = hexTime; // Display the hexadecimal time
    mins = "";
}


setInterval(getHexTime, 500); // Call the getHexTime function every 500 milliseconds