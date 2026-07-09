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

    const counters = document.querySelectorAll(".stat-box h2");

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

            }

        });

    }, {

        threshold: 0.15

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

        btn.onclick = () => {

            dropdowns.forEach((item) => {

                if (item !== dropdown) {

                    item.classList.remove("active");

                }

            });

            dropdown.classList.toggle("active");

        };

    });

    /*==========================================
        SERVICES SCROLL ANIMATION
==========================================*/

    const serviceCards = document.querySelectorAll(".service-card");

    const serviceObserver = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                const index = [...serviceCards].indexOf(entry.target);

                setTimeout(() => {

                    entry.target.classList.add("show");

                }, index * 120);

            }

        });

    }, {

        threshold: 0.05

    });

    serviceCards.forEach(card => {

        serviceObserver.observe(card);

    });

    /*==========================================
        PREMIUM MEGA MENU
==========================================*/

    /*==========================================
        PREMIUM MEGA MENU
==========================================*/

    const categories = document.querySelectorAll(".category-item");

    const groups = document.querySelectorAll(".service-group");

    const previewImage = document.getElementById("megaPreviewImage");

    const previewTitle = document.getElementById("megaTitle");

    const previewDescription = document.getElementById("megaDescription");

    const menuData = {

        "home-safety": {

            image: "assets/images/services/balcony-safety-nets1.jpg",

            title: "Home Safety Nets",

            description: "Premium balcony safety nets, child safety, pet safety and mosquito mesh installation for complete home protection."

        },

        "bird": {

            image: "assets/images/services/bird-net.jpg",

            title: "Bird Protection",

            description: "Keep pigeons and birds away with premium bird protection systems."

        },

        "industrial": {

            image: "assets/images/services/cricketnest.png",

            title: "Industrial Safety Nets",

            description: "Construction, warehouse and industrial safety net solutions."

        },

        "grills": {

            image: "assets/images/services/invisible-grill.jpg",

            title: "Invisible Grills",

            description: "Elegant stainless steel invisible grills for modern homes."

        },
        "special": {

            image: "assets/images/services/pet-safety.jpg",

            title: "Special Safety Solutions",

            description: "Swimming pool safety nets, staircase nets, terrace nets, monkey safety nets, coconut tree nets, garden safety nets and customized safety solutions."

        }

    };

    categories.forEach(item => {

        item.addEventListener("mouseenter", () => {

            categories.forEach(i => i.classList.remove("active"));

            item.classList.add("active");

            const target = item.dataset.target;

            groups.forEach(group => group.classList.remove("active"));

            document.getElementById(target).classList.add("active");

            previewImage.style.opacity = "0";

            setTimeout(() => {

                previewImage.src = menuData[target].image;

                previewTitle.textContent = menuData[target].title;

                previewDescription.textContent = menuData[target].description;

                previewImage.onload = () => {

                    previewImage.style.opacity = "1";

                };

            }, 150);

            previewTitle.textContent = menuData[target].title;

            previewDescription.textContent = menuData[target].description;

        });

    });
    const whyCards = document.querySelectorAll(".why-card");

    const whyObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                whyCards.forEach((card, index) => {

                    setTimeout(() => {

                        card.classList.add("show");

                    }, index * 120);

                });

            }

        });

    }, {
        threshold: 0.2
    });

    whyCards.forEach(card => {

        whyObserver.observe(card);

    });
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



