// Main JavaScript for CivilCE Website

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeStateChecker();
    initializeCourseFilters();
    initializeAccordion();
    initializeForms();
    initializeSmoothScroll();
    loadFeaturedCourses();
    initializeCourseDetails();
});

// Navigation Menu Toggle (Mobile)
function initializeNavigation() {
    const navToggle = document.querySelector('.navbar-toggle');
    const navMenu = document.querySelector('.navbar-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger menu
            const spans = navToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
            } else {
                spans[0].style.transform = '';
                spans[1].style.opacity = '1';
                spans[2].style.transform = '';
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                const spans = navToggle.querySelectorAll('span');
                spans[0].style.transform = '';
                spans[1].style.opacity = '1';
                spans[2].style.transform = '';
            }
        });
    }
    
    // Set active nav item based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.navbar-menu a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// State PDH Requirements Checker
function initializeStateChecker() {
    const stateData = {
        'Alabama': { required: true, hours: 15, period: 'year', details: '15 PDH hours required annually' },
        'Alaska': { required: true, hours: 24, period: '2 years', details: '24 PDH hours required biennially' },
        'Arizona': { required: false, hours: 0, period: 'N/A', details: 'No continuing education requirement' },
        'Arkansas': { required: true, hours: 30, period: '2 years', details: '30 PDH hours required biennially' },
        'California': { required: false, hours: 0, period: 'N/A', details: 'No continuing education requirement' },
        'Colorado': { required: false, hours: 0, period: 'N/A', details: 'No continuing education requirement' },
        'Connecticut': { required: false, hours: 0, period: 'N/A', details: 'No continuing education requirement' },
        'Delaware': { required: true, hours: 24, period: '2 years', details: '24 PDH hours required biennially' },
        'Florida': { required: true, hours: 18, period: '2 years', details: '18 PDH hours required biennially' },
        'Georgia': { required: true, hours: 30, period: '2 years', details: '30 PDH hours required biennially' },
        'Hawaii': { required: false, hours: 0, period: 'N/A', details: 'No continuing education requirement' },
        'Idaho': { required: true, hours: 30, period: '2 years', details: '30 PDH hours required biennially' },
        'Illinois': { required: true, hours: 30, period: '2 years', details: '30 PDH hours required biennially' },
        'Indiana': { required: true, hours: 30, period: '2 years', details: '30 PDH hours required biennially' },
        'Iowa': { required: true, hours: 30, period: '2 years', details: '30 PDH hours required biennially' },
        'Kansas': { required: true, hours: 30, period: '2 years', details: '30 PDH hours required biennially' },
        'Kentucky': { required: true, hours: 30, period: '2 years', details: '30 PDH hours required biennially' },
        'Louisiana': { required: true, hours: 30, period: 'year', details: '30 PDH hours required annually' },
        'Maine': { required: true, hours: 30, period: '2 years', details: '30 PDH hours required biennially' },
        'Maryland': { required: true, hours: 16, period: '2 years', details: '16 PDH hours required biennially' },
        'Massachusetts': { required: false, hours: 0, period: 'N/A', details: 'No continuing education requirement' },
        'Michigan': { required: true, hours: 30, period: '2 years', details: '30 PDH hours required biennially' },
        'Minnesota': { required: true, hours: 24, period: '2 years', details: '24 PDH hours required biennially' },
        'Mississippi': { required: true, hours: 24, period: '2 years', details: '24 PDH hours required biennially' },
        'Missouri': { required: true, hours: 30, period: '2 years', details: '30 PDH hours required biennially' },
        'Montana': { required: false, hours: 0, period: 'N/A', details: 'No continuing education requirement' },
        'Nebraska': { required: true, hours: 30, period: '2 years', details: '30 PDH hours required biennially' },
        'Nevada': { required: true, hours: 30, period: '2 years', details: '30 PDH hours required biennially - CivilCE is fully approved for Nevada PE license renewal!' },
        'New Hampshire': { required: true, hours: 30, period: '2 years', details: '30 PDH hours required biennially' },
        'New Jersey': { required: true, hours: 24, period: '2 years', details: '24 PDH hours required biennially' },
        'New Mexico': { required: true, hours: 30, period: '2 years', details: '30 PDH hours required biennially' },
        'New York': { required: true, hours: 36, period: '3 years', details: '36 PDH hours required triennially' },
        'North Carolina': { required: true, hours: 15, period: 'year', details: '15 PDH hours required annually' },
        'North Dakota': { required: true, hours: 30, period: '2 years', details: '30 PDH hours required biennially' },
        'Ohio': { required: true, hours: 30, period: '2 years', details: '30 PDH hours required biennially' },
        'Oklahoma': { required: true, hours: 30, period: '2 years', details: '30 PDH hours required biennially' },
        'Oregon': { required: true, hours: 30, period: '2 years', details: '30 PDH hours required biennially' },
        'Pennsylvania': { required: true, hours: 24, period: '2 years', details: '24 PDH hours required biennially' },
        'Rhode Island': { required: false, hours: 0, period: 'N/A', details: 'No continuing education requirement' },
        'South Carolina': { required: true, hours: 30, period: '2 years', details: '30 PDH hours required biennially' },
        'South Dakota': { required: true, hours: 30, period: '2 years', details: '30 PDH hours required biennially' },
        'Tennessee': { required: true, hours: 24, period: '2 years', details: '24 PDH hours required biennially' },
        'Texas': { required: true, hours: 15, period: 'year', details: '15 PDH hours required annually' },
        'Utah': { required: true, hours: 24, period: '2 years', details: '24 PDH hours required biennially' },
        'Vermont': { required: true, hours: 30, period: '2 years', details: '30 PDH hours required biennially' },
        'Virginia': { required: true, hours: 16, period: 'year', details: '16 PDH hours required annually' },
        'Washington': { required: false, hours: 0, period: 'N/A', details: 'No continuing education requirement' },
        'West Virginia': { required: true, hours: 30, period: '2 years', details: '30 PDH hours required biennially' },
        'Wisconsin': { required: true, hours: 30, period: '2 years', details: '30 PDH hours required biennially' },
        'Wyoming': { required: true, hours: 30, period: '2 years', details: '30 PDH hours required biennially' }
    };
    
    const stateSelect = document.getElementById('state-select');
    const stateResult = document.getElementById('state-result');
    
    if (stateSelect && stateResult) {
        stateSelect.addEventListener('change', function() {
            const selectedState = this.value;
            
            if (selectedState && stateData[selectedState]) {
                const state = stateData[selectedState];
                
                if (state.required) {
                    stateResult.innerHTML = `
                        <div class="state-result" style="border-left-color: var(--accent-green);">
                            <h4 style="color: var(--accent-green);">✓ ${selectedState} - We Serve Your State!</h4>
                            <p><strong>${state.details}</strong></p>
                            <p>CivilCE courses are approved for ${selectedState} PE license renewal.</p>
                            <a href="courses.html" class="btn btn-primary mt-2">Browse Approved Courses</a>
                        </div>
                    `;
                } else {
                    stateResult.innerHTML = `
                        <div class="state-result" style="border-left-color: var(--gray-400);">
                            <h4>${selectedState} - No PDH Requirement</h4>
                            <p>${state.details}</p>
                            <p>While not required, continuing education helps maintain professional excellence.</p>
                            <a href="courses.html" class="btn btn-secondary mt-2">View Optional Courses</a>
                        </div>
                    `;
                }
            } else {
                stateResult.innerHTML = '';
            }
        });
    }
}

// Course Filtering and Sorting
function initializeCourseFilters() {
    const categoryFilter = document.getElementById('category-filter');
    const pdhFilter = document.getElementById('pdh-filter');
    const sortSelect = document.getElementById('sort-select');
    const courseGrid = document.getElementById('course-grid');
    
    if (categoryFilter) {
        // Create category buttons
        const categories = ['All', 'Structural Engineering', 'Transportation Engineering', 
                          'Water Resources', 'Geotechnical Engineering', 
                          'Environmental Engineering', 'Ethics and Professional Practice'];
        
        categories.forEach(category => {
            const btn = document.createElement('button');
            btn.className = 'btn btn-secondary';
            btn.textContent = category;
            btn.dataset.category = category;
            if (category === 'All') btn.classList.add('active');
            
            btn.addEventListener('click', function() {
                document.querySelectorAll('#category-filter button').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                filterCourses();
            });
            
            categoryFilter.appendChild(btn);
        });
    }
    
    if (pdhFilter) {
        pdhFilter.addEventListener('change', filterCourses);
    }
    
    if (sortSelect) {
        sortSelect.addEventListener('change', filterCourses);
    }
}

// Filter courses based on selected criteria
function filterCourses() {
    const activeCategory = document.querySelector('#category-filter button.active')?.dataset.category || 'All';
    const pdhRange = document.getElementById('pdh-filter')?.value || 'all';
    const sortBy = document.getElementById('sort-select')?.value || 'featured';
    
    // This would normally fetch and filter from the courses.json file
    // For now, we'll just log the filters
    console.log('Filtering courses:', { category: activeCategory, pdh: pdhRange, sort: sortBy });
}

// Accordion Functionality (FAQ)
function initializeAccordion() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const icon = this.querySelector('.accordion-icon');
            
            // Toggle active class
            this.classList.toggle('active');
            content.classList.toggle('active');
            
            // Close other accordion items
            accordionHeaders.forEach(otherHeader => {
                if (otherHeader !== this) {
                    otherHeader.classList.remove('active');
                    otherHeader.nextElementSibling.classList.remove('active');
                }
            });
        });
    });
}

// Form Validation and Submission
function initializeForms() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Basic validation
            let isValid = true;
            const errors = [];
            
            if (!data.name || data.name.trim().length < 2) {
                errors.push('Please enter a valid name');
                isValid = false;
            }
            
            if (!data.email || !isValidEmail(data.email)) {
                errors.push('Please enter a valid email address');
                isValid = false;
            }
            
            if (!data.message || data.message.trim().length < 10) {
                errors.push('Please enter a message (at least 10 characters)');
                isValid = false;
            }
            
            if (isValid) {
                // Show success message
                showFormMessage('success', 'Thank you for your inquiry! We will respond within 24 hours.');
                this.reset();
            } else {
                // Show error messages
                showFormMessage('error', errors.join('<br>'));
            }
        });
    }
    
    // Newsletter form
    const newsletterForm = document.getElementById('newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            
            if (isValidEmail(email)) {
                showFormMessage('success', 'Thank you for subscribing to our newsletter!');
                this.reset();
            } else {
                showFormMessage('error', 'Please enter a valid email address');
            }
        });
    }
}

// Email validation helper
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Show form message
function showFormMessage(type, message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message ${type}`;
    messageDiv.innerHTML = message;
    messageDiv.style.cssText = `
        padding: 1rem;
        margin: 1rem 0;
        border-radius: 0.5rem;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        animation: slideIn 0.3s ease;
    `;
    
    // Insert message after form
    const form = document.querySelector('form');
    if (form) {
        form.parentNode.insertBefore(messageDiv, form.nextSibling);
        
        // Remove message after 5 seconds
        setTimeout(() => {
            messageDiv.remove();
        }, 5000);
    }
}

// Smooth Scrolling
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80; // Account for fixed navbar
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Load Featured Courses
async function loadFeaturedCourses() {
    const featuredContainer = document.getElementById('featured-courses');
    
    if (featuredContainer) {
        try {
            const response = await fetch('assets/courses.json');
            const data = await response.json();
            
            const featuredCourses = data.courses.filter(course => course.featured).slice(0, 6);
            
            featuredContainer.innerHTML = featuredCourses.map(course => `
                <div class="card course-card">
                    <span class="course-category">${course.category}</span>
                    <div class="card-body">
                        <h3>${course.title}</h3>
                        <span class="course-pdh">${course.pdh} PDH</span>
                        <p>${course.description.substring(0, 100)}...</p>
                        <div class="course-price">$${course.price}</div>
                    </div>
                    <div class="card-footer">
                        <a href="course-detail.html?id=${course.id}" class="btn btn-primary btn-block">View Details</a>
                    </div>
                </div>
            `).join('');
        } catch (error) {
            console.error('Error loading courses:', error);
            featuredContainer.innerHTML = '<p>Error loading courses. Please try again later.</p>';
        }
    }
}

// Initialize Course Details Page
function initializeCourseDetails() {
    if (window.location.pathname.includes('course-detail.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const courseId = urlParams.get('id');
        
        if (courseId) {
            loadCourseDetails(courseId);
        }
    }
}

// Load individual course details
async function loadCourseDetails(courseId) {
    try {
        const response = await fetch('assets/courses.json');
        const data = await response.json();
        
        const course = data.courses.find(c => c.id === courseId);
        
        if (course) {
            document.getElementById('course-title').textContent = course.title;
            document.getElementById('course-category').textContent = course.category;
            document.getElementById('course-pdh').textContent = `${course.pdh} PDH Hours`;
            document.getElementById('course-price').textContent = `$${course.price}`;
            document.getElementById('course-description').textContent = course.description;
            document.getElementById('course-duration').textContent = course.duration;
            document.getElementById('course-level').textContent = course.level;
            
            // Load objectives
            const objectivesList = document.getElementById('course-objectives');
            if (objectivesList) {
                objectivesList.innerHTML = course.objectives.map(obj => `<li>${obj}</li>`).join('');
            }
            
            // Load related courses
            loadRelatedCourses(course.category, course.id);
        } else {
            document.querySelector('.course-detail').innerHTML = '<p>Course not found.</p>';
        }
    } catch (error) {
        console.error('Error loading course details:', error);
    }
}

// Load related courses
async function loadRelatedCourses(category, excludeId) {
    const relatedContainer = document.getElementById('related-courses');
    
    if (relatedContainer) {
        try {
            const response = await fetch('assets/courses.json');
            const data = await response.json();
            
            const relatedCourses = data.courses
                .filter(course => course.category === category && course.id !== excludeId)
                .slice(0, 3);
            
            relatedContainer.innerHTML = relatedCourses.map(course => `
                <div class="card course-card">
                    <div class="card-body">
                        <h4>${course.title}</h4>
                        <span class="course-pdh">${course.pdh} PDH</span>
                        <div class="course-price">$${course.price}</div>
                        <a href="course-detail.html?id=${course.id}" class="btn btn-secondary mt-2">View Details</a>
                    </div>
                </div>
            `).join('');
        } catch (error) {
            console.error('Error loading related courses:', error);
        }
    }
}

// Utility function to format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}

// Lazy loading for images
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize on page load
window.addEventListener('load', function() {
    initializeLazyLoading();
});