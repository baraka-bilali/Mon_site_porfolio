var navLinks = document.getElementById("navLinks");

function showMenu(){
    navLinks.style.right = "0";
}

function hideMenu(){
    navLinks.style.right = "-200px";
}


const spinnerWrapperEl = document.querySelector('.spinner-wrapper');


window.addEventListener('load', () => {
    spinnerWrapperEl.style.opacity = '0';
})

setTimeout(() => {
    spinnerWrapperEl.style.display = 'none';
},1500)


