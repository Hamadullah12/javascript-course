// fist of all we will get all the slide class

const slide = document.querySelectorAll(".slide");
const prevButt = document.getElementById("prevButt")
const nextButt = document.getElementById("nextButt")
var counter = 0;

// for previous button
const goPrevious = () => {
    counter--;
    if (counter < 0) {
        counter = 0;//so we add this condition to not go in negaticve 
    }
    slideImage();
 
}

// for next button 
const goNext = () => {
    counter++;
    if (counter >= slide.length) {//we add this condition to not go from the last image stop there 
        counter = slide.length - 1;
    }
    slideImage();
}
// call both the funcitons here in event listener
prevButt.addEventListener("click", goPrevious)
nextButt.addEventListener("click", goNext)

// now we will add for each loop on slide

slide.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`;//the reason behind using this is that the first element will get 0% next ,100%,200%,300%. so it will make a slide 
    }
)

const slideImage = () => {
    slide.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}

// at the end the last thing i wanna to add is that if we have to add slide from up to down so 
// just simply change the left into top and botton and transform Y.