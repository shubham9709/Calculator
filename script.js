var input = document.querySelector(".input");
var buttons = document.querySelectorAll(".buttons");
var string = "";

//Implanting the on click functionality

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (e) => {
    if (e.target.innerHTML === "=") {
      var audio = new Audio("tune2.mp3");
      audio.play();
      string = eval(string);
      input.value = string;
    } else if (e.target.innerHTML === "AC") {
      var audio = new Audio("tune1.mp3");
      audio.play();
      string = "";
      input.value = string;
    } else if (e.target.innerHTML === "DEL") {
      var audio = new Audio("tune1.mp3");
      audio.play();
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else {
      var audio = new Audio("tune1.mp3");
      audio.play();
      string = string + e.target.innerHTML;
      input.value = string;
    }
  });
}
