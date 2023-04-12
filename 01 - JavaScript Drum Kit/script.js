// Listen for a key being pressed

const animate = function (e) {
  const keyPressed = getKeyPressed(e);
  // Find the appropriate listener
  const keyEle = document.querySelector(`div[data-key="${keyPressed}"]`);
  if (!keyEle) return; // guard clause

  // Add a class and then remove it after 70ms (length of transition)
  keyEle.classList.add("playing");

  this.setTimeout(() => keyEle.classList.remove("playing"), 70);
  playAudio(keyPressed);
};

const getKeyPressed = function (e) {
  // Final character of code is the letter that I care about
  return e.code.at(-1);
};

const playAudio = function (keyPressed) {
  // Find the appropriate listener
  const soundFileURL = document.querySelector(
    `audio[data-key="${keyPressed}"]`
  ).src;
  new Audio(soundFileURL).play();
};

window.addEventListener("keydown", animate);
