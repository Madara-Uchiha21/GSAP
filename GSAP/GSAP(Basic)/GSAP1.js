
gsap.to("#box",{        //to and from is used as it is used in card invitation
    x:1000,     //Axis
    duration:5,     //for how long
    delay: 1,       //Delay the process
    rotate:360,     
    backgroundColor:"blue", //Changing the color
    borderRadius:"50%",     //Mend Border
    scale:0.5,       //Reduce size
    revolve: 30,
    repeat: 1,
    yoyo:true       //bounce back
})

gsap.from("#tox",{
    y:500,
    duration:5,
    delay:1,
    rotate:270
})

gsap.to("h1",{
    opacity:0,      //It will vanish the obj
    color:"red",
    duration:5,
    delay:2,
    x:30
    // stagger: 1 it is used to call any group representation one by one
})

gsap.from("h2",{
    color:"orange",
    duratio:5,
    delay:2
})

gsap.to("#soc",{

    x:500,
    duration:5,
    delay:7
})


/*This is how we use gsap TimeLine , It made things easier and
synchronus pattern.

var tl = gsap.timeline()
tl.to("#soc",{
    x:1500,
    rotate:360,
    duration:1.5,
    delay:1
})

tl.to("#box",{
    y:1500,
    duration:1.5
})

tl.to("#tox",{
    x:1500,
    duration:1.5
})
*/