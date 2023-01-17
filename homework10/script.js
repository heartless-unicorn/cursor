const soundKeys = {
  KeyA: getAudio("hi"),
  KeyS: getAudio("chicka"),
};

document.addEventListener("keydown", (button) => {
  const key = button.code;
  if (key in soundKeys) {
    playSound(soundKeys[key]);
  }
});

function getAudio(name) {
  return new Audio(`/src/${name}.mp3`);
}

function keyClick(button) {
  playSound(soundKeys[button]);
}

function playSound(keyName) {
  keyName.play();
}
