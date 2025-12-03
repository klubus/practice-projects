for (let i = 0; i < document.querySelectorAll('.drum').length; i++) {
  document.querySelectorAll('.drum')[i].addEventListener('click', function () {
    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });

  document.addEventListener('keydown', function (e) {
    makeSound(e.key);
    buttonAnimation(e.key);
  });
}

function makeSound(context) {
  switch (context) {
    case 'w': {
      const tom1 = new Audio('../../vendor/sounds/tom-1.mp3');
      tom1.play();

      break;
    }
    case 'a': {
      const tom2 = new Audio('../../vendor/sounds/tom-2.mp3');
      tom2.play();
      break;
    }
    case 's': {
      const tom3 = new Audio('../../vendor/sounds/tom-3.mp3');
      tom3.play();
      break;
    }
    case 'd': {
      const tom4 = new Audio('../../vendor/sounds/tom-4.mp3');
      tom4.play();
      break;
    }
    case 'j': {
      const crash = new Audio('../../vendor/sounds/crash.mp3');
      crash.play();
      break;
    }
    case 'k': {
      const kick = new Audio('../../vendor/sounds/kick-bass.mp3');
      kick.play();
      break;
    }
    case 'l': {
      const snare = new Audio('../../vendor/sounds/snare.mp3');
      snare.play();
      break;
    }
  }
}

function buttonAnimation(currentKey) {
  const activeButton = document.querySelector('.' + currentKey);

  activeButton.classList.add('pressed');
  setTimeout(function () {
    activeButton.classList.remove('pressed');
  }, 100);
}
