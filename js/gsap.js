const tl = gsap.timeline();

tl.from("nav .left p, nav .left img", {
    y: -30,
    opacity: 0,
})

tl.from("nav .right ul li", {
    y: -30,
    opacity: 0,
    stagger: 0.1,
})

gsap.from(".aboutPage .section-title h2", {
    opacity: 0,
    scale: 0.8,
    duration: 0.7,
    scrollTrigger: {
        trigger: ".aboutPage .section-title h2",
        scroller: "body",
        start: "top 90%",
        end: "top 30%",
    }
})

gsap.from(".aboutPage .animateBox", {
    opacity: 0.5,
    scale: 0.8,
    duration: 1,
    scrollTrigger: {
        trigger: ".aboutPage .animateBox",
        scroller: "body",
        start: "top 70%",
        end: "top 40%",
        scrub: 2,
        stagger: 5,
    }
})
gsap.from(".aboutPage .about-director .directorBox", {
    opacity: 0.5,
    scale: 0.8,
    duration: 1,
    scrollTrigger: {
        trigger: ".aboutPage .about-director .directorBox",
        scroller: "body",
        start: "top 70%",
        end: "top 40%",
        scrub: 2,
        stagger: 5,
    }
})

gsap.from(".why-choose h2", {
    opacity: 0,
    scale: 0.8,
    duration: 0.7,
    scrollTrigger: {
        trigger: ".why-choose h2",
        scroller: "body",
        start: "top 90%",
        end: "top 30%",
    }
})

gsap.from(".aboutPage .why-choose .icon-grid .box", {
    opacity: 0,
    scale: 0.8,
    scrollTrigger: {
        trigger: ".aboutPage .why-choose .icon-grid .box",
        scroller: "body",
        start: "top 75%",
        end: "top 40%",
        scrub: 1,
        stagger: 5,
    }
})