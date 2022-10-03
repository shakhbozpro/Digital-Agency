let burgerBtn = document.querySelector(".header-burger");
let navMenyu = document.querySelector(".nav");

burgerBtn.addEventListener("click" , () =>{
    burgerBtn.classList.toggle("shownav");
    navMenyu.classList.toggle("shownav");
});

$('.slider-list').slick({
    centerMode: true,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true,
    infinite: true,
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                centerMode: true,
                slidesToShow: 2
            }
        },
        {
            breakpoint: 600,
            settings: {
                centerMode: true,
                slidesToShow: 1
            }
        }
    ]
});