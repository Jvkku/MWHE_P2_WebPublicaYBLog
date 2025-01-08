document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menuButton");
    const menuOptions = document.getElementById("menuOptions");

    function toggleMenu() {
        menuOptions.classList.toggle("d-none");
        menuButton.classList.toggle("active"); // Cambiar color del botón activo
    }

    menuButton.addEventListener("click", function (event) {
        event.stopPropagation();
        toggleMenu();
    });

    document.addEventListener("click", function (event) {
        if (!menuOptions.classList.contains("d-none") && !menuButton.contains(event.target)) {
            menuOptions.classList.add("d-none");
            menuButton.classList.remove("active");
        }
    });

    window.addEventListener("scroll", function () {
        if (!menuOptions.classList.contains("d-none")) {
            menuOptions.classList.add("d-none");
            menuButton.classList.remove("active");
        }
    });
});

function toggleSearch() {
    const searchBar = document.getElementById("searchInput");
    if (searchBar.classList.contains("d-none")) {
        searchBar.classList.remove("d-none");
        searchBar.focus();
    } else {
        searchBar.classList.add("d-none");
    }
}

function searchFunction() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    if (query === 'noticias') {
        window.location.href = 'news.html';
    }
}

$(document).ready(function(){
    $('.marquee').marquee({
        duration: 8000,
        gap: 20,
        duplicated: true,
        delayBeforeStart: 0,
        startVisible: true,
    });
});

const items = document.querySelectorAll('.carousel-item'); // Selecciona todos los slides
const prevBtn = document.querySelector('.prev-btn'); // Botón anterior
const nextBtn = document.querySelector('.next-btn'); // Botón siguiente

let currentIndex = 0; // Índice del slide activo

// Función para mostrar un slide específico
function showSlide(index) {
  items.forEach((item, i) => {
    item.classList.remove('active'); // Oculta todos los slides
  });
  items[index].classList.add('active'); // Muestra el slide correspondiente
}

// Evento para ir al slide anterior
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length; // Índice circular
  showSlide(currentIndex);
});

// Evento para ir al siguiente slide
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % items.length; // Índice circular
  showSlide(currentIndex);
});

// Inicializa mostrando el primer slide
showSlide(currentIndex);

document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showSlide(index) {
        items.forEach((item, i) => {
            if (i === index) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % items.length; // Incrementa el índice y reinicia si llega al final
        showSlide(currentIndex);
    }

    // Llama a la función cada 3 segundos para avanzar al siguiente slide
    setInterval(nextSlide, 3000);

    // Inicializa mostrando el primer slide
    showSlide(currentIndex);
});

let lastScrollTop = 0; // Guarda la posición previa del scroll
const navbar = document.querySelector('.navbar'); // Selecciona la navbar

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Usuario está desplazándose hacia abajo
        navbar.style.top = '-100px'; // Oculta la navbar (ajusta este valor según el tamaño de tu navbar)
    } else {
        // Usuario está desplazándose hacia arriba
        navbar.style.top = '0'; // Muestra la navbar
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Evita valores negativos
});

document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector('.navbar');
    const hero = document.querySelector('.hero');

    if (navbar && hero) {
        const navbarHeight = navbar.offsetHeight; // Obtén la altura del navbar
        hero.style.marginTop = `${navbarHeight}px`; // Ajusta el margen superior del Hero dinámicamente
    }
});
