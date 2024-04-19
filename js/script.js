let menu = document.querySelector('#menuBar');
let navbar = document.querySelector('.navmenu');

menu.onclick = () =>{
    navbar.classList.toggle('open');
}

// sticky scroll menu bar

window.onscroll = function() {myfunction()};

var navBar = document.getElementById('navbar');
var sticky = navBar.offsetTop;

function myfunction(){
    if (window.pageYoffset >= sticky){
        navBar.classList.add('sticky');
    }
    else{
        navBar.classList.remove("sticky");
    }
}