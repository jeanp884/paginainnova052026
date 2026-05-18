// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menuToggle');
  const navMobile = document.getElementById('navMobile');

  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      if (navMobile.style.display === 'none' || navMobile.style.display === '') {
        navMobile.style.display = 'flex';
      } else {
        navMobile.style.display = 'none';
      }
    });

    // Close mobile menu when a link is clicked
    const mobileLinks = navMobile.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', function() {
        navMobile.style.display = 'none';
      });
    });
  }

  // Expandable Sections
  const expandableHeaders = document.querySelectorAll('.expandable-header');
  expandableHeaders.forEach(header => {
    header.addEventListener('click', function() {
      this.classList.toggle('active');
    });
  });

  // Portfolio Filtering
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        const filter = this.getAttribute('data-filter');

        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        // Filter projects
        projectCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filter === 'todos' || category === filter) {
            card.style.display = 'block';
            setTimeout(() => {
              card.style.opacity = '1';
            }, 10);
          } else {
            card.style.opacity = '0';
            setTimeout(() => {
              card.style.display = 'none';
            }, 300);
          }
        });
      });
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Form validation for contact page
  const contactForm = document.querySelector('form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      const nombre = document.getElementById('nombre')?.value || '';
      const email = document.getElementById('email')?.value || '';
      const mensaje = document.getElementById('mensaje')?.value || '';

      if (!nombre.trim() || !email.trim() || !mensaje.trim()) {
        e.preventDefault();
        alert('Por favor completa todos los campos requeridos');
        return false;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        e.preventDefault();
        alert('Por favor ingresa un email válido');
        return false;
      }
    });
  }
});

// Utility function to add animation on scroll
function observeElements() {
  const options = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, options);

  document.querySelectorAll('.service-card, .sector-card, .case-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// Initialize animations when page loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', observeElements);
} else {
  observeElements();
}
