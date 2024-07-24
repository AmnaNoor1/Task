var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos < currentScrollPos) {
    document.getElementById("navbar").style.visibility = "hidden";
  } else {
    document.getElementById("navbar").style.top = "35";
    document.getElementById("navbar").style.visibility = "visible";
  }
  prevScrollpos = currentScrollPos;
};
