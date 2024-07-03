document.addEventListener("DOMContentLoaded", function() {
    const navItems = document.querySelectorAll('.characters__nav__lista__item');
    const characterSections = document.querySelectorAll('.characters__selecionado, .characters__selecionado--is-hidden');

    navItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            characterSections.forEach(section => {
                section.classList.add('characters__selecionado--is-hidden');
                section.classList.remove('characters__selecionado');
            });
            characterSections[index].classList.remove('characters__selecionado--is-hidden');
            characterSections[index].classList.add('characters__selecionado');
        });
    });
});