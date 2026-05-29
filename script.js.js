// Función para abrir y cerrar el formulario (modal)
function toggleModal() {
    const modal = document.getElementById('quote-modal');
    const displayStyle = window.getComputedStyle(modal).display;
    
    modal.style.display = (displayStyle === 'none') ? 'flex' : 'none';
}

// Función para que los elementos aparezcan al bajar el scroll
function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 100;
        
        if (elementTop < windowHeight - elementVisible) {
            el.classList.add("active");
        }
    });
}

// Escuchar cuando el usuario hace scroll
window.addEventListener("scroll", reveal);

// Ejecutar una vez al cargar para mostrar lo que ya está en pantalla
window.addEventListener("load", reveal);