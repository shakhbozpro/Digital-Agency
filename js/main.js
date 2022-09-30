let burgerBtn = document.querySelector(".header-burger");
let navMenyu = document.querySelector(".nav");

burgerBtn.addEventListener("click" , () =>{
    burgerBtn.classList.toggle("shownav");
    navMenyu.classList.toggle("shownav");
})