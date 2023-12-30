const navbar = document.getElementById("resp");
const hamburger = document.getElementById("menu");

function myFunction() {
  if (navbar.style.height === "150px") {
    navbar.style.height = "0px";
    navbar.style.padding = "0px";
  } else {
    navbar.style.height = "150px";
    navbar.style.padding = "20px";
  }
  // navbar.style.height+=20;
  // if (navbar.style.height === 0) {
  //   // navbar.style.display = "flex";
  //   navbar.style.height = "100%";
  //   console.log("show");
  // } else {
  //   // navbar.style.display = "none";
  //   navbar.style.height = "0";
  //   console.log("hide");
  // }
}

hamburger.addEventListener("click", myFunction);

let arrOfImgs = [
  // "https://cdn.pixabay.com/photo/2023/10/05/16/13/mountains-8296344_1280.jpg",
  // "https://cdn.pixabay.com/photo/2023/12/06/21/07/photo-8434386_1280.jpg",
  // "https://cdn.pixabay.com/photo/2023/10/16/03/44/daughter-8318355_1280.jpg",
  // "https://cdn.pixabay.com/photo/2012/03/04/01/01/father-22194_1280.jpg",
  // "https://cdn.pixabay.com/photo/2023/11/11/19/58/whisky-8381774_1280.jpg",

  // "./background3.jpg",
  "./background4.jpg",
  "./background5.jpg",
  "./background6.jpg",
  "./background.jpg",
  "./background2.jpg",
];
const testImage = "./background3.jpg";
let carousel = document.getElementById("firstcontainer");
// carousel.style.backgroundColor = "red";
carousel.style.backgroundImage = `url(${testImage})`;
let currentValue = 0;

const goToPrevImg = () => {
  currentValue = currentValue - 1;
  if (currentValue < 0) {
    currentValue = 0;
    return;
  }
  carousel.style.backgroundImage = `url(${arrOfImgs[currentValue]})`;
};

const goToNextImg = () => {
  currentValue = currentValue + 1;
  if (currentValue > arrOfImgs.length - 1) {
    currentValue = arrOfImgs.length - 1;
    return;
  }
  carousel.style.backgroundImage = `url(${arrOfImgs[currentValue]})`;
};

setInterval(function () {
  console.log("good");
  if (currentValue >= arrOfImgs.length - 1) {
    currentValue = -1;
  }
  goToNextImg();
}, 7000);
