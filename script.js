const menubar = document.getElementById('menubar');
const menu = document.getElementById('menu');
menubar.addEventListener('click',()=>{
    if(menu.style.display == "none"){
        menu.style.display = "block";
        menubar.innerHTML = `<img src="xmarks.png">`
    }
    else{
        menu.style.display = "none"
        menubar.innerHTML = `<img src="bars.png">`
    }
})