(function () {
    "use strict";

    var translations = {
        en: {
            "meta.title": "RodX | Junior Full-Stack Developer (React, Python, Odoo ERP)",
            "meta.description": "RodX's portfolio, a junior developer specialized in Odoo ERP, React and full-stack development. Projects, experience and contact.",
            "nav.home": "Home",
            "nav.about": "About",
            "nav.service": "Skills",
            "nav.experience": "Experience",
            "nav.portfolio": "Portfolio",
            "nav.blog": "Projects",
            "nav.contact": "Contact",
            "hero.im": "I'm",
            "hero.roles": "Software Developer, Odoo Technical Developer, Full Stack Engineer, React &amp; Python Developer",
            "hero.contactBtn": "Contact Me",
            "hero.cvBtn": "View Resume",
            "about.eyebrow": "About Me",
            "about.title": "Full-Stack &amp; ERP Developer",
            "about.text": "Software developer focused on building business solutions and modern web platforms. I have hands-on experience implementing advanced customizations in <strong>Odoo ERP (Python/XML)</strong> and building dynamic, interactive interfaces with <strong>React</strong>. Passionate about clean architecture, process optimization, and full-stack web development.",
            "about.downloadBtn": "Download Resume",
            "about.skill3": "Backend &amp; Databases (.NET, PostgreSQL, REST APIs)",
            "about.skill4": "UI/UX Design &amp; Responsive Web",
            "service.eyebrow": "Areas of Expertise",
            "service.title": "What I Bring to the Table",
            "service.item1.title": "Odoo ERP Development",
            "service.item1.text": "Building custom modules in Python/XML, tailored e-commerce snippets, business rule configuration, and QWeb reports.",
            "service.item2.title": "Frontend Development &amp; React",
            "service.item2.text": "Building interactive web apps, admin dashboards, and dynamic medical or business interfaces with React, JavaScript, and modern frontend tooling.",
            "service.item3.title": "Full-Stack Development &amp; APIs",
            "service.item3.text": "Designing and implementing robust APIs in .NET, modeling relational databases (PostgreSQL/MySQL), and structuring scalable architectures.",
            "service.item4.title": "Web Design &amp; UI/UX",
            "service.item4.text": "Responsive layouts for mobile devices, corporate landing pages optimized for SEO, and institutional websites.",
            "experience.eyebrow": "A Summary",
            "experience.title": "Work Experience",
            "experience.item1.date": "Sep 2025 - Feb 2026",
            "experience.item1.role": "Odoo Technical Intern",
            "experience.item1.text": "Programmed custom modules in Python and XML: dynamic web snippets, multi-branch stock rules, and SKU rollout. Built pricing segmentation business rules (retail and authorized wholesale price lists). Designed and adapted reports (purchases/invoices) locally, managed with Git and deployed to production branches. Implemented E-learning modules and interactive maps with branch geolocation.",
            "experience.item2.date": "Sep - Dec 2025",
            "experience.item2.role": "Frontend &amp; Web Developer",
            "experience.item2.text": "Web Design &amp; Branding: created landing pages consistent with Rocaz IT's brand identity for each service. Dr. Clic medical system (React): developed specialized modules within the medical management system, expanding from general medicine. Dental Module: designed and implemented the web interface and extended the database for dental clinical records (morphology, occlusion, and visual charting).",
            "experience.item3.date": "Aug - Dec 2024",
            "experience.item3.role": "Web Designer &amp; Frontend Developer",
            "experience.item3.text": "Designed the interface for Librería Plenitud Cristo, ensuring easy navigation and a look consistent with the brand's identity.",
            "experience.item4.date": "Jul - Dec 2023",
            "experience.item4.role": "Web Developer",
            "experience.item4.text": "Built the frontend design for the Nutfimed website, creating an intuitive, appealing interface that improves the user experience.",
            "portfolio.title": "Project Gallery",
            "portfolio.filterAll": "All",
            "portfolio.inProgress": "In Progress",
            "contact.name": "Name",
            "contact.email": "Email",
            "contact.message": "Message",
            "contact.send": "Send",
            "blog.eyebrow": "Recent Work",
            "blog.title": "Recent Work &amp; Live Sites",
            "blog.visit": "Visit <i class=\"fa fa-angle-right\"></i>",
            "blog.item1.text": "Developed custom Odoo ERP modules, tailored e-commerce snippets (dynamic carousels, conditional price lists), and multi-branch visibility controls.",
            "blog.item2.text": "Frontend development with React for the Dr. Clic medical platform, building dynamic dental modules (interactive odontogram, visual diagnosis) and designing its website.",
            "blog.item3.text": "UI/UX design from scratch for an English-learning platform. Responsive visual structuring, asset optimization, and a UX-focused interface.",
            "blog.item4.text": "Implemented visual improvements, interface redesign, and optimized interactive components for Rocaz IT's official corporate website.",
            "blog.item5.text": "Frontend markup and logic for a product catalog. Includes real-time client-side filtering and an e-commerce-focused navigation flow.",
            "blog.item6.text": "Web platform with a smooth interface designed for booking appointments and exploring medical services. Implemented an intuitive, mobile-friendly design."
        },
        es: {}
    };

    // Capture the original Spanish copy straight from the DOM so it never
    // needs to be duplicated by hand in this file.
    function captureSpanish() {
        document.querySelectorAll("[data-i18n]").forEach(function (el) {
            var key = el.getAttribute("data-i18n");
            if (!(key in translations.es)) {
                translations.es[key] = el.innerHTML;
            }
        });
        document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
            var key = el.getAttribute("data-i18n-placeholder");
            if (!(key in translations.es)) {
                translations.es[key] = el.getAttribute("placeholder") || "";
            }
        });
        translations.es["meta.title"] = document.title;
        var metaDesc = document.querySelector('meta[name="description"]');
        translations.es["meta.description"] = metaDesc ? metaDesc.getAttribute("content") : "";
    }

    function applyLang(lang) {
        var dict = translations[lang] || translations.es;

        document.documentElement.setAttribute("lang", lang);

        document.title = dict["meta.title"] || document.title;
        var metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc && dict["meta.description"]) {
            metaDesc.setAttribute("content", dict["meta.description"]);
        }

        document.querySelectorAll("[data-i18n]").forEach(function (el) {
            var key = el.getAttribute("data-i18n");
            if (dict[key] !== undefined) {
                el.innerHTML = dict[key];
            }
        });

        document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
            var key = el.getAttribute("data-i18n-placeholder");
            if (dict[key] !== undefined) {
                el.setAttribute("placeholder", dict[key]);
            }
        });

        document.querySelectorAll("#langToggle [data-lang-opt]").forEach(function (el) {
            el.classList.toggle("active", el.getAttribute("data-lang-opt") === lang);
        });

        if (window.rodxReinitTyped) {
            window.rodxReinitTyped();
        }

        try {
            localStorage.setItem("rodx-lang", lang);
        } catch (e) {}
    }

    document.addEventListener("DOMContentLoaded", function () {
        captureSpanish();

        var stored = null;
        try {
            stored = localStorage.getItem("rodx-lang");
        } catch (e) {}

        var initialLang = stored === "en" ? "en" : "es";
        if (initialLang === "en") {
            applyLang("en");
        } else {
            // Already Spanish in the markup; just sync the toggle UI.
            document.querySelectorAll("#langToggle [data-lang-opt]").forEach(function (el) {
                el.classList.toggle("active", el.getAttribute("data-lang-opt") === "es");
            });
        }

        var toggle = document.getElementById("langToggle");
        if (toggle) {
            toggle.addEventListener("click", function () {
                var current = document.documentElement.getAttribute("lang") === "en" ? "en" : "es";
                applyLang(current === "es" ? "en" : "es");
            });
        }
    });
})();
