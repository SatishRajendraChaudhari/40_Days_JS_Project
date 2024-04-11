// Detecting Button Press
let drumButtons = document.querySelectorAll('.drum');

for (let i = 0; i < drumButtons.length; i++) {
  document.querySelectorAll('.drum')[i].addEventListener('click', function () {
    var buttonText = this.innerHTML;
    makeSound(buttonText);
  });
}

// Detecting Keyboard Events
document.addEventListener('keypress', function (event) {
  let eventKey = event.key;

  // To accept Small & Capital Letters
  let keyPressed = eventKey.toLowerCase();

  // Adding Animation on keypress
  let activeBTN = document.querySelector(`.${keyPressed}`);
  console.log(activeBTN);
  activeBTN.classList.add('active');

  makeSound(keyPressed);

  console.log(activeBTN);

  setTimeout(() => {
    activeBTN.classList.remove('active');
  }, 300);
});

function makeSound(key) {
  switch (key) {
    case 'w':
      let tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case 'a':
      let tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case 's':
      let tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case 'd':
      let tom4 = new Audio('sounds/tom-1.mp3');
      tom4.play();
      break;

    case 'j':
      let snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case 'k':
      let crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case 'l':
      let kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

    default:
  }
}

// End JavaScript
