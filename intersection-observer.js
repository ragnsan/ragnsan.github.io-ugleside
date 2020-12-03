const sectionOne = document.querySelector(".selskapet__container");

const sections = document.querySelectorAll("section");

const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide");
// const options = {
//   root: null,
//   threshold: 0,
//   rootMargin: "-150px",
// };
//three settings related to the options
// 1. root, by default it is set to null, which is the viewport, and is fine most of time
// 2. threshold, which is between 0 and 1
// 3. rootMargin, like margins in CSS, lets the observer know how far or narrow it can look for the observations
//Can set shorthands like rootMargin: 0px 10px 0px 10px --> But you have to set px or % for it to work
//Only doing this to not get an error in the const below

// const observer = new IntersectionObserver(function (entries, observer) {
//   entries.forEach((entry) => {
//     if (!entry.isIntersecting) {
//       return;
//     }
//     console.log(entry.target);
//     //you tell the observer to stop observing once you've observed it once
//     //good for lazy loading
//     observer.unobserve(entry.target);
//   });
// }, options);

// sections.forEach((section) => {
//   observer.observe(section);
// });

//Intersection observer for the top company section
const appearOptions = {
  threshold: 1,
  rootMargin: "0px 0px 75px 0px",
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach((faders) => {
  appearOnScroll.observe(faders);
});

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});
