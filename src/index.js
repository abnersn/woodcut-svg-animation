import gsap from 'gsap'
import { Cubic } from 'gsap/all'
import { Sine } from 'gsap/gsap-core'
import { Linear } from 'gsap/gsap-core'
import { Power2 } from 'gsap/gsap-core'
import { Circ } from 'gsap/gsap-core'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

async function fetchSVG() {
    const $objects = Array.from(document.getElementsByTagName('object'))
    for (const $object of $objects) {
        const src = $object.getAttribute('data')
        const className = $object.getAttribute('class')
        const style = $object.getAttribute('style')

        const svgContent = await fetch(src).then((res) => res.text())

        $object.insertAdjacentHTML('afterend', svgContent)
        const $svg = $object.nextElementSibling
        $svg.removeAttribute('id')
        $svg.style = style
        $svg.classList.add(className)

        $object.remove()
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
]

const paperColor = paperColors[(Math.random() * paperColors.length) >> 0]
document.getElementById('paper').style.setProperty('--paper-color', paperColor)

async function animate() {
    await fetchSVG()

    /** Sky */

    const skyTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.container',
            scroller: '.scroller',
            start: 'top left',
            horizontal: true,
            end: 'right right',
            scrub: true
        }
    })

    gsap.to('.sun', {
        ease: 'none',
        duration: 30,
        rotate: '+= 360',
        repeat: -1
    })

    skyTimeline
        .to('.sun', { ease: Circ.easeIn, translateY: '200%' })
        .to('.sun', { ease: Linear.easeOut, translateX: '-100vw' }, '<')
        .to('.night', { ease: Circ.easeOut, translateY: '-20%' }, '-=30%')
        .to('.night', { ease: Linear.easeOut, translateX: '-50vw' }, '<')

    /** Cow */

    const cowTimeline = gsap.timeline({
        repeat: -1
    })

    cowTimeline
        .addLabel('start')
        .to('.cow #tail', {
            duration: 1,
            ease: Sine.easeInOut,
            rotate: -10,
            transformOrigin: 'right top',
            yoyo: true,
            repeat: 7
        })
        .to(
            '.cow #head',
            {
                ease: Sine.easeInOut,
                rotate: 10,
                duration: 2,
                yoyo: true,
                repeat: 3
            },
            'start += 0.5'
        )

    /** Chicken */

    const chickenTimeline = gsap.timeline({
        repeat: -1,
        repeatDelay: 2
    })

    chickenTimeline
        .addLabel('start')
        .to('.chicken #wing', {
            rotate: -20,
            yoyo: true,
            duration: 1 / 7,
            repeat: 7,
            transformOrigin: 'top right'
        })
        .to(
            '.chicken',
            {
                duration: 1 / 2,
                translateY: '-10%',
                ease: Power2.easeOut,
                yoyo: true,
                repeat: 1
            },
            'start'
        )
}

window.addEventListener('load', animate)
