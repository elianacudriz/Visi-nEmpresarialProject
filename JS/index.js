document.addEventListener('DOMContentLoaded', () => {

    const titulo = document.querySelector('.titulo');
    titulo.addEventListener('click', () => {
        alert('Bienvenido a Visión Empresarial');
    });


    const header = document.querySelector('header');
    header.addEventListener('mouseenter', () => {
        header.style.backgroundColor = '#027373';
    });

    header.addEventListener('mouseleave', () => {
        header.style.backgroundColor = '#038C7F';
    });
});
