var links = document.querySelectorAll('.link');

links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(link => {
            link.classList.remove('active');
        })
        link.classList.add('active');
    });
});
