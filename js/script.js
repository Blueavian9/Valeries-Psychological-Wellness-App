/**
 * Therapy Platform Comparison Website
 * Interactive JavaScript Features
 */

// ============================================
// Mobile Menu Toggle
// ============================================
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
    
    // Animate hamburger icon
    const spans = menuToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    }
  });
  
  // Close menu when clicking a link
  const navLinks = navMenu.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      menuToggle.classList.remove('active');
      const spans = menuToggle.querySelectorAll('span');
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    });
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
      navMenu.classList.remove('active');
      menuToggle.classList.remove('active');
      const spans = menuToggle.querySelectorAll('span');
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    }
  });
}

// ============================================
// Smooth Scroll
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      const headerHeight = document.querySelector('.header').offsetHeight;
      const targetPosition = targetElement.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ============================================
// FAQ Accordion
// ============================================
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  
  if (question) {
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });
      
      // Toggle current item
      item.classList.toggle('active', !isActive);
    });
  }
});

// ============================================
// Back to Top Button
// ============================================
const backToTopButton = document.getElementById('backToTop');

if (backToTopButton) {
  // Show/hide button based on scroll position
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
      backToTopButton.classList.add('visible');
    } else {
      backToTopButton.classList.remove('visible');
    }
  });
  
  // Scroll to top when clicked
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// ============================================
// Scroll Animations (Fade In)
// ============================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe platform cards
const platformCards = document.querySelectorAll('.platform-card');
platformCards.forEach((card, index) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
  observer.observe(card);
});

// Observe stat cards
const statCards = document.querySelectorAll('.stat-card');
statCards.forEach((card, index) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
  observer.observe(card);
});

// ============================================
// Active Navigation Highlighting
// ============================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    const headerHeight = document.querySelector('.header').offsetHeight;
    
    if (window.pageYOffset >= sectionTop - headerHeight - 100) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// ============================================
// Comparison Table Mobile Optimization
// ============================================
const comparisonWrapper = document.querySelector('.comparison-table-wrapper');

if (comparisonWrapper && window.innerWidth <= 768) {
  // Add horizontal scroll indicator on mobile
  let isScrolling = false;
  
  comparisonWrapper.addEventListener('scroll', () => {
    if (!isScrolling) {
      isScrolling = true;
      comparisonWrapper.style.boxShadow = 'inset -10px 0 10px -10px rgba(0,0,0,0.1)';
      
      setTimeout(() => {
        isScrolling = false;
      }, 150);
    }
  });
}

// ============================================
// Platform Card Hover Effects Enhancement
// ============================================
platformCards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.borderColor = 'var(--primary-indigo)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.borderColor = 'var(--gray-200)';
  });
});

// ============================================
// Console Welcome Message
// ============================================
console.log('%cTherapy Platform Compare', 'color: #6366F1; font-size: 20px; font-weight: bold;');
console.log('%cHelping you find the perfect online therapy platform', 'color: #10B981; font-size: 14px;');
