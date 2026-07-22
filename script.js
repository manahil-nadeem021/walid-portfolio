// =========================
// Mobile Navigation
// =========================

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
}

// =========================
// Smooth Scroll
// =========================

document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener('click', function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){

            target.scrollIntoView({

                behavior:'smooth'

            });

        }

        if(navMenu){
            navMenu.classList.remove("show");
        }

    });

});

// =========================
// Active Navigation
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", ()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

});

// =========================
// Header Shadow
// =========================

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        header.classList.add("sticky");

    }

    else{

        header.classList.remove("sticky");

    }

});

// =========================
// Reveal Animation
// =========================

const reveals = document.querySelectorAll("section");

function revealSections(){

    const trigger = window.innerHeight * 0.85;

    reveals.forEach(section=>{

        const top = section.getBoundingClientRect().top;

        if(top < trigger){

            section.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

// =========================
// Scroll To Top Button
// =========================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        topBtn.classList.add("visible");

    }

    else{

        topBtn.classList.remove("visible");

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// =========================
// Hero Text Fade
// =========================

window.addEventListener("load",()=>{

    const hero = document.querySelector(".hero-content");

    if(hero){

        hero.classList.add("loaded");

    }

});

// =========================
// Current Year in Footer
// =========================

const footer = document.querySelector("footer p");

if(footer){

    footer.innerHTML = `© ${new Date().getFullYear()} Walid Irfan | Electrical Power Systems Engineer`;

}