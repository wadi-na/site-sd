
// Botão "Voltar ao Topo"
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerText = 'Voltar ao Topo';
scrollToTopBtn.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopBtn);

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Mostrar o botão "Voltar ao Topo" ao rolar
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

