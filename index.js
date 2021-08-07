// alert("awrara.js")
var previousBtn = document.querySelector(".prev");
var nextBtn = document.querySelector(".next");
var number = document.querySelector(".number");
var images = document.querySelector(".fimage");

const myImages = ["img-1.jpeg", "img-2.jpeg", "person-1.jpeg", "third.jpeg", "download.jpeg"];

counter = 0
nextBtn.addEventListener("click", function(){
  // alert('hi')
  // console.log(counter)
  counter = counter + 1;
  console.log("Posative is " + counter);
  number.innerHTML = counter;
  myImage = myImages[counter];
  images.src= myImage;

    btnss(counter);
    btnsUp(counter);


  if(counter == myImages.length){
   counter = 0
   number.innerHTML = counter;
   myImage = myImages[counter];
   images.src= myImage
  }



})


previousBtn.addEventListener("click", function(){
  // alert ("next have got clicked");
  if(counter === 0){
   // previousBtn.classList.add("notShownPrev")
   counter = myImages.length
   number.innerHTML = counter;
   myImage = myImages[counter];
   images.src= myImage
  }

  console.log("minus is " + counter);
    counter = counter - 1;
    number.innerHTML = counter;
    myImage = myImages[counter];
    images.src= myImage

    btnss(counter);
    btnsUp(counter);
    // btnsUp(counter);
})

function btnss (count){
  if(count == 0){
  previousBtn.classList.add("hidePrev");
  // nextBtn.classList.add("showNext")
} else if (count > 1 && count < myImages.length){
    previousBtn.classList.add("showPrev")
    previousBtn.classList.remove("hidePrev");
    // nextBtn.classList.remove("notShownPrev")
  }
}

//
function btnsUp (count){
  if(count == myImages.length-1){
  nextBtn.classList.add("hideNext");
  // previousBtn.classList.add("shownPrev")

} else if (count < myImages.length-1 && count > 0){
    nextBtn.classList.remove("hideNext");
    nextBtn.classList.remove("showNext");

  }
}
