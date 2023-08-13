function myFunction() {

    let vers = document.getElementById("box");
    vers.style.backgroundColor = "#916DB3";
    vers.style.width = "100%";
    vers.innerHTML = "this is some text";

    let vart = document.getElementById("click");
    vart.style.backgroundColor = "#000000";
}

function changeBack() {
    let xyz = document.getElementById('box');
    xyz.style.backgroundColor = "#E48586";
    xyz.style.width = "200px";

    let abc = document.getElementById('click');
    abc.style.color = "#ffffff";
    abc.style.backgroundColor = "#68cdc9";
}

let timesClicked = 0;

function myfunc() {
    timesClicked++;
    if (timesClicked > 1) {
        changeBack();
        timesClicked = 0;
    }
    else {
        myFunction();
    }
}

function outputText() {
    textvalue = document.getElementById("text-input").value;
    let heading = document.getElementById("qwer");
    heading.innerHTML = textvalue;
}
function funcslide() {
    let toslide = document.getElementById("slider").value;
    let sliding = document.getElementById("empty");
    sliding.style.width = toslide + "px";
}

function fontchoice1() {
    let font1 = document.getElementById("font1").value;
    document.getElementById("paragraph").style.fontFamily = font1;
}

function fontchoice2() {
    let font2 = document.getElementById("font2").value;
    document.getElementById("paragraph").style.fontFamily = font2;
}

function fontchoice3() {
    let font3 = document.getElementById("font3").value;
    document.getElementById("paragraph").style.fontFamily = font3;
}


function choosePic() {
    let choice = document.getElementById("imageSelect").value;
    let imageChoice = document.getElementById("img");
    imageChoice.src = choice;

}
/* 
Type input
Radio
Range
Dropdown
*/