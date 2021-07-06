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

ScrollTrigger.create({
    trigger: ".scroller",
    scroller: '.container',
    start: 'top left',
    end: "+=500",
    onToggle: self => console.log("toggled, isActive:", self.isActive),
    onUpdate: self => {
        console.log(
            "progress:", self.progress.toFixed(3),
            "direction:", self.direction,
            "velocity", self.getVelocity()
        );
    }
});