document.addEventListener("DOMContentLoaded", function () {
    // Menu mobile
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    menuToggle.addEventListener("click", function () {
        this.classList.toggle("active");
        menu.classList.toggle("active");
        this.setAttribute("aria-expanded", this.classList.contains("active"));
    });

    // Fechar menu ao clicar em um link
    const menuLinks = document.querySelectorAll(".menu a");
    menuLinks.forEach((link) => {
        link.addEventListener("click", function () {
            menuToggle.classList.remove("active");
            menu.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });

    // Header scroll
    const header = document.querySelector(".header");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 100) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Back to top
    const backToTop = document.querySelector(".back-to-top");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTop.classList.add("active");
        } else {
            backToTop.classList.remove("active");
        }
    });

    backToTop.addEventListener("click", function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });

    // Atualizar ano no footer
    document.getElementById("ano-atual").textContent = new Date().getFullYear();

    // Animação ao rolar
    const animateOnScroll = function () {
        const elements = document.querySelectorAll(
            ".habilidade-card, .projeto-card, .contato-info, .form-contato"
        );

        elements.forEach((element) => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (elementPosition < screenPosition) {
                element.style.opacity = "1";
                element.style.transform = "translateY(0)";
            }
        });
    };

    // Definir propriedades iniciais para animação
    const animatedElements = document.querySelectorAll(
        ".habilidade-card, .projeto-card, .contato-info, .form-contato"
    );
    animatedElements.forEach((element) => {
        element.style.opacity = "0";
        element.style.transform = "translateY(30px)";
        element.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    });

    window.addEventListener("scroll", animateOnScroll);
    animateOnScroll(); // Executar uma vez ao carregar
});