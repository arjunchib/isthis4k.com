function getWidth() {
  return screen.availWidth * devicePixelRatio
}

function getHeight() {
  return screen.availHeight * devicePixelRatio
}

function is4k() {
  return getWidth() >= 3840 && getWidth() <= 4096
}

document.getElementById("answer").innerHTML = is4k() ? "YES" : "NO"
document.getElementById("info").innerHTML = `Screen dimensions: ${getWidth()} x ${getHeight()}`