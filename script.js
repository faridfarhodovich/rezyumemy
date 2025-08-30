// Particles animation
function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    document.body.appendChild(particle);
    
    const size = Math.random() * 8 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.background = `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.2})`;
    particle.style.left = `${Math.random() * window.innerWidth}px`;
    particle.style.top = `${window.innerHeight}px`;
    
    const animation = particle.animate([
        { transform: `translateY(0) scale(1)`, opacity: 1 },
        { transform: `translateY(-${window.innerHeight + 100}px) scale(0.5)`, opacity: 0 }
    ], {
        duration: Math.random() * 4000 + 2000,
        easing: 'ease-in',
        delay: Math.random() * 1000
    });
    
    animation.onfinish = () => particle.remove();
}

// Create multiple particles
setInterval(createParticle, 200);

// Scroll animation for sections
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.info, .skills');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
});