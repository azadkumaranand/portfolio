const navbar = document.querySelector('.navbar'),
navbarspan = document.querySelector('.logo strong span')

window.onscroll =  ()  =>{
    // called when the window is scrolled.
    if (window.scrollY >= 100) {
        navbar.style.backgroundColor = "crimson"
        navbarspan.style.color = "white";
    }
    else if(window.scrollY==0) {
        navbar.style.backgroundColor = "transparent"
        navbarspan.style.color = "crimson";
    }
}

const menubar = document.getElementById('menubar');
const menu = document.getElementById('menu');
menubar.addEventListener('click', () => {
    if (menu.style.display == "none") {
        menu.style.display = "block";
        menubar.innerHTML = `<img src="xmarks.png">`
    }
    else {
        menu.style.display = "none"
        menubar.innerHTML = `<img src="bars.png">`
    }
})

var typed = new Typed(".typing", {
    strings: ["YouTuber", "Desiner", "Freelacer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
var typed = new Typed(".typing1", {
    strings: ["YouTuber", "Desiner", "Freelacer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
