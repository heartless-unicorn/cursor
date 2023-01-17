const soundKeys = {
  KeyA: getAudio("hi"),
  KeyS: getAudio("chicka"),
  KeyD: getAudio("ha"),
  KeyF: getAudio("back"),
  KeyG: getAudio("attention"),
  KeyH: getAudio("name"),
  KeyJ: getAudio("stand"),
};

document.addEventListener("keydown", (button) => {
  const key = button.code;
  if (key in soundKeys) {
    playSound(soundKeys[key]);
  }
});

function getAudio(name) {
  return new Audio(`/sounds/${name}.mp3`);
}

function keyClick(button) {
  playSound(soundKeys[button]);
}

function playSound(keyName) {
  keyName.play();
}
