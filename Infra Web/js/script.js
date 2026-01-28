// Smooth scroll and animations
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Fade in animation on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });

  // Parallax effect - removed transform to prevent overlap
  // window.addEventListener('scroll', function() {
  //   const scrolled = window.pageYOffset;
  //   const parallaxElements = document.querySelectorAll('.parallax');
  //   parallaxElements.forEach(el => {
  //     const rate = scrolled * -0.5;
  //     el.style.transform = `translateY(${rate}px)`;
  //   });
  // });
});