function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);






/* select audio element 
function playSound(event) {
  const audio = document.querySelector(`audio[data-
  key="${event.keyCode}"]`);
  const key = document.querySelector(`.key[data-
  key="${event.keyCode}"]`);
  if(!audio) return;
/* rewinds sound when key pressed again
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}

function removeTransition(event) {
/* skip if not transform
  if (event.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

/* select all keys
const keys = document.querySelectorAll('.key');
/* when the transition has ended remove it
keys.forEach(key => key.addEventListner('transitionend', removeTransition));

/* listen for a keydown event then run event function
window.addEventListener('keydown', playSound); */
