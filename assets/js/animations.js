gsap.to('#logo', {
    duration: 2,
    // delay: 0.5,
    y: 0,
    ease: 'elastic',
    opacity: 1,
    scale: 1
})

gsap.to('.links-section .button', {
    duration: 2,
    // delay: 0.5,
    x: 0,
    ease: 'elastic',
    scale: 1,
    opacity: 1,
    stagger: 0.5
})

gsap.to('#caption', {
    opacity: 1,
    // delay: 0.5
    duration: 1,
    y: 0
})
gsap.to('#description', {
    opacity: 1,
    duration: 1,
    y: 0
})