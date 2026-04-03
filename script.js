/* ========================================
   JavaScript - Canvas & Thread Portfolio
   ======================================== */

// ==========================================
// Product Data
// ==========================================
const products = [
    {
        title: 'شنطة توت كلاسيك',
        description: 'شنطة توت واسعة من القطن المصري الدك بتصميم كلاسيكي أنيق. مثالية للاستخدام اليومي والتسوق. تتميز بأيادي من الجلد الطبيعي وخياطة يدوية متقنة.',
        price: '٣٥٠ جنيه',
        image: 'images/tote-bag.png',
        material: 'قطن مصري دك 100%',
        accessories: 'أيادي جلد طبيعي',
        whatsapp: 'أريد طلب شنطة توت كلاسيك'
    },
    {
        title: 'شنطة لاب توب ١٥ بوصة',
        description: 'حافظة لاب توب مبطنة من القطن المصري الدك. مصممة لحماية جهازك بأناقة مع حزام جلدي للإغلاق. تناسب أجهزة اللاب توب حتى ١٥ بوصة.',
        price: '٤٥٠ جنيه',
        image: 'images/laptop-bag.png',
        material: 'قطن مصري دك مبطن',
        accessories: 'حزام جلدي + بطانة حماية',
        whatsapp: 'أريد طلب شنطة لاب توب'
    },
    {
        title: 'شنطة كروس بودي',
        description: 'شنطة كروس بودي عملية للاستخدام اليومي من القطن المصري. خفيفة الوزن مع حزام قابل للتعديل وتفاصيل من الجلد البني.',
        price: '٣٠٠ جنيه',
        image: 'images/crossbody-bag.png',
        material: 'قطن مصري دك 100%',
        accessories: 'حزام قابل للتعديل + إكسسوارات جلدية',
        whatsapp: 'أريد طلب شنطة كروس بودي'
    },
    {
        title: 'شنطة ظهر',
        description: 'شنطة ظهر واسعة من القطن المصري الدك بتصميم كلاسيكي فينتاج. مناسبة للرحلات والاستخدام اليومي مع نظام إغلاق جلدي.',
        price: '٤٠٠ جنيه',
        image: 'images/backpack.png',
        material: 'قطن مصري دك 100%',
        accessories: 'إغلاق جلدي + أحزمة قابلة للتعديل',
        whatsapp: 'أريد طلب شنطة ظهر'
    },
    {
        title: 'شنطة ماسنجر',
        description: 'شنطة ماسنجر مهنية من القطن المصري مع إكسسوارات نحاسية فاخرة. مناسبة للعمل واللاب توب مع حزام كتف عريض مريح.',
        price: '٥٠٠ جنيه',
        image: 'images/messenger-bag.png',
        material: 'قطن مصري دك 100%',
        accessories: 'إكسسوارات نحاسية + جلد طبيعي',
        whatsapp: 'أريد طلب شنطة ماسنجر'
    },
    {
        title: 'حافظة كلتش',
        description: 'حافظة صغيرة أنيقة من القطن المصري بخياطة يدوية دقيقة. مثالية لحمل الأساسيات مع سوستة معدنية عالية الجودة.',
        price: '١٥٠ جنيه',
        image: 'images/pouch-clutch.png',
        material: 'قطن مصري دك 100%',
        accessories: 'سوستة معدنية + خياطة يدوية',
        whatsapp: 'أريد طلب حافظة كلتش'
    },
    {
        title: 'شنطة لاب توب مطرزة - زهور',
        description: 'شنطة لاب توب مصنوعة من قماش الدك الفاخر، تتميز بتطريز يدوي دقيق لأشكال زهور ملونة تضفي لمسة فنية فريدة. مبطنة بالكامل لحماية الجهاز.',
        price: '٥٥٠ جنيه',
        image: 'images/laptop-bag.png',
        material: 'قطن مصري دك + تطريز يدوي',
        accessories: 'بطانة حماية + تطريز ملون',
        whatsapp: 'أريد طلب شنطة لاب توب مطرزة زهور'
    },
    {
        title: 'شنطة لاب توب مطرزة - تراث',
        description: 'تصميم يجمع بين الحداثة والتراث، مع تطريز يدوي يحاكي النقوش المصرية التقليدية بخيوط حريرية متينة. قطعة فنية راقية لكل محبي التميز.',
        price: '٦٠٠ جنيه',
        image: 'images/laptop-bag.png',
        material: 'قطن مصري دك + خيوط حريرية',
        accessories: 'تطريز تراثي + إكسسوارات ذهبية',
        whatsapp: 'أريد طلب شنطة لاب توب مطرزة تراث'
    },
    {
        title: 'شنطة لاب توب بريميوم - تطريز يدوي',
        description: 'الموديل الأكثر تميزاً: شنطة لاب توب بيد خارجية قماشية متينة، تطريز يدوي فاخر، جيوب متعددة (داخلية وخارجية) لترتيب الشاحن والمتعلقات، مع طبقة حماية مضاعفة للجهاز.',
        price: '٧٥٠ جنيه',
        image: 'images/messenger-bag.png',
        material: 'قطن مصري دك ثقيل + تطريز يدوي',
        accessories: 'يد قماشية + جيوب إضافية + حماية قصوى',
        whatsapp: 'أريد طلب شنطة لاب توب بريميوم مطرزة'
    }
];

// ==========================================
// DOM Elements
// ==========================================
const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const modal = document.getElementById('productModal');
const modalClose = document.getElementById('modalClose');
const filterBtns = document.querySelectorAll('.filter-btn');
const productsGrid = document.getElementById('productsGrid');
const toast = document.getElementById('toast');

// ==========================================
// Navbar Scroll Effect
// ==========================================
let lastScrollY = 0;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 60) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Update active nav link based on scroll position
    updateActiveNavLink();

    lastScrollY = currentScrollY;
});

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 150;

    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        const link = document.querySelector(`.nav-links a[href="#${id}"]`);

        if (link) {
            if (scrollPos >= top && scrollPos < top + height) {
                document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
                link.classList.add('active');
            }
        }
    });
}

// ==========================================
// Mobile Menu
// ==========================================
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
});

// Close menu on link click
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Close menu on outside click
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !menuToggle.contains(e.target) && navLinks.classList.contains('active')) {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// ==========================================
// Product Filter
// ==========================================
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active filter
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;
        const cards = productsGrid.querySelectorAll('.product-card');

        cards.forEach((card, index) => {
            const category = card.dataset.category;

            if (filter === 'all' || category === filter) {
                card.style.transition = `opacity 0.4s ease ${index * 0.05}s, transform 0.4s ease ${index * 0.05}s`;
                card.classList.remove('hidden');
                card.style.position = 'relative';
            } else {
                card.classList.add('hidden');
                setTimeout(() => {
                    if (card.classList.contains('hidden')) {
                        card.style.position = 'absolute';
                    }
                }, 400);
            }
        });
    });
});

// ==========================================
// Product Modal
// ==========================================
function openModal(index) {
    const product = products[index];
    if (!product) return;

    document.getElementById('modalImage').src = product.image;
    document.getElementById('modalImage').alt = product.title;
    document.getElementById('modalTitle').textContent = product.title;
    document.getElementById('modalDescription').textContent = product.description;
    document.getElementById('modalMaterial').textContent = product.material;
    document.getElementById('modalAccessories').textContent = product.accessories;
    document.getElementById('modalPrice').textContent = product.price;

    const orderBtn = document.getElementById('modalOrderBtn');
    orderBtn.href = `https://wa.me/201004536318?text=${encodeURIComponent(product.whatsapp)}`;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// ==========================================
// Copy to Clipboard
// ==========================================
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast();
    }).catch(() => {
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast();
    });
}

function showToast() {
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2500);
}

// ==========================================
// Stats Counter Animation
// ==========================================
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const target = parseInt(counter.dataset.target);
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };

        updateCounter();
    });
}

// ==========================================
// Scroll Reveal Animation
// ==========================================
function initScrollReveal() {
    const revealElements = document.querySelectorAll(
        '.about-card, .product-card, .payment-card, .contact-card, .section-header'
    );

    revealElements.forEach(el => {
        el.classList.add('reveal');
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
}

// ==========================================
// Stats Section Observer
// ==========================================
function initStatsObserver() {
    const statsSection = document.querySelector('.hero-stats');
    if (!statsSection) return;

    let statsAnimated = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !statsAnimated) {
                statsAnimated = true;
                animateCounters();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    observer.observe(statsSection);
}

// ==========================================
// Smooth Scroll for Anchors
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==========================================
// Parallax on shapes
// ==========================================
window.addEventListener('mousemove', (e) => {
    const shapes = document.querySelectorAll('.shape');
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;

    shapes.forEach((shape, i) => {
        const speed = (i + 1) * 8;
        shape.style.transform += ` translate(${x * speed}px, ${y * speed}px)`;
    });
});

// ==========================================
// Initialize Everything
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    initScrollReveal();
    initStatsObserver();
    updateActiveNavLink();
});
