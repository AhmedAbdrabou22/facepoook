$(function () {
    $("#sponsored").niceScroll({ cursorcolor: "#828282" });
});
$(function () {
    $("#body").niceScroll({ cursorcolor: "#fff" });
});


$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 80,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })
});


var profile = document.getElementById("profile");
var seeMore = document.getElementById("seeMore");
var shortcut = document.getElementById("shortcut");
var span = document.getElementById("span");
var span2 = document.getElementById("span2");
var icon = document.getElementById("icon");
var icon2 = document.getElementById("icon2");
var link = document.getElementById("link");
var pages = document.getElementById("pages");

pages.addEventListener("mouseover", () => {
    pages.style.overflow = "auto";
})
pages.addEventListener("mouseout", () => {
    pages.style.overflow = "hidden";
})



profile.addEventListener("click", () => {
    seeMore.classList.toggle("show");
    pages.style.overflow = "auto";
})
shortcut.addEventListener("mouseover", () => {
    link.classList.add("show2");
})
shortcut.addEventListener("mouseout", () => {
    link.classList.remove("show2");
})

span.addEventListener("mouseover", () => {
    icon.classList.add("show3");
})
span.addEventListener("mouseout", () => {
    icon.classList.remove("show3");
})

span2.addEventListener("mouseover", () => {
    icon2.classList.add("show3");
})
span2.addEventListener("mouseout", () => {
    icon2.classList.remove("show3");
})

let openBtn = document.getElementById("text");
let closeBtn = document.getElementById("close");
let overlay = document.querySelector(".overLay");
openBtn.addEventListener("click", () => {
    overlay.classList.add("open-lay");
});
closeBtn.addEventListener("click", () => {
    overlay.classList.remove("open-lay");
});


var like = document.getElementById("like");
var like2 = document.getElementById("like2");
var like3 = document.getElementById("like3");
like.addEventListener("click",()=>{
    like.classList.toggle("color");
})
like2.addEventListener("click",()=>{
    like2.classList.toggle("color");
})
like3.addEventListener("click",()=>{
    like3.classList.toggle("color");
})

var ccc = document.getElementById("ccc");
var storys = document.getElementById("storys");
storys.addEventListener("mouseover",()=>{
    ccc.classList.add("blo");
    AOS.init(); 
})


var icon = document.getElementById("icon");
var icon2 = document.getElementById("icon2");
var drop = document.getElementById("drop");
var drop2 = document.getElementById("drop2");
icon.addEventListener("click",()=>{
    drop.classList.toggle("nav")
})
icon2.addEventListener("click",()=>{
    drop2.classList.toggle("nav")
})


var input = document.getElementById("text2");
var btn = document.getElementById("btn");
btn.addEventListener("click",()=>{
    
})
