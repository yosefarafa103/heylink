const bars = document.querySelector('.bars');
const sidebar = document.getElementsByTagName('aside')[0];
bars.addEventListener('click', () => {
    bars.classList.toggle('close')
    if (bars.classList.contains('close')) {
        sidebar.style.display = 'block'
    } else {
        sidebar.style.display = 'none'
    }
})
document.querySelector('.sidebar-discover').addEventListener('click', () => {
    document.querySelector('.sidebar-discover').classList.toggle('bottom-[20px]')
    document.querySelector('.sidebar-discover .list').classList.toggle('active')
    document.querySelector('.arrow-right i').classList.toggle('rotate-[90deg]')
})
document.querySelector('.lang').addEventListener('click', () => {
    document.querySelector('.languge').classList.toggle('hidden')
})
const tl = gsap.timeline();
function animate() {
    tl.from(".header ul li", {
        x: -10,
        opacity: 0,
        duration: 1,
        stagger: {
            each: 0.1
        }
    })
    tl.from(".header .regsiter", {
        scale: 0,
        opacity: 0,
        stagger: {
            each: 0.1
        }
    })
    tl.from(".main-section", {
        y: 20,
        opacity: 0,
    })

}
gsap.from('.feats div', {
    y: 100,
    scale: 1.6,
    stagger: 0.2,
    opacity: 0
})
gsap.to('.feats div', {
    y: 0,
    opacity: 1,
    scale: 1,
    duration: 1,
    scrollTrigger: {
        trigger: '.feats div',
        start: '-100px 80%',
        end: 'bottom 70% ',
        scrub: 2
    }
})
gsap.from('.video1 video', {
    x: '50vw',
    scale: 0,
    opacity: 0,
    scrollTrigger: {
        trigger: '.video1 video',
        start: '-10% 80%',
        end: 'center 70%',
        scrub: 2
    }
})
gsap.from('.video1 .text *', {
    x: '-50vw',
    opacity: 0,
    stagger: 0.3,
    duration: 1,
    scrollTrigger: {
        trigger: '.video1 .text',
        start: '-10% 80%',
        end: 'center 70%',
        scrub: 2
    }
})
tl.from('.video2 video', {
    y: '50%',
    opacity: 0,
    duration: 1,
    delay: 0.4,
    scrollTrigger: {
        trigger: '.video2 .text',
        start: '-10% 80%',
        end: 'center 70%',
        scrub: 2
    }
})
tl.from('.video2 .text', {
    y: '100%',
    opacity: 0,
    duration: 1,
    delay: 0.4,
    scrollTrigger: {
        trigger: '.video2 .text',
        start: '-10% 80%',
        end: 'center 70%',
        scrub: 2
    }
})
tl.from('.features .connect', {
    y: '30%',
    opacity: 0,
    scrollTrigger: {
        trigger: '.features .connect',
        start: '-10% 80%',
        end: 'center 70%',
        scrub: 2
    }
})
gsap.from('.static-line', {
    scaleX: 0,
    y: 200,
    delay: 2.3,
    ease: 'rough'
})
gsap.from('.features .customers *', {
    x: 300,
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ' .features .customers *',
        start: '-10% 80%',
        end: 'center 100%',
        scrub: 2
    }
})
gsap.from('.footer .lists *', {
    x: 60,
    opacity: 0,
    duration: 3,
    stagger: 0.3,
    scrollTrigger: {
        trigger: '.footer .lists *',
        start: '-10% 80%',
        end: 'center 100%',
        scrub: 3
    }
})
// customers