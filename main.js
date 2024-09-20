// Sticky Header
window.addEventListener('scroll', function() {
    const mainHeader = document.querySelector('.main_h');
    if (window.scrollY > 100) {
        mainHeader.classList.add('sticky');
    } else {
        mainHeader.classList.remove('sticky');
    }
});

// Mobile Navigation
document.querySelector('.mobile-toggle').addEventListener('click', function() {
    const mainHeader = document.querySelector('.main_h');
    if (mainHeader.classList.contains('open-nav')) {
        mainHeader.classList.remove('open-nav');
    } else {
        mainHeader.classList.add('open-nav');
    }
});

document.querySelectorAll('.main_h li a').forEach(function(link) {
    link.addEventListener('click', function() {
        const mainHeader = document.querySelector('.main_h');
        if (mainHeader.classList.contains('open-nav')) {
            document.querySelector('.navigation').classList.remove('open-nav');
            mainHeader.classList.remove('open-nav');
        }
    });
});

// Navigation Scroll
document.querySelectorAll('.nav_link').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        const id = this.getAttribute("href");
        const offset = 70;
        const target = document.querySelector(id).offsetTop - offset;
        window.scrollTo({
            top: target,
            behavior: 'smooth' // Add smooth scrolling
        });
    });
});
document.querySelector('.mobile-toggle').addEventListener('click', function() {
    document.querySelector('.nav_menu').classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', () => {
    const skillBars = document.querySelectorAll('.skills__percentage');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          // Log to console for debugging
          console.log('Animating:', entry.target.className);
        }
      });
    }, { threshold: 0.5 });
  
    skillBars.forEach(bar => {
      observer.observe(bar);
      // Log to console for debugging
      console.log('Observing:', bar.className);
    });
  });