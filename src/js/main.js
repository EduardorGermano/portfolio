document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('nav a');

    menuItems.forEach(item => {
        item.addEventListener('click', function (event) {
            // Remove o comportamento padrão do link
            event.preventDefault();

            // Obtém o ID da seção alvo (remove o '#' do href)
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            // Rolagem suave até a seção
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            // Novo código para menu hamburguer
            const menuToggle = document.getElementById('menu-toggle');
            const menu = document.getElementById('menu');

            menuToggle.addEventListener('click', () => {
                menu.classList.toggle('active');
            });
            // Fecha o menu ao clicar em um item (opcional)
            const menuItems = document.querySelectorAll('#menu a');
            menuItems.forEach(item => {
                item.addEventListener('click', () => {
                    menu.classList.remove('active');
                });
            });
        });
    });
});