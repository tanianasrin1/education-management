let valueDisplay =document.querySelectorAll(".num");
let interval =4000;
valueDisplay.forEach(valueDisplay =>{
    let startValue =0;
    let endValue =parseInt(valueDisplay.getAttribute("data-val"));
   let duration = Math.floor(interval / endValue);
   let counter = setInterval(function(){
    startValue += 1 ;
    valueDisplay.textContent = startValue
    if(startValue == endValue ){
        clearInterval (counter)
    }
   },duration)
} )

// slider

let slideIndex = 1;
let myTimeOut ;
showSlides(slideIndex);


// Thumbnail image controls


function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");
    if (slideIndex > slides.length) { slideIndex = 1 }
    if (slideIndex < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    myTimeOut = setTimeout(showSlides, 5000);
    slideIndex++
}

function currentSlide(n) {
  clearTimeout(myTimeOut);
  slideIndex = n;
  showSlides();
}

