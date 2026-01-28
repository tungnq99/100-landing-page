document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    // 1. Hero Parallax Effect
    // The background image moves slower than the scroll to create depth
    gsap.to(".parallax-bg", {
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: true
        },
        yPercent: 50, // Move image down by 50% of its height as we scroll
        ease: "none"
    });

    // Hero Content Reveal (On Load)
    const heroTl = gsap.timeline();
    heroTl.from(".navbar", { y: -100, opacity: 0, duration: 1, ease: "power3.out" })
        .from(".social-sidebar", { x: -50, opacity: 0, duration: 1 }, "-=0.5")
        .from(".page-progress", { x: 50, opacity: 0, duration: 1 }, "-=1")
        .from(".hero-content .tagline", { y: 30, opacity: 0, duration: 0.8 }, "-=0.5")
        .from(".hero-content .main-title", { y: 50, opacity: 0, duration: 1 }, "-=0.6")
        .from(".scroll-down", { y: 20, opacity: 0, duration: 0.8 }, "-=0.4");


    // 2. Section Scroll Reveals (Zig Zag)
    // We select all content sections and loop through them
    const sections = document.querySelectorAll(".content-section");

    sections.forEach((section) => {
        // Elements to animate within the section
        const bgNumber = section.querySelector(".bg-number");
        const tagline = section.querySelector(".tagline");
        const heading = section.querySelector("h2");
        const text = section.querySelector("p");
        const btn = section.querySelector(".read-more");
        const image = section.querySelector(".image-block img");

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top 80%", // Start animation when top of section hits 80% of viewport
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        });

        // Staggered Text Reveal
        tl.from(bgNumber, { x: -50, opacity: 0, duration: 1, ease: "power2.out" })
            .from([tagline, heading, text, btn], {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out"
            }, "-=0.8") // Overlap with number reveal
            .from(image, {
                y: 50,
                opacity: 0,
                scale: 1.1,
                duration: 1.2,
                ease: "power2.out"
            }, "-=1"); // Image reveals concurrently
    });


    // 3. Navbar Background on Scroll
    // MNTN header becomes solid or blur when scrolling past hero
    ScrollTrigger.create({
        start: "top -80",
        end: 99999,
        toggleClass: { className: "scrolled", targets: ".navbar" }
    });


    // 4. Page Progress Indicator Sync
    // Update the active number based on scroll position
    const steps = document.querySelectorAll(".progress-step");
    const indicator = document.querySelector(".progress-indicator");

    // Helper to set active step
    function setActiveStep(id) {
        // 1. Update Active Text
        steps.forEach(step => {
            if (step.dataset.step === id) step.classList.add("active");
            else step.classList.remove("active");
        });

        // 2. Move Indicator Bar
        // Map step IDs to positions (0%, 25%, 50%, 75%)
        const positions = {
            "hero": "0%",
            "one": "25%",
            "two": "50%",
            "three": "75%"
        };

        if (positions[id]) {
            gsap.to(indicator, {
                top: positions[id],
                duration: 0.5,
                ease: "power2.out"
            });
        }
    }

    // Updated triggers with valid selectors
    ScrollTrigger.create({ trigger: "#hero", start: "top center", onEnter: () => setActiveStep("hero"), onEnterBack: () => setActiveStep("hero") });
    ScrollTrigger.create({ trigger: "#one", start: "top center", onEnter: () => setActiveStep("one"), onEnterBack: () => setActiveStep("hero") });
    ScrollTrigger.create({ trigger: "#one", start: "top 40%", onEnter: () => setActiveStep("one"), onLeaveBack: () => setActiveStep("hero") });
    ScrollTrigger.create({ trigger: "#two", start: "top center", onEnter: () => setActiveStep("two"), onLeaveBack: () => setActiveStep("one") });
    ScrollTrigger.create({ trigger: "#three", start: "top center", onEnter: () => setActiveStep("three"), onLeaveBack: () => setActiveStep("two") });

});
