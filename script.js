document.addEventListener('DOMContentLoaded', function () {

    new Splide('#main-slider', {
        type       : 'loop',
        perPage    : 1,
        autoplay   : true,
        interval   : 4000,
        arrows     : false,
        pagination : true,
    }).mount();

    const menuLinks = document.querySelectorAll('.has-submenu > a, .has-submenu-right > a');

    menuLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            if (window.innerWidth <= 600) {
                e.preventDefault();
                e.stopPropagation();
                
                const currentSubmenu = this.nextElementSibling;
                
                if (currentSubmenu) {
                    currentSubmenu.classList.toggle('is-active');
                }
            }
        });
    });


    document.addEventListener('click', function () {
        if (window.innerWidth <= 600) {
            document.querySelectorAll('.submenu.is-active').forEach(sub => {
                sub.classList.remove('is-active');
            });
        }
    });
});