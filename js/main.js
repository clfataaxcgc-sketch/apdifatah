// Contact form handling
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
      };
      
      // Log form data (in a real application, you would send this to a server)
      console.log('Form submitted:', formData);
      
      // Show success message
      alert('Thank you for your message! I will get back to you soon.');
      
      // Reset form
      contactForm.reset();
    });
  }
  
  // Animate skill progress bars on scroll
  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progressBars = entry.target.querySelectorAll('.skill-progress');
        progressBars.forEach(bar => {
          const width = bar.style.width;
          bar.style.width = '0%';
          setTimeout(() => {
            bar.style.width = width;
          }, 100);
        });
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  const skillCategories = document.querySelectorAll('.skill-category');
  skillCategories.forEach(category => {
    observer.observe(category);
  });
  
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
});
