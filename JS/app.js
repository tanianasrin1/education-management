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

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}