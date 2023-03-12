const traitsDiv = document.querySelector(".traitsWrapper")
const scrollByPx = 160

function scrollNext() {
    traitsDiv.scrollBy(scrollByPx, 0);
}

function scrollBack() {
    traitsDiv.scrollBy(-scrollByPx, 0);
}