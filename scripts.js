function showDate() {
  var date = document.getElementById("date");
  var today = new Date();
  date.innerHTML =
    "Date : " +
    today.getDate() +
    "/" +
    (today.getMonth() + 1) +
    "/" +
    today.getUTCFullYear().toString().substring(2);
}
showDate();

function togglePlay() {
  var myVideo = document.getElementById("player");
  var toggle = document.getElementById("toggle-btn");
  if (myVideo.paused) {
    myVideo.play();
    toggle.innerText = "||";
  } else {
    myVideo.pause();
    toggle.innerText = ">";
  }
}

function validateForm() {
  var fname = document.forms["choose"]["fname"].value;
  var lname = document.forms["choose"]["lname"].value;
  var age = document.forms["choose"]["age"].value;
  var email = document.forms["choose"]["email"].value;
  var city = document.forms["choose"]["city"].value;
  var choice = document.forms["choose"]["choice"].value;
  if (!fname.match(/^[A-Za-z]+$/)) {
    alert("First Name:\t Characters Only!");
    return false;
  }
  if (!lname.match(/^[A-Za-z]+$/)) {
    alert("Last Name:\t Characters Only!");
    return false;
  }
  if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    alert("Email ID:\t Invalid email!");
    return false;
  }

  localStorage.setItem("name", fname + " " + lname);
  localStorage.setItem("age", age);
  localStorage.setItem("email", email);
  localStorage.setItem("city", city);
  localStorage.setItem("choice", choice);

  document.body.innerHTML =
    '<div align="center">' +
    "<h2>Entered Data</h2>" +
    "Name: " +
    localStorage.getItem("name") +
    "<br>" +
    "Age: " +
    localStorage.getItem("age") +
    "<br>" +
    "Email: " +
    localStorage.getItem("email") +
    "<br>" +
    "City: " +
    localStorage.getItem("city") +
    "<br>" +
    "Choice: " +
    localStorage.getItem("choice") +
    "</div>";
  return false;
}
