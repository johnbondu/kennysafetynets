/*==================================================
            SAFENEST V2
            MAIN SCRIPT
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==========================================
            SELECTORS
    ==========================================*/

    const header = document.querySelector(".header");

    const menuBtn = document.querySelector(".menu-toggle");

    const mobileMenu = document.querySelector(".mobile-menu");

    const closeBtn = document.querySelector(".close-menu");

    const overlay = document.querySelector(".overlay");

    const mobileLinks = document.querySelectorAll(".mobile-menu a");

    const revealElements = document.querySelectorAll(".reveal");

    // const counters = document.querySelectorAll(".stat-box h2");

    const heroImage = document.querySelector(".hero-image");



    /*==========================================
            STICKY HEADER
    ==========================================*/

    window.addEventListener("scroll", () => {

        if (window.scrollY > 30) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });



    /*==========================================
            MOBILE MENU
    ==========================================*/
    function openMenu() {

        mobileMenu.classList.add("active");
        overlay.classList.add("active");
        document.body.classList.add("menu-open");
        document.body.style.overflow = "hidden";

        document.querySelectorAll(".mobile-dropdown").forEach(dropdown => {
            dropdown.classList.remove("active");
        });

    }



    function closeMenu() {

        mobileMenu.classList.remove("active");
        overlay.classList.remove("active");
        document.body.classList.remove("menu-open");
        document.body.style.overflow = "";

        document.querySelectorAll(".mobile-dropdown").forEach(dropdown => {
            dropdown.classList.remove("active");
        });

    }
    if (menuBtn) {

        menuBtn.addEventListener("click", openMenu);

    }

    if (closeBtn) {

        closeBtn.addEventListener("click", closeMenu);

    }

    if (overlay) {

        overlay.addEventListener("click", closeMenu);

    }

    mobileLinks.forEach(link => {

        link.addEventListener("click", closeMenu);

    });



    /*==========================================
            SMOOTH SCROLL
    ==========================================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        });

    });



    /*==========================================
            SCROLL REVEAL
    ==========================================*/

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {


                entry.target.classList.add("active");
                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.05

    });

    revealElements.forEach(el => {

        observer.observe(el);

    });



    /*==========================================
            COUNTER
    ==========================================*/

    let counterStarted = false;

    function startCounter() {

        if (counterStarted) return;

        const stats = document.querySelector(".hero-stats");

        if (!stats) return;

        const top = stats.getBoundingClientRect().top;

        if (top < window.innerHeight - 80) {

            counters.forEach(counter => {

                const text = counter.innerText;

                if (text.includes("24")) return;

                const target = parseInt(text);

                let count = 0;

                const speed = target / 80;

                function update() {

                    count += speed;

                    if (count < target) {

                        counter.innerText =

                            Math.floor(count) + "+";

                        requestAnimationFrame(update);

                    }

                    else {

                        counter.innerText = target + "+";

                    }

                }

                update();

            });

            counterStarted = true;

        }

    }

    window.addEventListener("scroll", startCounter);

    startCounter();



    /*==========================================
            PARALLAX HERO
    ==========================================*/

    document.addEventListener("mousemove", (e) => {

        if (!heroImage) return;

        if (window.innerWidth < 992) return;

        const x =

            (window.innerWidth / 2 - e.pageX) / 45;

        const y =

            (window.innerHeight / 2 - e.pageY) / 45;

        heroImage.style.transform =

            `translate(${x}px, ${y}px)`;

    });



    /*==========================================
            HERO RESET
    ==========================================*/

    document.addEventListener("mouseleave", () => {

        if (!heroImage) return;

        heroImage.style.transform = "translate(0,0)";

    });



    /*==========================================
            BUTTON RIPPLE
    ==========================================*/

    const buttons = document.querySelectorAll(

        ".btn-primary,.btn-outline"

    );

    buttons.forEach(btn => {

        btn.addEventListener("mouseenter", () => {

            btn.style.transform =

                "translateY(-4px)";

        });

        btn.addEventListener("mouseleave", () => {

            btn.style.transform =

                "translateY(0)";

        });

    });



    /*==========================================
            ACTIVE NAV LINK
    ==========================================*/

    const navLinks = document.querySelectorAll(

        ".nav-links a"

    );

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navLinks.forEach(item =>

                item.classList.remove("active")

            );

            link.classList.add("active");

        });

    });



    /*==========================================
            LOADER EFFECT
    ==========================================*/

    window.addEventListener("load", () => {

        document.body.classList.add("loaded");

    });



    /*==========================================
            CONSOLE
    ==========================================*/

    console.log(

        "%c Kenny Safety Nets  Loaded Successfully",

        "background:#FF6B00;color:#fff;font-size:15px;padding:10px;border-radius:8px;"

    );
    /* Mobile Dropdown */
    const dropdowns = document.querySelectorAll(".mobile-dropdown");

    dropdowns.forEach((dropdown) => {

        const btn = dropdown.querySelector(".mobile-dropdown-btn");

        if (!btn) return;

        btn.addEventListener("click", function (e) {

            e.preventDefault();
            e.stopPropagation();

            dropdowns.forEach(item => {

                if (item !== dropdown) {

                    item.classList.remove("active");

                }

            });

            dropdown.classList.toggle("active");

        });

    });
    /*==========================================
        SERVICES SCROLL ANIMATION
==========================================*/

    const serviceCards = document.querySelectorAll(".service-card");

    if (serviceCards.length) {

        const serviceObserver = new IntersectionObserver((entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        }, {

            threshold: 0.1

        });

        serviceCards.forEach(card => {

            serviceObserver.observe(card);

        });

    }


    const categories = document.querySelectorAll(".category-item");
    const groups = document.querySelectorAll(".service-group");

    const previewImage = document.getElementById("megaPreviewImage");
    const previewTitle = document.getElementById("megaTitle");
    const previewDescription = document.getElementById("megaDescription");

    if (
        categories.length &&
        previewImage &&
        previewTitle &&
        previewDescription
    ) {

        categories.forEach(item => {

            item.addEventListener("mouseenter", () => {

                categories.forEach(i => i.classList.remove("active"));

                item.classList.add("active");

                const target = item.dataset.target;

                groups.forEach(group => group.classList.remove("active"));

                const activeGroup = document.getElementById(target);

                if (activeGroup) {

                    activeGroup.classList.add("active");

                }

                previewImage.style.opacity = "0";

                setTimeout(() => {

                    previewImage.src = menuData[target].image;
                    previewTitle.textContent = menuData[target].title;
                    previewDescription.textContent = menuData[target].description;

                    previewImage.onload = () => {

                        previewImage.style.opacity = "1";

                    };

                }, 150);

            });

        });

    }
    /*==========================================
        PROCESS ANIMATION
==========================================*/

    const processCards = document.querySelectorAll(".process-card");

    const processObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                processCards.forEach((card, index) => {

                    setTimeout(() => {

                        card.classList.add("show");

                    }, index * 180);

                });

                processObserver.disconnect();

            }

        });

    }, { threshold: .2 });

    processCards.forEach(card => {

        processObserver.observe(card);

    });
    /*==========================================
        GALLERY ANIMATION
==========================================*/

    const galleryCards = document.querySelectorAll(".gallery-card");

    const galleryObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                galleryCards.forEach((card, index) => {

                    setTimeout(() => {

                        card.classList.add("show");

                    }, index * 120);

                });

                galleryObserver.disconnect();

            }

        });

    }, { threshold: .15 });

    galleryCards.forEach(card => {

        galleryObserver.observe(card);

    });

    /* =========================================================
   HERO OFFER COUNTDOWN
   ONE 60-MINUTE TIMER FOR ALL 5 HERO SLIDES
========================================================= */

    const heroHours =
        document.querySelectorAll(".hero-hours");

    const heroMinutes =
        document.querySelectorAll(".hero-minutes");

    const heroSeconds =
        document.querySelectorAll(".hero-seconds");


    /* ---------------------------------------------------------
       SETTINGS
    --------------------------------------------------------- */

    const OFFER_DURATION =
        60 * 60 * 1000;

    const OFFER_STORAGE_KEY =
        "maheshSafetyOfferDeadline";


    /* ---------------------------------------------------------
       GET SAVED DEADLINE
    --------------------------------------------------------- */

    function getOfferDeadline() {

        let storedDeadline =
            localStorage.getItem(
                OFFER_STORAGE_KEY
            );

        let deadline =
            Number(storedDeadline);


        /*
           If there is no valid saved deadline,
           create a new 60-minute countdown.
        */

        if (
            !storedDeadline ||
            !Number.isFinite(deadline)
        ) {

            deadline =
                Date.now() +
                OFFER_DURATION;

            localStorage.setItem(
                OFFER_STORAGE_KEY,
                String(deadline)
            );

        }


        return deadline;

    }


    let offerDeadline =
        getOfferDeadline();


    /* ---------------------------------------------------------
       UPDATE ALL 5 COUNTDOWNS
    --------------------------------------------------------- */

    function updateHeroOfferCountdown() {

        let remaining =
            offerDeadline -
            Date.now();


        /* ---------------------------------------------
           WHEN TIMER REACHES ZERO
    
           Restart another 60-minute cycle.
        --------------------------------------------- */

        if (remaining <= 0) {

            offerDeadline =
                Date.now() +
                OFFER_DURATION;

            localStorage.setItem(
                OFFER_STORAGE_KEY,
                String(offerDeadline)
            );

            remaining =
                offerDeadline -
                Date.now();

        }


        const totalSeconds =
            Math.floor(
                remaining / 1000
            );


        const hours =
            Math.floor(
                totalSeconds / 3600
            );


        const minutes =
            Math.floor(
                (totalSeconds % 3600) / 60
            );


        const seconds =
            totalSeconds % 60;


        const formattedHours =
            String(hours).padStart(2, "0");


        const formattedMinutes =
            String(minutes).padStart(2, "0");


        const formattedSeconds =
            String(seconds).padStart(2, "0");


        /* ---------------------------------------------
           UPDATE EVERY HERO SLIDE
        --------------------------------------------- */

        heroHours.forEach((element) => {

            element.textContent =
                formattedHours;

        });


        heroMinutes.forEach((element) => {

            element.textContent =
                formattedMinutes;

        });


        heroSeconds.forEach((element) => {

            element.textContent =
                formattedSeconds;

        });

    }


    /* ---------------------------------------------------------
       RUN IMMEDIATELY
    --------------------------------------------------------- */

    updateHeroOfferCountdown();


    /* ---------------------------------------------------------
       UPDATE EVERY SECOND
    --------------------------------------------------------- */

    setInterval(
        updateHeroOfferCountdown,
        1000
    );
    /*==========================================
         LIGHTBOX
 ==========================================*/

    const lightbox = document.querySelector(".gallery-lightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const closeLightbox = document.querySelector(".close-lightbox");

    if (lightbox && lightboxImage && closeLightbox && galleryCards.length > 0) {

        galleryCards.forEach(card => {

            card.addEventListener("click", () => {

                const img = card.querySelector("img");

                if (img) {
                    lightboxImage.src = img.src;
                    lightbox.classList.add("active");
                    document.body.style.overflow = "hidden";
                }

            });

        });

        closeLightbox.addEventListener("click", () => {

            lightbox.classList.remove("active");
            document.body.style.overflow = "auto";

        });

        lightbox.addEventListener("click", (e) => {

            if (e.target === lightbox) {

                lightbox.classList.remove("active");
                document.body.style.overflow = "auto";

            }

        });

    }
    /*==========================================
        REVIEW ANIMATION
==========================================*/

    const reviewCards = document.querySelectorAll(".review-card");

    const reviewObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                reviewCards.forEach((card, index) => {

                    setTimeout(() => {

                        card.classList.add("show");

                    }, index * 150);

                });

                reviewObserver.disconnect();

            }

        });

    }, { threshold: .2 });

    reviewCards.forEach(card => {

        reviewObserver.observe(card);

    });
    /*==========================================
              FAQ ACCORDION
  ==========================================*/

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {

        const question = item.querySelector(".faq-question");

        if (!question) return;

        question.setAttribute("role", "button");
        question.setAttribute("tabindex", "0");
        question.setAttribute("aria-expanded", item.classList.contains("active") ? "true" : "false");

        const toggleFaq = () => {

            const isActive = item.classList.contains("active");

            faqItems.forEach((faq) => {

                const faqQuestion = faq.querySelector(".faq-question");

                faq.classList.remove("active");

                if (faqQuestion) {

                    faqQuestion.setAttribute("aria-expanded", "false");

                }

            });

            if (!isActive) {

                item.classList.add("active");
                question.setAttribute("aria-expanded", "true");

            } else {

                item.classList.remove("active");
                question.setAttribute("aria-expanded", "false");

            }

        };

        question.addEventListener("click", toggleFaq);

        question.addEventListener("keydown", (event) => {

            if (event.key === "Enter" || event.key === " ") {

                event.preventDefault();
                toggleFaq();

            }

        });

    });


    /*==========================================
            FAQ SCROLL ANIMATION
    ==========================================*/

    const faqObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {
        threshold: .2
    });

    faqItems.forEach(item => {

        faqObserver.observe(item);

    });
    /*==========================================
        CONTACT ANIMATION
==========================================*/

    const contactElements = document.querySelectorAll(

        ".contact-card,.contact-form-box,.contact-map"

    );

    const contactObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                contactElements.forEach((element, index) => {

                    setTimeout(() => {

                        element.classList.add("show");

                    }, index * 120);

                });

                contactObserver.disconnect();

            }

        });

    }, { threshold: .2 });

    contactElements.forEach(element => {

        contactObserver.observe(element);

    });
    /*==========================================
        FOOTER ANIMATION
==========================================*/

    const footerColumns = document.querySelectorAll(".footer-column");

    const footerObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                footerColumns.forEach((column, index) => {

                    setTimeout(() => {

                        column.classList.add("show");

                    }, index * 180);

                });

                footerObserver.disconnect();

            }

        });

    }, { threshold: .2 });

    footerColumns.forEach(column => {

        footerObserver.observe(column);

    });

    const backToTop = document.getElementById("backToTop");

    function toggleBackToTop() {

        if (!backToTop) return;

        const scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;

        backToTop.classList.toggle("active", scrollTop > 400);

    }

    if (backToTop) {

        toggleBackToTop();

        window.addEventListener("scroll", toggleBackToTop, { passive: true });

        window.addEventListener("load", toggleBackToTop);

        backToTop.addEventListener("click", function (e) {

            e.preventDefault();

            window.scrollTo({

                top: 0,
                behavior: "smooth"

            });

            document.documentElement.scrollTo({

                top: 0,
                behavior: "smooth"

            });

            if (document.body.scrollTop > 0) {

                document.body.scrollTop = 0;

            }

        });

    }
    /*==========================================
    SERVICE PAGE BACK TO TOP
==========================================*/

    const spBackToTop = document.getElementById("spBackToTop");

    if (spBackToTop) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 350) {

                spBackToTop.classList.add("show");

            } else {

                spBackToTop.classList.remove("show");

            }

        });

        spBackToTop.addEventListener("click", (e) => {

            e.preventDefault();

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }
});





/* KENNY HERO AUTOPLAY + SERVICE LINKS */
// (function () {
//     const hero = document.querySelector('.kenny-hero-slider');
//     if (hero) {
//         const slides = [...hero.querySelectorAll('.kenny-hero-slide')], dots = hero.querySelector('.kenny-hero-dots'); let n = 0;
//         const show = i => { n = (i + slides.length) % slides.length; slides.forEach((s, j) => s.classList.toggle('active', j === n)); if (dots) [...dots.children].forEach((d, j) => d.classList.toggle('active', j === n)); };
//         slides.forEach((_, i) => { const b = document.createElement('button'); b.type = 'button'; b.setAttribute('aria-label', 'Show hero image ' + (i + 1)); b.onclick = () => show(i); dots.appendChild(b) }); show(0); let timer = setInterval(() => show(n + 1), 5000); hero.addEventListener('mouseenter', () => clearInterval(timer)); hero.addEventListener('mouseleave', () => timer = setInterval(() => show(n + 1), 5000));
//     }
//     const map = { 'Balcony Safety Nets': 'balcony_safety_nets/balcony_safety_nets_bangalore.html', 'Child Safety Nets': 'child_safety_nets/child_safety_nets_bangalore.html', 'Pet Safety Nets': 'pet_safety_nets/pet_safety_nets_bangalore.html', 'Mosquito Nets Installation': 'mosquito_nets/mosquito_nets_bangalore.html', 'Bird Protection Nets': 'bird_safety_nets/bird_safety_nets_bangalore.html', 'Invisible Grills': 'invisible_grills/invisible_grills_bangalore.html', 'Construction Nets': 'construction_safety_nets/construction_safety_nets_bangalore.html' };
//     document.querySelectorAll('.service-card').forEach(card => { const img = card.querySelector('img'); const alt = img ? img.alt : ''; let key = Object.keys(map).find(k => alt.toLowerCase().includes(k.toLowerCase().replace(' installation', ''))); if (key) { let a = card.querySelector('.kenny-view-link'); if (!a) { a = document.createElement('a'); a.className = 'kenny-view-link'; a.textContent = 'Explore service'; a.href = map[key]; const c = card.querySelector('.service-content'); if (c) c.appendChild(a); } } });
// })();
/* SIMPLE HERO IMAGE VIEWER */

(function () {
    const links = Array.from(
        document.querySelectorAll('[data-gallery="hero"]')
    );

    const lightbox = document.getElementById('kennyLightbox');
    const viewerImage = document.getElementById('kennyLightboxImage');
    const closeButton = document.getElementById('kennyLightboxClose');
    const previousButton = document.getElementById('kennyLightboxPrev');
    const nextButton = document.getElementById('kennyLightboxNext');

    if (!links.length || !lightbox) return;

    let currentIndex = 0;

    function showImage(index) {
        currentIndex = (index + links.length) % links.length;

        const link = links[currentIndex];
        const image = link.querySelector('img');

        viewerImage.src = link.getAttribute('href');
        viewerImage.alt = image ? image.alt : 'Hero image';
    }

    function openViewer(index) {
        showImage(index);
        lightbox.classList.add('active');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeViewer() {
        lightbox.classList.remove('active');
        lightbox.setAttribute('aria-hidden', 'true');
        viewerImage.src = '';
        document.body.style.overflow = '';
    }

    links.forEach((link, index) => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            openViewer(index);
        });
    });

    previousButton.addEventListener('click', function () {
        showImage(currentIndex - 1);
    });

    nextButton.addEventListener('click', function () {
        showImage(currentIndex + 1);
    });

    closeButton.addEventListener('click', closeViewer);

    document.addEventListener('keydown', function (event) {
        if (!lightbox.classList.contains('active')) return;

        if (event.key === 'Escape') closeViewer();
        if (event.key === 'ArrowLeft') showImage(currentIndex - 1);
        if (event.key === 'ArrowRight') showImage(currentIndex + 1);
    });
})();
document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.getElementById("kennyLightbox");
    const lightboxImage = document.getElementById("kennyLightboxImage");
    const closeButton = document.getElementById("kennyLightboxClose");
    const previousButton = document.getElementById("kennyLightboxPrev");
    const nextButton = document.getElementById("kennyLightboxNext");

    const galleryImages = Array.from(
        document.querySelectorAll('[data-gallery="hero"]')
    );

    let currentIndex = 0;

    function showImage(index) {
        if (!galleryImages.length) return;

        currentIndex =
            (index + galleryImages.length) % galleryImages.length;

        const selectedLink = galleryImages[currentIndex];
        const selectedImage = selectedLink.querySelector("img");

        lightboxImage.src = selectedLink.href;
        lightboxImage.alt = selectedImage
            ? selectedImage.alt
            : "Gallery image";
    }

    function openLightbox(index) {
        showImage(index);
        lightbox.classList.add("active");
        lightbox.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
    }

    function closeLightbox() {
        lightbox.classList.remove("active");
        lightbox.setAttribute("aria-hidden", "true");
        lightboxImage.src = "";
        document.body.style.overflow = "";
    }

    galleryImages.forEach((imageLink, index) => {
        imageLink.addEventListener("click", (event) => {
            event.preventDefault();
            openLightbox(index);
        });
    });

    previousButton.addEventListener("click", () => {
        showImage(currentIndex - 1);
    });

    nextButton.addEventListener("click", () => {
        showImage(currentIndex + 1);
    });

    closeButton.addEventListener("click", closeLightbox);

    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (!lightbox.classList.contains("active")) return;

        if (event.key === "ArrowLeft") {
            showImage(currentIndex - 1);
        }

        if (event.key === "ArrowRight") {
            showImage(currentIndex + 1);
        }

        if (event.key === "Escape") {
            closeLightbox();
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const SERVICE_INTERVAL = 1800; // 1.8 seconds

    const serviceData = {
        "Balcony Safety Nets": {
            page: "../balcony_safety_nets/balcony_safety_nets_bangalore.html",
            images: [
                "assets/images/services/balcony-net.png",
                "assets/images/gallery/balcony nets near me.jpg",
                "assets/images/gallery/balcony safety nets in bangalore.jpg"
            ]
        },

        "Pigeon Safety Nets": {
            page: "../pigeon_safety_nets/pigeon_safety_nets_bangalore.html",
            images: [
                "assets/images/services/bird-net.jpg",
                "assets/images/gallery/pigeon safety nets.jpg",
                "assets/images/gallery/safety nets bangalore.jpg"
            ]
        },

        "Child Safety Nets": {
            page: "../children_safety_nets/children_safety_nets_bangalore.html",
            images: [
                "assets/images/gallery/terrace1.jpg",
                "assets/images/gallery/child safety nets in bangalore.jpg",
                "assets/images/gallery/child safety nets.jpg"
            ]
        },
         "Invisible Grills": {
            page: "../invisible_grills/invisible_grills_bangalore.html",
            images: [
                "assets/images/services/invisible-grill.jpg",
                "assets/images/gallery/invisible grills near me.jpg",
                "assets/images/gallery/invisible grills.jpg"
            ]
        },

        "Pet Safety Nets": {
            page: "../pet_safety_nets/pet_safety_nets_bangalore.html",
            images: [
                "assets/images/services/pet-safety.jpg",
                "assets/images/gallery/pet4.jpg",
                "assets/images/gallery/pet5.jpg"
            ]
        },

        "Mosquito Nets Installation": {
            page: "../mosquito_nets/mosquito_nets_bangalore.html",
            images: [
                "assets/images/services/mosquito6.jpg",
                "assets/images/gallery/gallery3.jpg",
                "assets/images/gallery/mosquito mesh near me.jpg"
            ]
        },

       

        "Duct Area Safety Nets": {
            page: "../duct_area_safety_nets/duct_area_safety_nets_bangalore.html",
            images: [
                "assets/images/gallery/duct6.jpg",
                "assets/images/gallery/duct1.jpg",
                "assets/images/gallery/duct5.jpg"
            ]
        },

        "Construction Safety Nets": {
            page: "../construction_safety_nets/construction_safety_nets_bangalore.html",
            images: [
                "assets/images/services/installation.jpg",
                "assets/images/gallery/construction shade net.jpg",
                "assets/images/gallery/Construction-Shade-Net.jpg"
            ]
        },

        "Sports Safety Nets": {
            page: "../sports_safety_nets/sports_safety_nets_bangalore.html",
            images: [
                "assets/images/services/cricketnets2.png",
                "assets/images/gallery/sports2.jpg",
                "assets/images/gallery/sports3.jpg"
            ]
        },

        "Anti Bird Nets": {
            page: "../anti_bird_nets/anti_bird_nets_bangalore.html",
            images: [
                "assets/images/gallery/pigeon safety nets.jpg",
                "assets/images/gallery/safety nets bangalore.jpg",
                "assets/images/gallery/safety nets.jpg"
            ]
        },

        "Bird Spikes Installation": {
            page: "../bird_spikes/bird_spikes_bangalore.html",
            images: [
                "assets/images/gallery/pigeon safety nets.jpg",
                "assets/images/gallery/safety nets bangalore.jpg",
                "assets/images/gallery/safety nets.jpg"
            ]
        },

        "Swimming Pool Safety Nets": {
            page: "../swimming_pool_safety_nets/swimming_pool_safety_nets_bangalore.html",
            images: [
                "assets/images/services/swimming-pool-nets.jpg",
                "assets/images/gallery/swimming3.jpg",
                "assets/images/gallery/swimming4.jpg"
            ]
        },

        "Monkey Safety Nets": {
            page: "../monkey_safety_nets/monkey_safety_nets_bangalore.html",
            images: [
                "assets/images/gallery/monkey safety nets.jpg",
                "assets/images/gallery/monkey safety nets near me.jpg",
                "assets/images/gallery/monkey safety nets in bangalore.jpg"
            ]
        },

        "Terrace Safety Nets": {
            page: "../terrace_safety_nets/terrace_safety_nets_bangalore.html",
            images: [
                "assets/images/services/terrace-nets.jpg",
                "assets/images/gallery/terrace2.jpg",
                "assets/images/gallery/terrace3.jpg"
            ]
        },

        "Staircase Safety Nets": {
            page: "../stair_case_safety_nets/staircase_safety_nets_bangalore.html",
            images: [
                "assets/images/services/staircase-nets.jpg",
                "assets/images/gallery/stair4.jpg",
                "assets/images/gallery/stair6.jpg"
            ]
        },

        "Cloth Hangers": {
            page: "../cloth_hangers/cloth_hangers_bangalore.html",
            images: [
                "assets/images/services/cloths_installation.jpg",
                "assets/images/gallery/cloths2.jpg",
                "assets/images/gallery/cloths6.jpg"
            ]
        },

        "Garden Safety Nets": {
            page: "../garden_safety_nets/garden_safety_nets_bangalore.html",
            images: [
                "assets/images/services/garden-safety-nets.jpg",
                "assets/images/gallery/garden2.jpg",
                "assets/images/gallery/garden3.jpg"
            ]
        },

        "Coconut Tree Nets": {
            page: "../coconut_tree_nets/coconut_tree_nets_bangalore.html",
            images: [
                "assets/images/services/coconut-tree-nets.jpg",
                "assets/images/services/coconut-tree-nets-2.jpg",
                "assets/images/services/coconut-tree-nets-3.jpg"
            ]
        }
    };

    function getServiceTitle(card) {
        const heading = card.querySelector("h3");
        return heading ? heading.textContent.trim() : "";
    }

    function setupImageSlider(card, images) {
        const image = card.querySelector(".service-image img, img");

        if (!image || !images || images.length < 2) return;

        let currentIndex = 0;

        image.classList.add("service-auto-image");

        setInterval(() => {
            image.classList.add("is-changing");

            setTimeout(() => {
                currentIndex = (currentIndex + 1) % images.length;

                const nextImage = new Image();

                nextImage.onload = () => {
                    image.src = images[currentIndex];
                    image.classList.remove("is-changing");
                };

                nextImage.onerror = () => {
                    image.classList.remove("is-changing");
                };

                nextImage.src = images[currentIndex];
            }, 200);
        }, SERVICE_INTERVAL);
    }

    document.querySelectorAll(".service-card").forEach((card) => {
        const title = getServiceTitle(card);
        const service = serviceData[title];

        if (!service) return;

        // Make the complete card accessible and clickable
        card.setAttribute("tabindex", "0");
        card.setAttribute("role", "link");
        card.setAttribute("aria-label", `View ${title}`);

        card.addEventListener("click", (event) => {
            // Do not redirect when Call Now is clicked
            if (event.target.closest(".service-call-btn")) {
                return;
            }

            window.location.href = service.page;
        });

        card.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                window.location.href = service.page;
            }
        });

        setupImageSlider(card, service.images);
    });
}); 
document.addEventListener("DOMContentLoaded", () => {
    const heroSlides = document.querySelectorAll(".kenny-hero-slide");

    if (heroSlides.length <= 1) return;

    let currentHeroIndex = 0;

    function showHeroSlide(index) {
        heroSlides.forEach((slide, slideIndex) => {
            slide.classList.toggle("active", slideIndex === index);
        });
    }

    setInterval(() => {
        currentHeroIndex =
            (currentHeroIndex + 1) % heroSlides.length;

        showHeroSlide(currentHeroIndex);
    }, 1800);
});


// side show
document.addEventListener("DOMContentLoaded", () => {
    const carousels = document.querySelectorAll("[data-carousel]");

    carousels.forEach((carousel) => {
        const previousButton = document.querySelector(
            `[data-carousel-prev="${carousel.id}"]`
        );

        const nextButton = document.querySelector(
            `[data-carousel-next="${carousel.id}"]`
        );

        const firstCard = carousel.firstElementChild;

        if (!firstCard) return;

        let autoScrollTimer;
        let isPaused = false;

        function getScrollAmount() {
            const cardWidth = firstCard.getBoundingClientRect().width;
            const gap = parseFloat(getComputedStyle(carousel).gap) || 0;

            return cardWidth + gap;
        }

        function updateButtons() {
            if (!previousButton || !nextButton) return;

            previousButton.disabled = carousel.scrollLeft <= 5;

            nextButton.disabled =
                carousel.scrollLeft + carousel.clientWidth >=
                carousel.scrollWidth - 5;
        }

        function scrollNext() {
            const amount = getScrollAmount();

            if (
                carousel.scrollLeft + carousel.clientWidth >=
                carousel.scrollWidth - 5
            ) {
                carousel.scrollTo({
                    left: 0,
                    behavior: "smooth"
                });
            } else {
                carousel.scrollBy({
                    left: amount,
                    behavior: "smooth"
                });
            }
        }

        function scrollPrevious() {
            const amount = getScrollAmount();

            if (carousel.scrollLeft <= 5) {
                carousel.scrollTo({
                    left: carousel.scrollWidth,
                    behavior: "smooth"
                });
            } else {
                carousel.scrollBy({
                    left: -amount,
                    behavior: "smooth"
                });
            }
        }

        function startAutoScroll() {
            clearInterval(autoScrollTimer);

            autoScrollTimer = setInterval(() => {
                if (!isPaused) {
                    scrollNext();
                }
            }, 3000);
        }

        function pauseAutoScroll() {
            isPaused = true;
        }

        function resumeAutoScroll() {
            isPaused = false;
        }

        previousButton?.addEventListener("click", () => {
            scrollPrevious();
            startAutoScroll();
        });

        nextButton?.addEventListener("click", () => {
            scrollNext();
            startAutoScroll();
        });

        carousel.addEventListener("mouseenter", pauseAutoScroll);
        carousel.addEventListener("mouseleave", resumeAutoScroll);

        carousel.addEventListener("focusin", pauseAutoScroll);
        carousel.addEventListener("focusout", resumeAutoScroll);

        carousel.addEventListener("scroll", updateButtons);

        window.addEventListener("resize", updateButtons);

        updateButtons();
        startAutoScroll();
    });
});