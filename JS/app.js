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

    myTimeOut = setTimeout(showSlides, 8000);
    slideIndex++
}

function currentSlide(n) {
  clearTimeout(myTimeOut);
  slideIndex = n;
  showSlides();
}

// card 
let span = document.getElementsByTagName('span');
	let product = document.getElementsByClassName('teacher_card')
	let product_page = Math.ceil(teacher_card.length/4);
	let l = 0;
	let movePer = 25.34;
	let maxMove = 203;
	// mobile_view	
	let mob_view = window.matchMedia("(max-width: 768px)");
	if (mob_view.matches)
	 {
	 	movePer = 50.36;
	 	maxMove = 504;
	 }

	let right_mover = ()=>{
		l = l + movePer;
		if (teacher_card == 1){l = 0; }
		for(const i of teacher_card)
		{
			if (l > maxMove){l = l - movePer;}
			i.style.left = '-' + l + '%';
		}

	}
	let left_mover = ()=>{
		l = l - movePer;
		if (l<=0){l = 0;}
		for(const i of teacher_card){
			if (product_page>1){
				i.style.left = '-' + l + '%';
			}
		}
	}
	span[1].onclick = ()=>{right_mover();}
	span[0].onclick = ()=>{left_mover();}