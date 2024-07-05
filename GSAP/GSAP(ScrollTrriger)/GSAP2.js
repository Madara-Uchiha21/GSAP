gsap.from("#page1 #box",{
    scale:0.5,
    delay:2,
    duration:5,
    rotate:360,
    repeat: 1,
    borderRadius:"50%",
    yoyo:true
})

gsap.from("#page2 h1",{
    scale:0.5,
    delay:1,
    duration:5,
    rotate:360,
    repeat: 1,
    borderRadius:"50%",
    yoyo:true,
    scrollTrigger:"#page2 h1"
    /*scrollTrigger:{
        trigger:"#page2 #box",
        scroller:"body",
        markers:true
    }*/
})

/*
gsap.from("#page2 h1",{
    opacity:0,
    duration:2,
    x:500,
    scrollTrigger:"body",
    markers:true,
    start:50%
})*/
