// Sticky nav bar
window.onscroll = function() {
  stick();
  changeNavBackground();
};

var nav = document.getElementById("nav");
var sticky = nav.offsetTop;

function stick() {
  if (window.scrollY > sticky + 15 ) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}

// Nav actual section background change

// About
var about = document.getElementById("about");
var aboutNav = document.getElementById("aboutNav");
var aboutTop = about.offsetTop;
var aboutBottom = aboutTop + about.offsetHeight;

// Education
var education = document.getElementById("education")
var educationNav = document.getElementById("educationNav");
var educationTop = education.offsetTop;
var educationBottom = educationTop + education.offsetHeight;

// Experience
var experience = document.getElementById("experience")
var experienceNav = document.getElementById("experienceNav");
var experienceTop = experience.offsetTop;
var experienceBottom = experienceTop + experience.offsetHeight;

// Programming
var programming = document.getElementById("programming");
var programmingNav = document.getElementById("programmingNav");
var programmingTop = programming.offsetTop;
var programmingBottom = programmingTop + programming.offsetHeight;

// Projects
var projects = document.getElementById("projects")
var projectsNav = document.getElementById("projectsNav");
var projectsTop = projects.offsetTop;
var projectsBottom = projectsTop + projects.offsetHeight;

// Contact
var contact = document.getElementById("contact")
var contactNav = document.getElementById("contactNav");
var contactTop = contact.offsetTop;
var contactBottom = contactTop + contact.offsetHeight;

function changeNavBackground() {
  // About
  if ((window.scrollY > aboutTop - 170) && (window.scrollY < aboutBottom - 170)) {
    aboutNav.classList.add("backgroundChange");
  } else {
    aboutNav.classList.remove("backgroundChange");
  }

  // Education
  if ((window.scrollY > educationTop - 170) && (window.scrollY < educationBottom - 170)) {
    educationNav.classList.add("backgroundChange");
  } else {
    educationNav.classList.remove("backgroundChange");
  }

  // Experience
  if ((window.scrollY > experienceTop - 170) && (window.scrollY < experienceBottom - 170)) {
    experienceNav.classList.add("backgroundChange");
  } else {
    experienceNav.classList.remove("backgroundChange");
  }

  // Programming
  if ((window.scrollY > programmingTop - 170) && (window.scrollY < programmingBottom - 170)) {
    programmingNav.classList.add("backgroundChange");
    // Activate animations
    $(".progressbar").addClass('progressBarsAnimation'); 
  } else {
    programmingNav.classList.remove("backgroundChange");
  }

  // Projects
  if ((window.scrollY > projectsTop - 170) && (window.scrollY < projectsBottom - 170)) {
    projectsNav.classList.add("backgroundChange");
  } else {
    projectsNav.classList.remove("backgroundChange");
  }

  // Contact
  if ((window.scrollY > contactTop - 170) && (window.scrollY < contactBottom - 170)) {
    contactNav.classList.add("backgroundChange");
  } else {
    contactNav.classList.remove("backgroundChange");
  }
}

//TODO : Progress bar animation runs when section is in screen (and not before)
// TODO : JQuery
// TODO : Background nav change in big screens