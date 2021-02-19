// Tab
let tabHeader = document.getElementsByClassName("tab-header")[0];
let tabIndicator = document.getElementsByClassName("tab-indicator")[0];
let tabBody = document.getElementsByClassName("tab-body")[0];

let tabsPane = tabHeader.getElementsByClassName("tablinks");

for(let i=0; i<tabsPane.length; i++){
    tabsPane[i].addEventListener("click", function(){
        tabHeader.getElementsByClassName("active-tab")
        [0].classList.remove("active-tab");
        tabsPane[i].classList.add("active-tab");

        tabBody.getElementsByClassName("active-tab")
        [0].classList.remove("active-tab");
        tabBody.getElementsByClassName("list-tab")
        [i].classList.add("active-tab");

        tabIndicator.style.left =`calc(calc(100%/4) * ${i})`;
    });
}

// Image Slider
$(document).ready(function() {
  $('#autoWidth').lightSlider({
      autoWidth:true,
      loop:true,
      onSliderLoad: function() {
          $('#autoWidth').removeClass('cS-hidden');
      } 
  });  
});

// Accordion
var acc = document.getElementsByClassName('type');
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active-slider");
    var panel = 
    // this.nextElementSibling;
    document.querySelectorAll(".img-slider");
    if (panel.style.display === "flex") {
      panel.style.display = "none";
    } else {
      panel.style.display = "flex";
    }
  });
}

// Image Slider Detail Potensi
var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btnround');
let currentSlide = 1;

var manualNav = function(manual){
  slides.forEach((slide) => {
    slide.classList.remove('active-imgslider');

    btns.forEach((btnround) => {
      btnround.classList.remove('active-btn');
  });
});

  slides[manual].classList.add('active-imgslider');
  btns[manual].classList.add('active-btn');
}

btns.forEach((btnround, i) => {
  btnround.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});

// Sidebar
let sidebar = document.getElementsByClassName("sidebar")[0];
let isi = document.getElementsByClassName("isi")[0];
    
let sidePane = sidebar.getElementsByTagName("div");
    
for(let i=0; i<sidePane.length; i++){
    sidePane[i].addEventListener("click", function(){
    sidebar.getElementsByClassName("active-bar")
    [0].classList.remove("active-bar");
    sidePane[i].classList.add("active-bar");
    
    isi.getElementsByClassName("active-bar")
    [0].classList.remove("active-bar");
    isi.getElementsByClassName("menu")
    [i].classList.add("active-bar");
  });
}

// Sticky Header
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

// Banner and Agenda Slide Show
var slideIndex = 1;
        showDivs(slideIndex);
        
        function plusDivs(n) {
          showDivs(slideIndex += n);
        }
        
        function currentDiv(n) {
          showDivs(slideIndex = n);
        }
        
        function showDivs(n) {
          var i;
          var x = document.getElementsByClassName("mySlides");
          var dots = document.getElementsByClassName("demo");
          if (n > x.length) {slideIndex = 1}
          if (n < 1) {slideIndex = x.length}
          for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";  
          }
          for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" w3-white", "");
          }
          x[slideIndex-1].style.display = "block";  
          dots[slideIndex-1].className += " w3-white";
        }

// Navigation Hover
function moveUp(x) {
    x.style.marginTop = "0px";
}

// Toogle Menu (Responsive)
function toogleMenu(){
    const menuToogle = document.querySelector('.menuToogle');
    const navigation = document.querySelector('.navigation');
    menuToogle.classList.toggle('active');
    navigation.classList.toggle('active');
}