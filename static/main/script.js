const traitsDiv = document.querySelector(".traitsWrapper")
const scrollByPx = 160

function scrollNext() {
    traitsDiv.scrollBy(scrollByPx, 0);
}

function scrollBack() {
    traitsDiv.scrollBy(-scrollByPx, 0);
}

// close other details when one is open
const details = document.querySelectorAll('details');
details.forEach(targetDetail => {
    //on click
    targetDetail.addEventListener('click', () => {
        //for each detail on screen
        details.forEach((detail) => {
            //if it's not the current,
            if (detail != targetDetail) {
                //close
                detail.removeAttribute('open')
            }
        })
    })
})