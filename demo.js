document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Testimonials carousel
    const testimonials = document.querySelectorAll('.testimonial');
    let currentTestimonialIndex = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.display = (i === index) ? 'block' : 'none';
        });
    }

    function nextTestimonial() {
        currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
        showTestimonial(currentTestimonialIndex);
    }

    function prevTestimonial() {
        currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentTestimonialIndex);
    }

    document.getElementById('prevBtn').addEventListener('click', prevTestimonial);
    document.getElementById('nextBtn').addEventListener('click', nextTestimonial);
    showTestimonial(currentTestimonialIndex);

    // Search form submission
    document.getElementById('search-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const searchInput = document.getElementById('search-input').value;
        const filterDropdown = document.getElementById('filter-dropdown').value;
        console.log('Search input:', searchInput);
        console.log('Filter:', filterDropdown);
        // Perform search/filter logic here
    });

    // Newsletter form submission
    document.getElementById('newsletter-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('email-input').value;
        console.log('Email:', email);
        // Perform newsletter subscription logic here
        alert('Thank you for subscribing to our newsletter!');
        this.reset(); // Reset the form
    });

    // FAQ accordion
    document.querySelectorAll('.faq-item h3').forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            answer.classList.toggle('show');
        });
    });

    // Contact form submission
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields');
            return;
        }

        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
        // Perform form submission logic here
        alert('Your message has been sent! We will get back to you soon.');
        this.reset(); // Reset the form
    });
});
