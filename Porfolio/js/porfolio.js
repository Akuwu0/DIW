
    document.querySelector('.container').addEventListener('wheel', function(event) {
        const scrollAmount = event.deltaY;
        if (scrollAmount > 0) {
            this.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
        } else {
            this.scrollBy({ top: -window.innerHeight, behavior: 'smooth' });
        }
        event.preventDefault();
    });
