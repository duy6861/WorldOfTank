
const modal = document.querySelector('.modal');
const buyBtns = document.querySelectorAll('.js-buy-ticket');
const modalClose = document.querySelector('.modal-close');
const modalcontainer = document.querySelector('.modal-container-js')
function ShowBuyTicket() {
    modal.classList.add('open')
    // item.classList.add('open')
}
function hideBuyTicket() {
    modal.classList.remove('open')
}
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', ShowBuyTicket)
}
modalClose.addEventListener('click', hideBuyTicket);
modal.addEventListener('click', hideBuyTicket)

modalcontainer.addEventListener('click', function (e) {
    e.stopPropagation()
})

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slider");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}