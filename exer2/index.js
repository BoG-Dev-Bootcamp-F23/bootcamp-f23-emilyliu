let imgInd = 0;
updateCarousel(imgInd);

function changeImg(direction) {
    console.log("call")
    imgInd += direction
    updateCarousel(imgInd)
}

function updateCarousel(ind) {
    let i;
    let images = document.getElementsByClassName("me-img")
    if (ind < 0) {
        imgInd = images.length - 1
    } else if (ind >= images.length) {
        imgInd = 0
    }

    for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }

    images[imgInd].style.display = "block"
}