import gsap from "gsap";
import { Cubic } from "gsap/all";
import { Circ } from "gsap/gsap-core";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

async function fetchSVG() {
    const $objects = Array.from(document.getElementsByTagName('object'));
    for (const $object of $objects) {
        const src = $object.getAttribute('data');
        const className = $object.getAttribute('class');
        const style = $object.getAttribute('style');

        const svgContent = await fetch(src).then(res => res.text());
        
        $object.insertAdjacentHTML('afterend', svgContent);
        const $svg = $object.nextElementSibling;
        $svg.removeAttribute('id');
        $svg.style = style;
        $svg.classList.add(className);

        $object.remove();
    }
}

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

async function animate() {
    await fetchSVG();

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

    gsap.to('.cow #head', {
        rotate: '+=8',
        duration: 2,
        repeatDelay: 1,
        yoyo: true,
        ease: Cubic.easeInOut,
        repeat: -1
    });

    gsap.to('.cow #tail', {
        rotate: '-=8',
        duration: .5,
        yoyo: true,
        ease: Cubic.easeInOut,
        repeat: -1,
        transformOrigin: 'top right'
    });
}

window.addEventListener('load', animate);