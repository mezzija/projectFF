const nav=document.getElementById('nav');
const menu=document.getElementById('nav_menu');
console.log(nav);
menu.addEventListener('click',(event)=>{
    event.preventDefault();
    nav.classList.toggle('nav_active');
})