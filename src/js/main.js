import AOS from "aos";
import "aos/dist/aos.css";

import "../scss/reset.scss";
import "../scss/main.scss";
import "../scss/media.scss";

const nav = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");

navBtn.onclick = () => {
  nav.classList.toggle("open")
    ? navBtn.classList.add("close")
    : navBtn.classList.remove("close");
};

AOS.init();
