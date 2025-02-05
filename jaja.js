
let sign = prompt("What's your sign?");

if (sign.toLowerCase() === "scorpio") {
  alert("Wow! I'm a Scorpio too!");
}


window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("demo").innerHTML = "Привет, " + sign;
});
