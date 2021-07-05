import gsap from "gsap";

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

// gsap.to('.sun', {
//     duration: 10,
//     transform: 'rotate3d(0, 0, 1, 300deg)'
// })