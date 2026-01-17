// ============================================
// ROUTAGE ET COMMUTATION - Interactive Features
// ============================================

document.addEventListener('DOMContentLoaded', function () {
    // Initialize all features
    initThemeToggle();
    initMobileMenu();
    initCodeCopy();
    initSmoothScroll();
    initProgressTracking();
    initAnimations();
});

// ============================================
// Theme Toggle (Dark/Light Mode)
// ============================================
function initThemeToggle() {
    const THEME_KEY = 'routage-theme';

    // Get saved theme or detect system preference
    function getSavedTheme() {
        return localStorage.getItem(THEME_KEY);
    }

    // Apply theme to document
    function applyTheme(theme) {
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else if (theme === 'light') {
            document.documentElement.setAttribute('data-theme', 'light');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
    }

    // Toggle theme
    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        let newTheme;
        if (currentTheme === 'dark') {
            newTheme = 'light';
        } else if (currentTheme === 'light') {
            newTheme = 'dark';
        } else {
            // No explicit theme set, toggle based on system
            newTheme = systemPrefersDark ? 'light' : 'dark';
        }

        applyTheme(newTheme);
        localStorage.setItem(THEME_KEY, newTheme);
    }

    // Initialize theme from storage
    const savedTheme = getSavedTheme();
    if (savedTheme) {
        applyTheme(savedTheme);
    }

    // Add click handler to all theme toggle buttons
    document.querySelectorAll('.theme-toggle').forEach(btn => {
        btn.addEventListener('click', toggleTheme);
    });

    // Expose globally for debugging
    window.themeToggle = { toggleTheme, applyTheme, getSavedTheme };
}

// ============================================
// Mobile Navigation
// ============================================
function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');

    if (!menuBtn || !nav) return;

    // Toggle menu
    menuBtn.addEventListener('click', function () {
        const isOpen = nav.classList.contains('open');
        nav.classList.toggle('open');
        menuBtn.classList.toggle('active');
        document.body.style.overflow = isOpen ? '' : 'hidden'; // Prevent scrolling when menu is open
        document.body.classList.toggle('nav-open');
    });

    // Close menu when clicking on a link
    nav.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('open');
            menuBtn.classList.remove('active');
            document.body.style.overflow = '';
            document.body.classList.remove('nav-open');
        });
    });

    // Close menu when resizing beyond mobile breakpoint
    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024 && nav.classList.contains('open')) {
            nav.classList.remove('open');
            menuBtn.classList.remove('active');
            document.body.style.overflow = '';
            document.body.classList.remove('nav-open');
        }
    });

    // Close menu when clicking outside (on the overlay mostly)
    document.addEventListener('click', function (e) {
        if (nav.classList.contains('open') && !nav.contains(e.target) && !menuBtn.contains(e.target)) {
            // Check if click is actually outside (on the header backdrop for example) or barely outside
            // With fullscreen nav, "outside" is only possible if nav padding allows, or header.
            // Since nav covers screen, this is less critical but good safety.
            nav.classList.remove('open');
            menuBtn.classList.remove('active');
            document.body.style.overflow = '';
            document.body.classList.remove('nav-open');
        }
    });
}

// ============================================
// Code Block Copy Functionality
// ============================================
function initCodeCopy() {
    document.querySelectorAll('.code-block').forEach(block => {
        const copyBtn = block.querySelector('.code-copy-btn');
        const code = block.querySelector('code');

        if (!copyBtn || !code) return;

        copyBtn.addEventListener('click', async function () {
            try {
                await navigator.clipboard.writeText(code.textContent);

                // Visual feedback
                const originalText = copyBtn.innerHTML;
                copyBtn.innerHTML = '✓ Copié!';
                copyBtn.classList.add('copied');

                setTimeout(() => {
                    copyBtn.innerHTML = originalText;
                    copyBtn.classList.remove('copied');
                }, 2000);
            } catch (err) {
                console.error('Failed to copy:', err);
                copyBtn.textContent = 'Erreur';
                setTimeout(() => {
                    copyBtn.textContent = '📋 Copier';
                }, 2000);
            }
        });
    });
}

// ============================================
// Smooth Scroll for Anchor Links
// ============================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ============================================
// Progress Tracking (Local Storage)
// ============================================
function initProgressTracking() {
    const STORAGE_KEY = 'routage-commutation-progress';
    const SECTIONS_KEY = 'routage-commutation-sections';

    // Get current progress
    function getProgress() {
        try {
            return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
        } catch {
            return {};
        }
    }

    // Get section progress
    function getSectionProgress() {
        try {
            return JSON.parse(localStorage.getItem(SECTIONS_KEY)) || [];
        } catch {
            return [];
        }
    }

    // Save progress
    function saveProgress(phaseId, completed) {
        const progress = getProgress();
        progress[phaseId] = completed;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
        updateProgressUI();
    }

    // Save section progress
    function toggleSection(sectionId) {
        let sections = getSectionProgress();
        if (sections.includes(sectionId)) {
            sections = sections.filter(id => id !== sectionId);
        } else {
            sections.push(sectionId);
        }
        localStorage.setItem(SECTIONS_KEY, JSON.stringify(sections));
        updateSectionUI();
    }

    // Update progress UI (Main phases)
    function updateProgressUI() {
        const progress = getProgress();
        const totalPhases = 6;
        // Count only keys that start with "phase" and are true
        const completedPhases = Object.keys(progress).filter(k => k.startsWith('phase') && progress[k]).length;
        const percentage = Math.round((completedPhases / totalPhases) * 100);

        // Update progress bar if it exists
        const progressBar = document.querySelector('.progress-fill');
        const progressText = document.querySelector('.progress-text');

        if (progressBar) {
            progressBar.style.width = percentage + '%';
        }

        if (progressText) {
            progressText.textContent = `${completedPhases}/${totalPhases} phases complétées (${percentage}%)`;
        }

        // Update phase checkmarks and buttons
        document.querySelectorAll('[data-phase]').forEach(el => {
            const phaseId = el.dataset.phase;
            // Only toggle if it's a completion button or card, not internal section buttons
            if (el.classList.contains('mark-complete-btn')) {
                if (progress[phaseId]) {
                    el.classList.add('completed');
                    el.textContent = '✓ Phase terminée';
                } else {
                    el.classList.remove('completed');
                    el.textContent = 'Marquer la phase comme terminée';
                }
            } else if (el.classList.contains('card')) {
                if (progress[phaseId]) {
                    el.classList.add('completed');
                } else {
                    el.classList.remove('completed');
                }
            }
        });
    }

    // Update Section UI
    function updateSectionUI() {
        const sections = getSectionProgress();
        const pagePath = window.location.pathname.split('/').pop().replace('.html', '');

        // Update section buttons
        document.querySelectorAll('.section-check-btn').forEach(btn => {
            const sectionId = btn.dataset.section;
            const fullId = `${pagePath}-${sectionId}`;

            if (sections.includes(fullId)) {
                btn.classList.add('completed');
                btn.setAttribute('aria-pressed', 'true');
                btn.innerHTML = '✓ Lu';
            } else {
                btn.classList.remove('completed');
                btn.setAttribute('aria-pressed', 'false');
                btn.innerHTML = 'Marquer comme lu';
            }
        });

        // Update TOC items
        document.querySelectorAll('.toc-list a').forEach(link => {
            const href = link.getAttribute('href');
            if (!href || !href.startsWith('#')) return;

            const sectionId = href.substring(1); // remove #
            const fullId = `${pagePath}-${sectionId}`;

            if (sections.includes(fullId)) {
                link.classList.add('read');
            } else {
                link.classList.remove('read');
            }
        });
    }

    // Initialize Section Buttons
    function initSectionButtons() {
        const pagePath = window.location.pathname.split('/').pop().replace('.html', '');

        document.querySelectorAll('section[id]').forEach(section => {
            // Check if already injected
            if (section.querySelector('.section-check-btn')) return;

            const sectionId = section.id;

            // Container for the button to ensure good spacing
            const btnContainer = document.createElement('div');
            btnContainer.className = 'section-action-container';
            btnContainer.style.marginTop = '2rem';
            btnContainer.style.textAlign = 'right';
            btnContainer.style.borderTop = '1px solid var(--border-color)';
            btnContainer.style.paddingTop = '1rem';

            const btn = document.createElement('button');
            btn.className = 'section-check-btn';
            btn.dataset.section = sectionId;
            btn.innerHTML = 'Marquer comme lu';
            btn.setAttribute('aria-label', 'Marquer cette section comme lue');

            // Style adjustment for bottom placement
            btn.style.width = 'auto';
            btn.style.display = 'inline-flex';
            btn.style.alignItems = 'center';
            btn.style.gap = '0.5rem';

            btn.addEventListener('click', (e) => {
                toggleSection(`${pagePath}-${sectionId}`);
            });

            btnContainer.appendChild(btn);
            section.appendChild(btnContainer);
        });
    }

    // Add completion buttons to phase pages
    document.querySelectorAll('.mark-complete-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const phaseId = this.dataset.phase;
            const currentProgress = getProgress();
            const newState = !currentProgress[phaseId];
            saveProgress(phaseId, newState);
        });
    });

    // Initialize UI
    updateProgressUI();
    initSectionButtons();
    updateSectionUI();

    // Expose globally for debugging
    window.courseProgress = { getProgress, saveProgress, updateProgressUI, toggleSection };
}

// ============================================
// Scroll Animations
// ============================================
function initAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe cards and sections
    document.querySelectorAll('.card, .section, .timeline-item').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
}

// ============================================
// Table of Contents Active State
// ============================================
function initTocActiveState() {
    const toc = document.querySelector('.toc');
    if (!toc) return;

    const headings = document.querySelectorAll('h2[id], h3[id]');
    const tocLinks = toc.querySelectorAll('a');

    function updateActiveLink() {
        let activeId = '';

        headings.forEach(heading => {
            const rect = heading.getBoundingClientRect();
            if (rect.top <= 100) {
                activeId = heading.id;
            }
        });

        tocLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === '#' + activeId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();
}

// ============================================
// Collapsible Sections
// ============================================
function initCollapsible() {
    document.querySelectorAll('.collapsible-header').forEach(header => {
        header.addEventListener('click', function () {
            const content = this.nextElementSibling;
            const isOpen = content.classList.contains('open');

            content.classList.toggle('open');
            this.classList.toggle('active');

            if (isOpen) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });
}
