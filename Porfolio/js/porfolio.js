
    document.querySelector('.container').addEventListener('wheel', function(event) {
        const scrollAmount = event.deltaY;
        if (scrollAmount > 0) {
            this.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
        } else {
            this.scrollBy({ top: -window.innerHeight, behavior: 'smooth' });
        }
        event.preventDefault();
    });

    document.addEventListener('DOMContentLoaded', () => {
        let sections = document.querySelectorAll('.info'); 
        let a = document.querySelectorAll('.profile__div--a');
        let t='';
        // Función callback para el IntersectionObserver
        const verSection = (visual) => {
            visual.forEach(view => {
                if (view.isIntersecting) {
                    // console.log(`Sección visible: ${view.target.classList[0]}`);
                    t=view.target.classList[0];
                } 
                a.forEach(enlace => {
                    if (enlace.classList.contains(t)) {
                        enlace.parentNode.style.backgroundColor = "rgba(127, 255, 77, 0.6)";
                    } else {
                        enlace.parentNode.style.backgroundColor = ""; // Restablecer el color de los demás enlaces
                    }
                });
            });
        };
    
        // Crear un nuevo IntersectionObserver
        const observer = new IntersectionObserver(verSection);
    
        // Observar cada sección
        sections.forEach(section => observer.observe(section));
    });
    