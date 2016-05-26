window.onclick = function() {
  var imageName = window.getComputedStyle(document.body)["background-image"];
  if (imageName.indexOf("red") > -1) {
      document.body.style.setProperty("background-image", "url('ansible_green.png')");
  } else {
      document.body.style.setProperty("background-image", "url('ansible_red.png')");
  }
}
