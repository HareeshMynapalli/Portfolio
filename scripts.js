
// Smooth scrolling for navbar links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



// Mobile Toggle Menu
const toggleBtn = document.createElement('button');
toggleBtn.className = 'mobile-toggle';
toggleBtn.innerHTML = '☰';
document.querySelector('nav').prepend(toggleBtn);

toggleBtn.addEventListener('click', () => {
  document.querySelector('nav ul').classList.toggle('active');
});

// Section Toggle for Mobile
document.querySelectorAll('section').forEach(section => {
  const heading = section.querySelector('h1, h2');
  if (heading) {
    heading.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        const content = section.querySelector('.section-content');
        content.classList.toggle('active');
      }
    });
  }
});




// Fixed Header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Page Animations
  const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Add animation classes to elements
  document.querySelectorAll('section').forEach((section, index) => {
    if (index % 2 === 0) {
      section.classList.add('slide-in-left');
    } else {
      section.classList.add('slide-in-right');
    }
    observer.observe(section);
  });

  document.querySelectorAll('.skill, .project-card, .certificate-card').forEach(element => {
    element.classList.add('fade-in');
    observer.observe(element);
  });

  // Contact Form Animation
  document.querySelectorAll('.contact-item').forEach((item, index) => {
    item.style.animation = `fadeInUp 0.6s ease forwards ${index * 0.2}s`;
  });

  // Social Icons Animation
  document.querySelectorAll('.social-link').forEach((link, index) => {
    link.style.animation = `iconPop 2s infinite ${index * 0.2}s`;
  });