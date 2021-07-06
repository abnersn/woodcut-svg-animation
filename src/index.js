import gsap from "gsap";
import { Circ } from "gsap/gsap-core";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* Paper colors */
const paperColors = [
    '#ff9fb5',
    '#f1b5a7',
    'white',
    '#ffc78d',
    '#cfd2d3',
    '#afdff8'
];

const paperColor = paperColors[Math.random() * paperColors.length >> 0];
document.getElementById('paper').style
    .setProperty('--paper-color', paperColor);

const sunScrollTrigger = {
    trigger: ".container",
    scroller: '.scroller',
    start: 'top left',
    markers: true,
    horizontal: true,
    end: "+=700%",
    scrub: true
};

gsap.to('.sun', {
    scrollTrigger: sunScrollTrigger,
    ease: 'none',
    translateX: '-100vw'
});

gsap.to('.sun', {
    scrollTrigger: sunScrollTrigger,
    ease: Circ.easeIn,
    translateY: '50vw'
});

const nightScrollTrigger = {
    trigger: ".container",
    scroller: '.scroller',
    start: 'top -100%',
    markers: true,
    horizontal: true,
    end: "+=900%",
    scrub: true
};

gsap.from('.night', {
    scrollTrigger: nightScrollTrigger,
    ease: Circ.easeOut,
    translateY: '10vw'
});

gsap.from('.night', {
    scrollTrigger: nightScrollTrigger,
    ease: 'none',
    translateX: '120vw'
});