const nameInput = document.getElementById("name");

function checkInput() {
  if (nameInput.value != "") {
    console.log(nameInput.value);
    enterAbout();
  } else {
    alert("You have to enter your name!");
  }
}

function enterAbout() {
  window.location.href = "info.html";
}
