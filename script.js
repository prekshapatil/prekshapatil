

document.addEventListener('DOMContentLoaded', () => {
    // Force scroll to top to prevent unintended scrolling
    window.scrollTo(0, 0);

    // Typewriter Effect
    const typewriterElement = document.getElementById('typewriter');
    const titles = [
        { title: 'Software Engineer', description: 'Building scalable and efficient software solutions.' }
    ];
    let current = 0;
    let isDeleting = false;
    let text = '';
    let charIndex = 0;
    const typingSpeed = 100; // Milliseconds per character
    const deletingSpeed = 50; // Milliseconds per character
    const pauseTime = 2000; // Milliseconds before deleting
    const maxCycles = 1; // Number of times to loop through all titles
    let cyclesCompleted = 0;

    function type() {
        if (cyclesCompleted >= maxCycles) {
            // Optionally, you can set the final title here
            typewriterElement.textContent = titles[titles.length - 1].title;
            return; // Stop the typing effect after desired cycles
        }

        const currentTitle = titles[current].title;
        if (!isDeleting) {
            text = currentTitle.substring(0, charIndex + 1);
            typewriterElement.textContent = text;
            charIndex++;
            if (charIndex === currentTitle.length) {
                isDeleting = true;
                setTimeout(type, pauseTime);
            } else {
                setTimeout(type, typingSpeed);
            }
        } else {
            text = currentTitle.substring(0, charIndex - 1);
            typewriterElement.textContent = text;
            charIndex--;
            if (charIndex === 0) {
                isDeleting = false;
                current++;
                if (current >= titles.length) {
                    current = 0;
                    cyclesCompleted++;
                }
                setTimeout(type, 500);
            } else {
                setTimeout(type, deletingSpeed);
            }
        }
    }

    type();

    // Scroll-Triggered Animations using Intersection Observer
    const sections = document.querySelectorAll('section, .image-collage, .intro, .social-links');

    const options = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing after it becomes visible
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Lazy Loading Images (Modern Browsers Support)
    // Since the images are small and critical, we're loading them normally.
    // For non-critical images, add loading="lazy" attribute.
});

document.addEventListener("DOMContentLoaded", () => {
    if (window.location.hash) {
        const currentHash = window.location.hash; // Store the current hash
        window.history.replaceState(null, null, window.location.pathname); // Remove the hash from the URL

        // Optional: Scroll to the section
        if (currentHash) {
            const targetElement = document.querySelector(currentHash);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const resumeLink = document.getElementById('resume-link');
    const resumeOverlay = document.getElementById('resume-overlay');
    const closeResume = document.getElementById('close-resume');

    // Open the overlay when the link is clicked
    resumeLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        resumeOverlay.style.display = 'block';
    });

    // Close the overlay when the close button is clicked
    closeResume.addEventListener('click', () => {
        resumeOverlay.style.display = 'none';
    });

    // Close the overlay when clicking outside the content area
    window.addEventListener('click', (event) => {
        if (event.target === resumeOverlay) {
            resumeOverlay.style.display = 'none';
        }
    });
});

