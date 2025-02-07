document.addEventListener("DOMContentLoaded", function() {
   const fadeElements = document.querySelectorAll(".fade-up, .fade-left, .fade-right");

   function fadeInOnScroll() {
       fadeElements.forEach(element => {
           const elementTop = element.getBoundingClientRect().top;
           const windowHeight = window.innerHeight;

           if (elementTop < windowHeight * 0.85) {
               element.style.opacity = "1";
               element.style.transform = "translateY(0)";
               element.style.transform = "translateX(0)";
           }
       });
   }

   window.addEventListener("scroll", fadeInOnScroll);
   fadeInOnScroll(); // 페이지 로드 시 확인
});
