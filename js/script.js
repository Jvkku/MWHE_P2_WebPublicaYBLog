document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menuButton");
    const menuOptions = document.getElementById("menuOptions");

    function toggleMenu() {
        menuOptions.classList.toggle("d-none");
        menuButton.classList.toggle("active");
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

$(document).ready(function () {
    $('.marquee').marquee({
        duration: 8000,
        gap: 20,
        duplicated: true,
        delayBeforeStart: 0,
        startVisible: true,
    });
});

const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;

function showSlide(index) {
    items.forEach((item, i) => {
        item.classList.remove('active');
    });
    items[index].classList.add('active');
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showSlide(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    showSlide(currentIndex);
});

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
        currentIndex = (currentIndex + 1) % items.length;
        showSlide(currentIndex);
    }

    setInterval(nextSlide, 3000);
    showSlide(currentIndex);
});

let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        navbar.style.top = '-100px';
    } else {
        navbar.style.top = '0';
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector('.navbar');
    const hero = document.querySelector('.hero');
    let lastScrollTop = 0;

    if (navbar && hero) {
        const navbarHeight = navbar.offsetHeight;
        hero.style.marginTop = `${navbarHeight + 20}px`;
    }

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            navbar.style.top = '-100px';
        } else {
            navbar.style.top = '10px';
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
});