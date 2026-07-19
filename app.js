// ===========================
// DREAMY JEET OFFICIAL WEBSITE
// APP.JS
// ===========================



// ===========================
// LOADER
// ===========================

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

if(loader){

setTimeout(()=>{

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},500);

},1000);

}

});





// ===========================
// MOBILE MENU
// ===========================


const menuBtn=document.querySelector(".menu-toggle");
const navLinks=document.querySelector(".nav-links");


if(menuBtn && navLinks){


menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("show");

});



document.querySelectorAll(".nav-links a")
.forEach(link=>{

link.addEventListener("click",()=>{

navLinks.classList.remove("show");

});

});


}



// Close menu outside click

document.addEventListener("click",(e)=>{

if(
navLinks &&
menuBtn &&
!navLinks.contains(e.target) &&
!menuBtn.contains(e.target)
){

navLinks.classList.remove("show");

}

});






// ===========================
// NAVBAR SCROLL EFFECT
// ===========================


const navbar=document.querySelector(".navbar");


window.addEventListener("scroll",()=>{


if(navbar){


if(window.scrollY>60){

navbar.classList.add("scrolled");

}

else{

navbar.classList.remove("scrolled");

}


}


});







// ===========================
// SCROLL REVEAL ANIMATION
// ===========================


const sections=document.querySelectorAll("section");


const observer=new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("active");


}


});


},{
threshold:0.15

});



sections.forEach(section=>{

observer.observe(section);

});






// ===========================
// IMAGE LAZY LOAD
// ===========================


document.querySelectorAll("img")
.forEach(img=>{

img.loading="lazy";

});







// ===========================
// CONTACT FORM
// WHATSAPP INQUIRY
// ===========================


const contactForm=document.getElementById("contactForm");


if(contactForm){


contactForm.addEventListener("submit",(e)=>{


e.preventDefault();



const name=
document.getElementById("name").value;


const email=
document.getElementById("email").value;


const subject=
document.getElementById("subject").value;


const message=
document.getElementById("message").value;



const whatsappText=

`Hello Dreamy Jeet,

Name: ${name}

Email: ${email}

Subject: ${subject}

Message:
${message}`;



const encodedMessage=
encodeURIComponent(whatsappText);



const status=
document.getElementById("formStatus");



if(status){

status.innerHTML=
"Opening WhatsApp...";

}



window.open(

`https://wa.me/918249655112?text=${encodedMessage}`,

"_blank"

);



setTimeout(()=>{

contactForm.reset();


if(status){

status.innerHTML=
"Message sent successfully!";

}


},1000);



});


}






// ===========================
// CURRENT YEAR FOOTER
// ===========================


const year=document.querySelector("footer p");


if(year){

year.innerHTML=
`© ${new Date().getFullYear()} Dreamy Jeet | OdishaMuzik Records`;

}