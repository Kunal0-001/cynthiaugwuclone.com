const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function firstpageanim(){
    var tl  = gsap.timeline();

    tl.from("#nav",{
        y: `-10`,
        opacity: 0,
        duration : 1.5,
        ease: Expo.easeInOut

    })
    .to(".boundinglem",{
        y: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut,
        stagger :0.2,

    })
    .from("#homefooter",{
        y: -10,
        opacity: 0 ,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut,
    });
    

}
const circle = document.querySelector("#minicircle");

let prevX = 0;
let prevY = 0;

window.addEventListener("mousemove", (e) => {
  let dx = e.clientX - prevX;
  let dy = e.clientY - prevY;

  prevX = e.clientX;
  prevY = e.clientY;

  let scaleX = Math.min(Math.max(1, Math.abs(dx) * 0.05), 2);
  let scaleY = Math.min(Math.max(1, Math.abs(dy) * 0.05), 2);

  gsap.to(circle, {
    x: e.clientX,
    y: e.clientY,
    scaleX,
    scaleY,
    duration: 0.2,
    ease: "power2.out"
  });
});

firstpageanim();

document.querySelectorAll(".elem").forEach(function (elem) {
  var rotate = 0;
  var diffrot = 0;

  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });

  elem.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot *2),
    });
  });
});