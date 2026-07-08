// ===============================
// RJ Overseas Limited
// Premium Script v2.0
// ===============================

// Sticky Header Shadow
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 80) {
        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.35)";
    } else {
        header.style.boxShadow = "none";
    }
});

// Smooth Animation
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll("section,.card").forEach((el)=>{
    el.classList.add("hidden");
    observer.observe(el);
});

// Current Year
const year=document.getElementById("year");
if(year){
year.innerHTML=new Date().getFullYear();
}

// Contact Form
const form=document.getElementById("contactForm");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

alert("Thank you! We received your request.");

form.reset();

});

}

// Scroll To Top

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.right="20px";
topBtn.style.bottom="90px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.borderRadius="50%";
topBtn.style.background="#d4af37";
topBtn.style.border="none";
topBtn.style.fontSize="22px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";

window.onscroll=function(){

if(document.documentElement.scrollTop>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

};

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};
