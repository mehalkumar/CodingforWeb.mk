const menu1 = document.getElementById("menu1");
const btn1 = document.getElementById("btn1");

function toggleMenu1() {
    if (menu1.className == "closed") {
        menu1.className = "opened";
    } else {
        menu1.className = "closed";
    }
}

const menu2 = document.getElementById("menu2");
const btn2 = document.getElementById("btn2");
const body = document.querySelector("body");

function toggleMenu2() {
    if (menu2.className == "closed") {
        menu2.className = "opened";
      } 
    else {
        menu2.className = "closed";
    }
}

btn2.addEventListener("click", toggleMenu2);
body.addEventListener("load", toggleMenu2());




// Close menu
const closeMenus = document.getElementsByClassName("closemenu");

var n;    
for (n = 0; n < closeMenus.length; n++) { 

    closeMenus[n].addEventListener("click", function() {
        this.parentElement.className = "closed";  
    });
}

var i;
for (i = 0; i < closeMenus.length; i++) { 

    closeMenus[i].addEventListener("click", function() {
        this.parentElement.className = "closed";
    });
}



