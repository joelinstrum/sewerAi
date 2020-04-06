export const removeHashFromAddressBar = () => {
  window.onhashchange = () => _removeHash();
};

function _removeHash() {
  window.history.pushState("", document.title, window.location.pathname);
}

export function generateId(prefix = "") {
  const letters = getRandomLetters(4);
  return prefix + letters + Math.floor(Date.now() / 1000);
}

export function getRandomLetters(n) {
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  let retval = "";
  for (let i = 0; i < n; i++) {
    retval += alpha.charAt(getRandomInt(0, 25));
  }
  return retval;
}

export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function setWindowTitle(title) {
  document.title = title;
}

export function setFavicon(iconImage) {
  var link =
    document.querySelector("link[rel*='icon']") ||
    document.createElement("link");
  link.type = "image/x-icon";
  link.rel = "shortcut icon";
  link.href = iconImage;
  document.getElementsByTagName("head")[0].appendChild(link);
}
