// ============================================
// INITIALIZE AOS (Animate On Scroll)
// ============================================
AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
    easing: 'ease-in-out'
});

// ============================================
// DARK/LIGHT MODE TOGGLE
// ============================================
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    htmlElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
}

function updateThemeIcon(theme) {
    if (!themeToggle) return;
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// ============================================
// SMOOTH SCROLL FOR NAVIGATION LINKS
// ============================================
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Update active class
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        }
    });
});

// ============================================
// ACTIVE NAV LINK ON SCROLL
// ============================================
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
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
// DOWNLOAD CV BUTTON
// ============================================
const downloadBtn = document.getElementById('downloadCVBtn');
if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
        const link = document.createElement('a');
        link.href = 'Ahsan_Sarwar_DevOps_Intern_CV.pdf';
        link.download = 'Ahsan_Sarwar_DevOps_Intern_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        console.log('CV download started');
        
        // Optional: Show success toast
        showToast('📄 Downloading your CV...', 'success');
    });
}

// ============================================
// CONTACT BUTTON - SMOOTH SCROLL
// ============================================
const contactBtn = document.getElementById('contactBtn');
if (contactBtn) {
    contactBtn.addEventListener('click', () => {
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
            contactSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}

// ============================================
// DOCKER COMMANDS ALERT BUTTON
// ============================================
const showDockerBtn = document.getElementById('showDockerCommand');
if (showDockerBtn) {
    showDockerBtn.addEventListener('click', () => {
        const dockerCommands = `🐳 Docker Commands Used in This Project:\n\n` +
            `# 1. BUILD DOCKER IMAGE\n` +
            `docker build -t ahsan-resume-portfolio .\n\n` +
            `# 2. RUN CONTAINER WITH PORT MAPPING (8080:80)\n` +
            `docker run -d -p 8080:80 --name my-resume-website ahsan-resume-portfolio\n\n` +
            `# 3. VERIFY CONTAINER IS RUNNING\n` +
            `docker ps\n\n` +
            `# 4. CHECK CONTAINER LOGS\n` +
            `docker logs my-resume-website\n\n` +
            `# 5. STOP CONTAINER\n` +
            `docker stop my-resume-website\n\n` +
            `# 6. RESTART CONTAINER\n` +
            `docker start my-resume-website\n\n` +
            `# 7. REMOVE CONTAINER\n` +
            `docker rm my-resume-website\n\n` +
            `# 8. REMOVE IMAGE\n` +
            `docker rmi ahsan-resume-portfolio`;
        
        alert(dockerCommands);
    });
}

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
const navbar = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.padding = '0.5rem 0';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        navbar.style.padding = '1rem 0';
        navbar.style.boxShadow = 'none';
    }
});

// ============================================
// 1. CUSTOM CURSOR EFFECT
// ============================================
const cursor = document.createElement('div');
const cursorTrail = document.createElement('div');
cursor.className = 'custom-cursor';
cursorTrail.className = 'custom-cursor-trail';
document.body.appendChild(cursor);
document.body.appendChild(cursorTrail);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursorTrail.style.left = e.clientX + 'px';
    cursorTrail.style.top = e.clientY + 'px';
});

// Hover effect for interactive elements
const hoverElements = document.querySelectorAll('a, button, .skill-card, .project-card-large, .social-icon, .nav-link');
hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('custom-cursor-hover');
        cursorTrail.style.opacity = '0.5';
        cursorTrail.style.transform = 'translate(-50%, -50%) scale(1.5)';
    });
    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('custom-cursor-hover');
        cursorTrail.style.opacity = '1';
        cursorTrail.style.transform = 'translate(-50%, -50%) scale(1)';
    });
});

// Hide cursor when leaving window
document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
    cursorTrail.style.opacity = '0';
});
document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
    cursorTrail.style.opacity = '1';
});

// ============================================
// 2. SCROLL PROGRESS BAR
// ============================================
const progressBar = document.createElement('div');
progressBar.className = 'scroll-progress';
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    progressBar.style.width = scrolled + '%';
});

// ============================================
// 3. BACK TO TOP BUTTON
// ============================================
const backToTop = document.createElement('button');
backToTop.className = 'back-to-top';
backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ============================================
// 4. TYPING ANIMATION FOR HERO TITLE
// ============================================
const roles = ['Computer Science Graduate', 'Linux Admin', 'Docker Expert', 'Cloud Enthusiast', 'DevOps Engineer'];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const heroTitle = document.querySelector('.hero-title');

if (heroTitle && heroTitle.textContent !== roles[0]) {
    function typeEffect() {
        const currentRole = roles[roleIndex];
        if (isDeleting) {
            heroTitle.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            heroTitle.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }
        
        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(typeEffect, 2000);
            return;
        }
        
        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(typeEffect, 500);
            return;
        }
        
        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }
    
    heroTitle.classList.add('typed-text');
    setTimeout(typeEffect, 1000);
}

// ============================================
// 5. SKILL PROGRESS BARS ANIMATION
// ============================================
const progressBarsFill = document.querySelectorAll('.progress-fill');
const progressObserverOptions = { threshold: 0.5 };

const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target;
            const width = bar.getAttribute('data-width') || '85';
            bar.style.width = width + '%';
            progressObserver.unobserve(bar);
        }
    });
}, progressObserverOptions);

progressBarsFill.forEach(bar => progressObserver.observe(bar));

// ============================================
// ADD PROGRESS BARS TO SKILLS SECTION (if not exists)
// ============================================
const skillsContainer = document.querySelector('.skills-section .row.g-4');
if (skillsContainer && !document.querySelector('.skill-progress-container')) {
    const progressHTML = `
        <div class="col-12 mt-5" data-aos="fade-up">
            <div class="skill-progress-container" style="background: var(--card-bg); border-radius: 20px; padding: 1.5rem;">
                <h4 class="text-center mb-4" style="color: var(--gradient-start); font-weight: 600;">
                    <i class="fas fa-chart-line"></i> My Proficiency
                </h4>
                <div class="progress-skill-item">
                    <div class="progress-skill-name"><span><i class="fab fa-docker"></i> Docker</span><span>85%</span></div>
                    <div class="progress-bar-bg"><div class="progress-fill" data-width="85"></div></div>
                </div>
                <div class="progress-skill-item">
                    <div class="progress-skill-name"><span><i class="fab fa-aws"></i> AWS Cloud (EC2, S3)</span><span>75%</span></div>
                    <div class="progress-bar-bg"><div class="progress-fill" data-width="75"></div></div>
                </div>
                <div class="progress-skill-item">
                    <div class="progress-skill-name"><span><i class="fab fa-linux"></i> Linux Administration</span><span>80%</span></div>
                    <div class="progress-bar-bg"><div class="progress-fill" data-width="80"></div></div>
                </div>
                <div class="progress-skill-item">
                    <div class="progress-skill-name"><span><i class="fab fa-git-alt"></i> Git & GitHub</span><span>85%</span></div>
                    <div class="progress-bar-bg"><div class="progress-fill" data-width="85"></div></div>
                </div>
                <div class="progress-skill-item">
                    <div class="progress-skill-name"><span><i class="fas fa-network-wired"></i> Networking</span><span>70%</span></div>
                    <div class="progress-bar-bg"><div class="progress-fill" data-width="70"></div></div>
                </div>
                <div class="progress-skill-item">
                    <div class="progress-skill-name"><span><i class="fas fa-chart-line"></i> DevOps (CI/CD, K8s)</span><span>65%</span></div>
                    <div class="progress-bar-bg"><div class="progress-fill" data-width="65"></div></div>
                </div>
            </div>
        </div>
    `;
    skillsContainer.insertAdjacentHTML('beforeend', progressHTML);
    
    // Re-initialize progress bars for newly added elements
    const newProgressBars = document.querySelectorAll('.progress-fill');
    newProgressBars.forEach(bar => progressObserver.observe(bar));
}

// ============================================
// SMOOTH REVEAL ON SCROLL (for cards)
// ============================================
const revealElements = document.querySelectorAll('.skill-card, .project-card-large, .about-card, .education-card, .contact-card');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

revealElements.forEach(el => {
    if (!el.style.opacity) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        revealObserver.observe(el);
    }
});

// ============================================
// TOAST NOTIFICATION FUNCTION
// ============================================
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = 'custom-toast';
    toast.innerHTML = `
        <div style="background: var(--gradient-start); color: white; padding: 12px 24px; border-radius: 50px; 
                    position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%); z-index: 10000;
                    box-shadow: 0 5px 20px rgba(0,0,0,0.2); font-size: 0.9rem; animation: fadeInUp 0.3s ease;">
            ${message}
        </div>
    `;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// ============================================
// IMAGE LOADING VERIFICATION
// ============================================
window.addEventListener('load', () => {
    console.log('🚀 Portfolio fully loaded!');
    
    // Check if profile photo exists
    const profileImg = document.getElementById('profileImg');
    if (profileImg) {
        if (profileImg.complete && profileImg.naturalHeight !== 0) {
            console.log('✅ Profile photo loaded successfully');
        } else {
            console.warn('⚠️ Profile photo may not be loading. Check if my-photo.jpg exists');
        }
    }
    
    // Check if CV file exists
    fetch('Ahsan_Sarwar_DevOps_Intern_CV.pdf', { method: 'HEAD' })
        .then(response => {
            if (response.ok) {
                console.log('✅ CV file found');
            } else {
                console.warn('⚠️ CV file may not exist');
            }
        })
        .catch(() => console.warn('⚠️ Could not verify CV file'));
    
    // Remove loading spinner if exists
    const spinner = document.querySelector('.loading-spinner');
    if (spinner) {
        setTimeout(() => {
            spinner.style.opacity = '0';
            setTimeout(() => spinner.remove(), 500);
        }, 500);
    }
});

// ============================================
// ADD RIPPLE EFFECT ON BUTTONS
// ============================================
const buttons = document.querySelectorAll('.btn, .btn-github, .btn-docker');
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = (e.clientX - rect.left - size/2) + 'px';
        ripple.style.top = (e.clientY - rect.top - size/2) + 'px';
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.backgroundColor = 'rgba(255,255,255,0.4)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s linear';
        ripple.style.pointerEvents = 'none';
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ============================================
// PARALLAX EFFECT ON HERO SECTION
// ============================================
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const heroContent = document.querySelector('.hero-content');
    const profileWrapper = document.querySelector('.profile-image-wrapper');
    if (heroContent && profileWrapper && scrolled < 600) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        profileWrapper.style.transform = `translateY(${scrolled * 0.2}px)`;
    }
});

// ============================================
// CONSOLE LOGS FOR DEBUGGING
// ============================================
console.log('🐳 Portfolio ready | 2 DevOps Projects Showcased');
console.log('🌟 Dark mode available | Smooth scrolling enabled');
console.log('📸 Using your photo: my-photo.jpg');
console.log('📄 CV download: Ahsan_Sarwar_DevOps_Intern_CV.pdf');
console.log('🎨 Custom cursor | Scroll progress bar | Back to top button active');
console.log('⌨️ Typing animation | Skill progress bars | Ripple effects active');