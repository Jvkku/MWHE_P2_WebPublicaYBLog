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

  