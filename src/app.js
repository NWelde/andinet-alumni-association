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

// I know I know... but it's for the cards
let minicard1 = document.querySelector(".mini-card1");
let minicard2 = document.querySelector(".mini-card2");
let minicard3 = document.querySelector(".mini-card3");
let info2 = document.querySelector(".info2");
let info3 = document.querySelector(".info3");
let info4 = document.querySelector(".info4");

minicard1.addEventListener("mouseover", () => {
  info2.style.transform = "translateY(0%)";
});
minicard1.addEventListener("mouseout", () => {
  info2.style.transform = "translateY(-100%)";
});

minicard2.addEventListener("mouseover", () => {
  info3.style.transform = "translateY(0%)";
});
minicard2.addEventListener("mouseout", () => {
  info3.style.transform = "translateY(-100%)";
});

minicard3.addEventListener("mouseover", () => {
  info4.style.transform = "translateY(0%)";
});
minicard3.addEventListener("mouseout", () => {
  info4.style.transform = "translateY(-100%)";
});
