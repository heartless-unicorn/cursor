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
    let button = Array.from(document.querySelectorAll(`button`)).find(
      (element) => element.textContent === key.charAt(key.length - 1)
    );
    button.classList.add("active");
    setTimeout(() => button.classList.remove("active"), 1500);
  }
});

function getAudio(name) {
  const audio = new Audio(`media/${name}.mp3`);
  return audio;
}

function keyClick(button) {
  playSound(soundKeys[button]);
}

function playSound(keyName) {
  keyName.play();
}
