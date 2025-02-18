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

  const slides = document.querySelectorAll('.carousel-slide');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const dotsContainer = document.querySelector('.carousel-dots');
  let currentSlide = 0;

  function showSlide(n) {
      slides[currentSlide].classList.remove('active');
      dots[currentSlide].classList.remove('active');
      currentSlide = (n + slides.length) % slides.length;
      slides[currentSlide].classList.add('active');
      dots[currentSlide].classList.add('active');
  }

  prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
  nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));

  // Create dots
  slides.forEach((_, index) => {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      if (index === 0) dot.classList.add('active');
      dot.addEventListener('click', () => showSlide(index));
      dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll('.dot');

  const skillBars = document.querySelectorAll('.skill-progress');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.parentNode.nextElementSibling.textContent;
    }
  });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
  observer.observe(bar);
});

const roles = ['Web Designer', 'Software Developer', 'Data Analyst', 'Full-Stack Developer'];
let index = 0;

function typeText() {
    const secText = document.querySelector('.sec-text');
    secText.style.width = '0';  // Reset width for typing effect
    secText.textContent = roles[index];
    secText.style.animation = 'none';  // Reset animation
    setTimeout(() => {
        secText.style.animation = 'typing 2s steps(20) forwards, blink 0.7s step-end infinite alternate';
    }, 100);  // Small delay to reset the animation
    index = (index + 1) % roles.length;
}

setInterval(typeText, 3000);  // Change text every 3 seconds
typeText();  // Initialize typing on page load

function validateForm() {
    var form = document.querySelector('.contact__form');
    var formData = new FormData(form);

    fetch('send_email.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        if (data === 'success') {
            document.getElementById('successMessage').style.display = 'block';
            form.reset();
        } else {
            alert('There was an error sending your message. Please try again.');
        }
    })
    .catch(error => {
        alert('There was an error sending your message. Please try again.');
    });

    return false; // Prevent form submission
}
