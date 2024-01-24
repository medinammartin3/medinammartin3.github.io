// Sticky nav bar
window.onscroll = function() {stick()};

var header = document.getElementById("nav");

var sticky = header.offsetTop;

function stick() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

//TODO : Progress bar animation runs when section is in screen (and not before)