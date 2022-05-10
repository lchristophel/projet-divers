// ajouter une classe (hovered) sur les éléments de liste survolés de la side nav

let liste = document.querySelectorAll('.navigation li');
function activeLink() {
    liste.forEach((item) =>
    item.classList.remove('hovered'));
    this.classList.add('hovered');
}
liste.forEach((item) =>
item.addEventListener('mouseover',activeLink));

// toggle menu

let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
    navigation.classList.toggle("active");
    main.classList.toggle("active");
};
