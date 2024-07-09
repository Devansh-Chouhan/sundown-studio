const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true,
});


function movingText() {
  document.addEventListener("keydown", function (event) {
    if (event.keyCode === 37 || event.keyCode === 39) {
      event.preventDefault();
    }
  });
}

movingText();

function allPages() {
  var elemC = document.querySelector("#elem-container");
  var fixed = document.querySelector("#fixed-image");
  elemC.addEventListener("mouseenter", function () {
    fixed.style.display = "block";
  });
  elemC.addEventListener("mouseleave", function () {
    fixed.style.display = "none";
  });

  var elems = document.querySelectorAll(".elem");
  elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      var image = e.getAttribute("data-image");
      fixed.style.backgroundImage = `url(${image})`;
    });
  });
}

var cursor = document.querySelector("#cursor");
var swiper = document.querySelector(".swiper");
const cursorFunction = swiper.addEventListener("mousemove", function (dets) {
  cursor.style.display = "block";
  cursor.style.left = dets.x + "px";
  cursor.style.top = dets.y + "px";
});
swiper.addEventListener("mouseenter", function (dets) {
  cursorFunction();
});
swiper.addEventListener("mouseleave", function (dets) {
  cursor.style.display = "none";
});

function handleStyle1() {
  var imageUrl = document
    .querySelector("#bigbox-text h1:nth-child(1)")
    .getAttribute("data-image");
  document.querySelector(
    "#bigbox-image"
  ).style.backgroundImage = `url(${imageUrl})`;

  // Reset border styles of all h1 elements
  document.querySelectorAll("#bigbox-text h1").forEach(function (element) {
    element.style.borderLeft = "#333333 2.5px solid";
    element.style.color = "#333333";
  });

  // Apply border to the clicked h1 element
  document.querySelector("#bigbox-text h1:nth-child(1)").style.borderLeft =
    "solid 2.5px #ff4500";
  document.querySelector("#bigbox-text h1:nth-child(1)").style.color = "white";
}

function handleStyle2() {
  var imageUrl = document
    .querySelector("#bigbox-text h1:nth-child(2)")
    .getAttribute("data-image");
  document.querySelector(
    "#bigbox-image"
  ).style.backgroundImage = `url(${imageUrl})`;

  document.querySelectorAll("#bigbox-text h1").forEach(function (element) {
    element.style.borderLeft = "#333333 2.5px solid";
    element.style.color = "#333333";
  });

  document.querySelector("#bigbox-text h1:nth-child(2)").style.borderLeft =
    "solid 2.5px #ff4500";
  document.querySelector("#bigbox-text h1:nth-child(2)").style.color = "white";
}

function handleStyle3() {
  var imageUrl = document
    .querySelector("#bigbox-text h1:nth-child(3)")
    .getAttribute("data-image");
  document.querySelector(
    "#bigbox-image"
  ).style.backgroundImage = `url(${imageUrl})`;

  document.querySelectorAll("#bigbox-text h1").forEach(function (element) {
    element.style.borderLeft = "#333333 2.5px solid";
    element.style.color = "#333333";
  });

  document.querySelector("#bigbox-text h1:nth-child(3)").style.borderLeft =
    "solid 2.5px #ff4500";
  document.querySelector("#bigbox-text h1:nth-child(3)").style.color = "white";
}

handleStyle3();
handleStyle2();
handleStyle1();

function swiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
  });
}
function loaderAnimation() {
  var loader = document.querySelector("#loader");
  setTimeout(function () {
    loader.style.top = "-100%";
  }, 4000);
}
swiperAnimation();
allPages();
loaderAnimation();
