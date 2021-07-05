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

gsap.to('.sun', { rotation: '+=360', duration: 20, repeat: -1, ease: 'none' });

gsap.to('.sun', {
    scrollTrigger: {
        scroller: '.container',
        trigger: 'body',
        scrub: true
    },
    duration: 6,
    ease: Circ.easeIn,
    translateY: '30vw'
});

// gsap.to('.sun', {
//     scrollTrigger: {
//         trigger: 'body',
//         scrub: true
//     },
//     duration: 10,
//     ease: 'none',
//     translateX: '-200vw'
// });