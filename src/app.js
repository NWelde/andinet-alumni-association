let minicards = document.querySelectorAll(".minicard");
let infos = document.querySelectorAll(".mini-info");

let flexes = document.querySelectorAll(".flexy")
const tablet = window.matchMedia(
  "only screen and (min-width: 701px) and (max-width: 900px)"
);
const desktop = window.matchMedia("only screen and (min-width: 1101px)");

function mediaq(e) {
  if (e.matches) {
    for (let i = 0; i < 3; i++) {
      minicards[i].addEventListener("mouseover", () => {
        infos[i].classList.add("info-effect");
      });
      minicards[i].addEventListener("mouseout", () => {
        infos[i].classList.remove("info-effect");
      });
    }
  }
}
desktop.addEventListener("change", mediaq);
mediaq(desktop);

function mediaq2(e) {
  if (e.matches) {
    flexes[1].remove();
    minicards[0].classList.add("main-minicard");
  } else {
    minicards[0].classList.remove("main-minicard");
  }
}
tablet.addEventListener("change", mediaq2);
mediaq2(tablet);

// ScrollIt.js
$(function () {
  $.scrollIt();
});

// particle.js
particlesJS("particles-js", {
  particles: {
    number: { value: 100, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 1, color: "#fff" },
      polygon: { nb_sides: 3 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: false, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 75, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});
