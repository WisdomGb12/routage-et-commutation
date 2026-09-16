// ============================================
// ROUTAGE ET COMMUTATION - Interactive Features
// ============================================

// Shared header include loader: fetch includes/header.html and inject into <header class="header">.
// The include uses data-href attributes so links are normalized depending on current page depth.
async function loadHeaderInclude() {
    try {
        const headerEl = document.querySelector('header.header');
        if (!headerEl || headerEl.children.length > 0) return; // Header already rendered in HTML
        const path = window.location.pathname;
        const isInPages = path.includes('/pages/');
        const prefix = isInPages ? '../' : '';
        const response = await fetch(prefix + 'includes/header.html');
        if (!response.ok) return;
        const html = await response.text();
        headerEl.innerHTML = html;
        // Normalize data-href -> href
        headerEl.querySelectorAll('[data-href]').forEach(el => {
            const target = el.getAttribute('data-href');
            // If we are inside pages/ folder, adjust paths:
            // - links to pages/* should become relative to pages (remove the pages/ prefix)
            // - links to root-level files (no pages/ prefix) should be prefixed with ../
            if (isInPages) {
                if (target.startsWith('pages/')) {
                    el.setAttribute('href', target.replace(/^pages\//, ''));
                } else {
                    el.setAttribute('href', '../' + target);
                }
            } else {
                el.setAttribute('href', target);
            }
        });
    } catch (err) {
        console.error('Failed to load header include:', err);
    }
}

document.addEventListener('DOMContentLoaded', async function () {
    // Load shared header include before initializing features so listeners attach correctly
    await loadHeaderInclude();
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

    // Add click handler to all theme toggle buttons (both floating FAB and legacy)
    document.querySelectorAll('.theme-toggle, .theme-toggle-floating').forEach(btn => {
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

    // Helper to update icon
    function updateMenuIcon(isOpen) {
        const icon = menuBtn.querySelector('i');
        if (!icon) return;

        if (isOpen) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    }

    // Toggle menu
    menuBtn.addEventListener('click', function () {
        const isOpen = nav.classList.contains('open');

        if (isOpen) {
            nav.classList.remove('open');
            menuBtn.classList.remove('active');
            document.body.style.overflow = '';
            document.body.classList.remove('nav-open');
            updateMenuIcon(false);
        } else {
            nav.classList.add('open');
            menuBtn.classList.add('active');
            document.body.style.overflow = 'hidden';
            document.body.classList.add('nav-open');
            updateMenuIcon(true);
        }
    });

    // Handle accordion toggle for submenus on mobile screens
    nav.querySelectorAll('.has-mega-menu > .nav-link, .has-dropdown > .nav-link').forEach(toggleLink => {
        toggleLink.addEventListener('click', function (e) {
            if (window.innerWidth <= 1024) {
                e.preventDefault();
                const parent = this.closest('.nav-item');
                if (parent) {
                    parent.classList.toggle('mobile-open');
                }
            }
        });
    });

    // Close menu when clicking on an actual destination link
    nav.querySelectorAll('.mega-menu-item, .dropdown-item, .nav-link:not(.has-mega-menu > .nav-link):not(.has-dropdown > .nav-link)').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('open');
            menuBtn.classList.remove('active');
            document.body.style.overflow = '';
            document.body.classList.remove('nav-open');
            updateMenuIcon(false);
        });
    });

    // Close menu when resizing beyond mobile breakpoint
    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024 && nav.classList.contains('open')) {
            nav.classList.remove('open');
            menuBtn.classList.remove('active');
            document.body.style.overflow = '';
            document.body.classList.remove('nav-open');
            updateMenuIcon(false);
        }
    });

    // Close menu when clicking outside (on the overlay)
    document.addEventListener('click', function (e) {
        if (nav.classList.contains('open') && !nav.contains(e.target) && !menuBtn.contains(e.target)) {
            nav.classList.remove('open');
            menuBtn.classList.remove('active');
            document.body.style.overflow = '';
            document.body.classList.remove('nav-open');
            updateMenuIcon(false);
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
                copyBtn.innerHTML = '? Copi?!';
                copyBtn.classList.add('copied');

                setTimeout(() => {
                    copyBtn.innerHTML = originalText;
                    copyBtn.classList.remove('copied');
                }, 2000);
            } catch (err) {
                console.error('Failed to copy:', err);
                copyBtn.textContent = 'Erreur';
                setTimeout(() => {
                    copyBtn.textContent = '?? Copier';
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
        const totalPhases = 10;
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
                btn.innerHTML = '? Lu';
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
