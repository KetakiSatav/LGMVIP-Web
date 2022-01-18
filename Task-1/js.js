window.onscroll=function()
{
    scrollFunction()
};
function scrollFunction()
{
    document.getElementById("navbar").style.background="#fff";
}

const navToggle=document.querySelector(".nav-toggle");
const navLinks=document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", ()=>{
    document.body.classList.toggle("nav-open");
});
navLinks.forEach((link)=>{
    link.addEventListener("click", ()=>{
        document.body.classList.remove("nav-open");
    });
});

let ImageBtn=document.querySelectorAll('.img-btn')

ImageBtn.forEach(btn => {
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src=btn.getAttribute('data-src');
        document.querySelector('#image-slider').src=src;
    })
})