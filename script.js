var crsr= document.querySelector(".cursor");
const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
var vdo = document.querySelector(".vdocont");
var playbtn= document.querySelector(".playbtn");
vdo.addEventListener("mouseenter",function(){
    gsap.to(".playbtn",{
        opacity : 1,
        scale: 1
    })
})
vdo.addEventListener("mouseleave",function(){
    gsap.to(".playbtn",{
        opacity : 0,
        scale: 0
    })
})
vdo.addEventListener("mousemove",function(dets){
    gsap.to(".playbtn",{
      left: dets.x-50,
      top: dets.y- 80
    })
})
gsap.from(".page1 h1",{
    y: 100,
    opacity: 0,
    stagger: 0.2,
    duration: 0.9
})
gsap.from(".vdocont",{
    scale: 0.7,
    opacity: 0,
    delay: 1,
    duration: 0.9
})
document.addEventListener("mousemove",function(dets){
    gsap.to(".cursor",{
        left: dets.x,
        top: dets.y
    })
})