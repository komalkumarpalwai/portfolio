const lenis = new Lenis()

lenis.on('scroll', (e) => {
  
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
window.onload = function () {
  window.scrollTo(0, 0);
};
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
requestAnimationFrame(raf)
//loading animation
gsap.from(".h1", {
    duration: 2, 
    ease: Power1.easeIn,
    opacity: 1, 
    y: 100, 
    onComplete: function() {

        document.querySelector(".page1").style.display = "none";
        var existingElement = document.querySelector(".page2");

        if (existingElement) {
            existingElement.classList.add("nav");
            var existingElement2 = document.querySelector(".box2");
        }
        if (existingElement2) {
            existingElement2.classList.add("box");
           
        }
       document.querySelector(".text2").style.opacity="1"
       document.querySelector(".abitme").style.opacity="1"
       document.querySelector(".text2").style.display="inline"
       document.querySelector(".nextpage").style.display="flex"
       document.querySelector(".skills").style.display="grid"
       document.querySelector(".heading").style.display="grid"
       document.querySelector(".services").style.display="grid"
       document.querySelector(".projects").style.display="grid"
       document.querySelector(".pheading").style.display="inline"
       document.querySelector(".project").style.display="inline"
       document.querySelector(".getintouch").style.display="flex"
       document.querySelector(".register").style.display="flex"
       document.querySelector(".tankingyou").style.display="inline"
       document.querySelector(".enddetails").style.display="inline"
       document.querySelector(".downloadcv").style.display="flex"
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const spans = document.querySelectorAll('.mySpan');

    const tl = gsap.timeline({ repeat: -1 });

    tl.staggerTo(spans, 1, { opacity: 1 }, 1);
    tl.to(spans, { y: 20, duration:1, ease: "power2.inOut" });
    tl.to(spans, { scale: 1, color: "#ff4500", duration: 0.5, stagger: 0.2 });
    tl.play();
});
function changeTextColorOnScroll() {
  
    const scrollPosition = window.scrollY;
    if (scrollPosition > 10) {
      gsap.to(".abitme p", {
        color: "red", 
        duration: 1,
      });
    } else {
      gsap.to(".abitme p", {
        color: "black",
        duration: 1,
      });
    }
  }

  window.addEventListener("scroll", changeTextColorOnScroll);
  function buttonrevel()
  {
    const mPosition=window.scrollY;
    if(mPosition > 5)
    {
        gsap.to("button",{
            opacity:1,
            duration: 2,
        });}
        else {
            gsap.to("button", {
              opacity:0,
              duration: 2,
            });
          }
    }
    window.addEventListener("scroll", buttonrevel);
    document.addEventListener("DOMContentLoaded", function () {
      let bar = document.querySelector(".bar");
  
      // Check if the bar is active (you can replace this condition as needed)
      let isActive = /* Your condition here */ true;
  
      if (isActive) {
          bar.classList.add("active");
      }
  });
  // bars animation
  function barrevel()
  {
    const bPosition=window.scrollY;
    if(bPosition >= 10)
    {
        gsap.to(".bar",{
          ease: Power1.easeIn,
          opacity: 1, 
          y: 10, 
          duration:0.5
        });}
        else {
            gsap.to(".bar", {
              opacity:0,
              duration: 0.1,
              ease: Power1.out,
              y:-10
            });
          }
    }
    window.addEventListener("scroll", barrevel);
   
    function submitForm() {
      
      document.getElementById("contactForm").submit();
  }
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  window.onscroll = () => document.getElementById("scrollToTop").style.display = (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) ? "block" : "none";