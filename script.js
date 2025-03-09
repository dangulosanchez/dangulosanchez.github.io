function toggleLanguage() {
    const translations = {
        "hero-heading": { "en": "Effortless Logistics, Powerful Solutions", "es": "Logística sin esfuerzo, soluciones poderosas" },
        "hero-text": { "en": "Real-time tracking, efficient warehousing, and seamless freight forwarding.", "es": "Seguimiento en tiempo real, almacenamiento eficiente y transporte sin problemas." }
    };

    let lang = document.body.getAttribute('lang') === 'en' ? 'es' : 'en';
    document.body.setAttribute('lang', lang);

    for (let key in translations) {
        let element = document.getElementById(key);
        if (element) {
            element.innerText = translations[key][lang];
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var carouselElement = document.querySelector("#custom-slideshow");

    if (carouselElement) {
        // ✅ Ensures the Bootstrap carousel auto-plays and transitions correctly
        var myCarousel = new bootstrap.Carousel(carouselElement, {
            interval: 5000, // ✅ Changes slides every 5 seconds
            ride: "carousel", // ✅ Ensures it starts automatically
            pause: "hover" // ✅ Pauses when hovering
        });

        console.log("✅ Bootstrap Carousel Initialized Successfully!");
    } else {
        console.error("❌ ERROR: #custom-slideshow not found in the DOM.");
    }
});




document.addEventListener("DOMContentLoaded", function () {
    const mobileNav = document.querySelector(".mobile-nav");
    const hamburger = document.querySelector(".hamburger");
    const mobileDropdown = document.querySelector(".mobile-dropdown");

    function toggleMobileMenu() {
        mobileNav.classList.toggle("show");
        hamburger.classList.toggle("active");
    }

    function toggleMobileDropdown() {
        mobileDropdown.classList.toggle("active");
    }

    hamburger.addEventListener("click", toggleMobileMenu);
    mobileDropdown.addEventListener("click", toggleMobileDropdown);
});


document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll(".animate");

    function checkVisibility() {
        const triggerBottom = window.innerHeight * 0.85;

        animatedElements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < triggerBottom) {
                el.classList.add("visible");
            }
        });
    }

    // ✅ Check visibility on load (fixes elements being invisible)
    checkVisibility();

    // ✅ Re-run on scroll
    window.addEventListener("scroll", checkVisibility);
});
