var i = 0;

function read() {
  if (!i) {
    document.getElementsByClassName("dyr__tekst__more")[0].style.display =
      "inline";
    document.getElementsByClassName("dyr__tekst__dots")[0].style.display =
      "none";
    document.getElementsByClassName("dyr__tekst__read")[0].innerHTML =
      "Les mindre";
    i = 1;
  } else {
    document.getElementsByClassName("dyr__tekst__more")[0].style.display =
      "none";
    document.getElementsByClassName("dyr__tekst__dots")[0].style.display =
      "inline";
    document.getElementsByClassName("dyr__tekst__read")[0].innerHTML =
      "Les mer";
    i = 0;
  }
}

function readTo() {
  if (!i) {
    document.getElementsByClassName("dyr__tekst__more")[1].style.display =
      "inline";
    document.getElementsByClassName("dyr__tekst__dots")[1].style.display =
      "none";
    document.getElementsByClassName("dyr__tekst__read")[1].innerHTML =
      "Les mindre";
    i = 1;
  } else {
    document.getElementsByClassName("dyr__tekst__more")[1].style.display =
      "none";
    document.getElementsByClassName("dyr__tekst__dots")[1].style.display =
      "inline";
    document.getElementsByClassName("dyr__tekst__read")[1].innerHTML =
      "Les mer";
    i = 0;
  }
}

function readTre() {
  if (!i) {
    document.getElementsByClassName("dyr__tekst__more")[2].style.display =
      "inline";
    document.getElementsByClassName("dyr__tekst__dots")[2].style.display =
      "none";
    document.getElementsByClassName("dyr__tekst__read")[2].innerHTML =
      "Les mindre";
    i = 1;
  } else {
    document.getElementsByClassName("dyr__tekst__more")[2].style.display =
      "none";
    document.getElementsByClassName("dyr__tekst__dots")[2].style.display =
      "inline";
    document.getElementsByClassName("dyr__tekst__read")[2].innerHTML =
      "Les mer";
    i = 0;
  }
}

//Slide in animation for company section

function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImages = document.querySelectorAll(".slide-in");

function checkSlide() {
  sliderImages.forEach((sliderImage) => {
    // half way through the image
    const slideInAt =
      window.scrollY + window.innerHeight - sliderImage.height / 2;
    // bottom of the image
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if (isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add("active");
    } else {
      sliderImage.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", debounce(checkSlide));
