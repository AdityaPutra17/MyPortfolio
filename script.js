// nav
function setActive(id) {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => link.classList.remove('active'));
  
  const selectedNavLink = document.getElementById(id);
  selectedNavLink.classList.add('active');
}

function toggleMenu() {
  const nav = document.querySelector('.nav');
  nav.classList.toggle('menu-open');
}


function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("myTopnav").classList.add("navbar-scrolled");
    } else {
        document.getElementById("myTopnav").classList.remove("navbar-scrolled");
    }
}

// nav


// light and dark mode
function toggleDarkMode() {
    const body = document.body;
    const modeIcon = document.getElementById('mode-icon');
    
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        modeIcon.classList.remove('fa-moon');
        modeIcon.classList.add('fa-sun');
    } else {
        modeIcon.classList.remove('fa-sun');
        modeIcon.classList.add('fa-moon');
    }
}
// light and dark mode

// Ganti Text
const texts = ["Web Developer", "UI/UX Design", "Mobile Developer"];
let index = 0; 

function changeText() {
    const dynamicText = document.getElementById("dynamic-text");
    dynamicText.classList.remove("typing-animation"); 
    dynamicText.textContent = texts[index];
    setTimeout(() => {
        dynamicText.classList.add("typing-animation");
        index = (index + 1) % texts.length;
    }, 100);
}

setInterval(changeText, 4000);
// Ganti Text

// Skill(tech & tools)
const techMenu = document.getElementById('tech-menu');
const toolsMenu = document.getElementById('tools-menu');
const techContent = document.getElementById('tech');
const toolsContent = document.getElementById('tools');

techMenu.addEventListener('click', function() {
    document.querySelectorAll('.menu-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.content').forEach(content => content.classList.remove('active'));
    
    techMenu.classList.add('active');
    techContent.classList.add('active');
});

toolsMenu.addEventListener('click', function() {
    document.querySelectorAll('.menu-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.content').forEach(content => content.classList.remove('active'));
    
    toolsMenu.classList.add('active');
    toolsContent.classList.add('active');
});
// Skill(tech & tools)

// Slider
const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const cardWidth = document.querySelector('.card').offsetWidth;
let currentIndex = 0;

function slide(direction) {
  if (direction === 'next') {
    currentIndex++;
  } else {
    currentIndex--;
  }
  const newPosition = -currentIndex * cardWidth;
  slider.style.transform = `translateX(${newPosition}px)`;
}

nextBtn.addEventListener('click', () => {
  if (currentIndex < slider.children.length + 7) {
    slide('next');
  }
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    slide('prev');
  }
});
// Slider