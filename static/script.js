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

// Projects
var projects = document.getElementById("projects")
var projectsNav = document.getElementById("projectsNav");
var projectsTop = projects.offsetTop;
var projectsBottom = projectsTop + projects.offsetHeight;

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

function changeNavBackground() {
  // About
  if ((window.scrollY > aboutTop - 170) && (window.scrollY < aboutBottom - 170)) {
    aboutNav.classList.add("backgroundChange");
  } else {
    aboutNav.classList.remove("backgroundChange");
  }

    // Projects
    if ((window.scrollY > projectsTop - 170) && (window.scrollY < projectsBottom - 170)) {
      projectsNav.classList.add("backgroundChange");
    } else {
      projectsNav.classList.remove("backgroundChange");
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
}


// Nav nar small screens deploy 
var click = 0;
function showNav(){
  if (click == 0){
    $("nav li").addClass("showNav");
    $(".menuLogo").text("Close");
    click = 1;
  } else{
    $("nav li").removeClass("showNav");
    $(".menuLogo").text("Menu");
    click = 0;
  }
}


// TODO : JQuery
// TODO : Background nav change in big screens