const menuToggle = document.getElementById('menu-toggle');
const navele = document.getElementById('navele');

menuToggle.addEventListener('click', () => {
    navele.classList.toggle('active');
});
