const main = document.getElementById("main");
main.remove();

const body = document.getElementsByTagName("body")[0];
body.innerHTML =
  '<h1 id="victory">is the champion</h1>';
let newHeader = document.getElementById("victory");
