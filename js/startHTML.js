"use strict"

let firstBanner = document.getElementById("first_banner"),
    secondBanner = document.getElementById("second_banner"),
    bestOfferDiv = document.getElementById("best_offer"),
    containerNewArivals = document.getElementById("new_arrivals"),
    firstNextUp = document.getElementById("first_next_up"),
    bannersDiv = document.getElementsByClassName("banner"),
    firstNextDown = document.getElementById("first_next_down"),
    secondNextUp = document.getElementById("second_next_up"),
    secondNextDown = document.getElementById("second_next_down"),
    spanOldPrice = document.getElementById("old_price"),
    h3PriceDiscount = document.getElementById("price_with_discount"),
    btnAddToCart1 = document.getElementById("add_to_bag1"),
    btnAddToCart2 = document.getElementById("add_to_bag2"),
    allArrivals = document.getElementById("all_arrivals"),
    firstBannerArray = [],
    secondBannerArray = [];
isDiscount = "true";


window.onresize = function () {
    changeSize()
}
window.onload = function () {
    changeSize();
}

drawBanners(containerNewArivals, fillterArr, 0, 4);


function changeSize() {
    if (screen.width > 375 && screen.width < 768) {
        containerNewArivals.innerHTML = ""
        drawBanners(containerNewArivals, fillterArr, 0, 2);
    }
    if (screen.width > 768 && screen.width < 1024) {
        containerNewArivals.innerHTML = ""
        drawBanners(containerNewArivals, fillterArr, 0, 3);
    }
    if (screen.width > 1024) {
        containerNewArivals.innerHTML = ""
        drawBanners(containerNewArivals, fillterArr, 0, 4);
    }
}


fillNewArray();
// DRAW first banners
drawBannerByArray(firstBanner, firstBannerArray, 0)
drawBannerByArray(secondBanner, secondBannerArray, 0)
// GET its prices
let priceFromFirstBanner = getPriceForIndex(firstBannerArray, 0),
    priceFromSecondBanner = getPriceForIndex(secondBannerArray, 0),
    nameFromFirstBanner = getNameForIndex(firstBannerArray, 0),
    nameFromSecondBanner = getNameForIndex(secondBannerArray, 0);
spanOldPrice.textContent = "£" + countOldPrice(priceFromFirstBanner, priceFromSecondBanner)
h3PriceDiscount.textContent = "£" + countPriceDiscount(priceFromFirstBanner, priceFromSecondBanner);


function countTotalPrice() {
    spanOldPrice.textContent = "£" + countOldPrice(priceFromFirstBanner, priceFromSecondBanner)
    h3PriceDiscount.textContent = "£" + countPriceDiscount(priceFromFirstBanner, priceFromSecondBanner);
}
// EVENT btn NEXT
firstNextUp.addEventListener("click", () => {
    nextFirstUp(firstBanner, firstBannerArray);
    countTotalPrice()
})

firstNextDown.addEventListener("click", () => {
    nextFirstDown(firstBanner, firstBannerArray);
    countTotalPrice()
})
secondNextUp.addEventListener("click", () => {
    nextSecondUp(secondBanner, secondBannerArray);
    countTotalPrice()
})
secondNextDown.addEventListener("click", () => {
    nextSecondDown(secondBanner, secondBannerArray);
    countTotalPrice()
})
btnAddToCart1.onclick = function () {
    let count = 1;
    for (const e of catalog) {
        if (e.title == nameFromFirstBanner) {
            localStorage.setItem(e.title + ", " + e.colors[0] + "," + e.sizes[0], e.discountedPrice + "," + count + "," + true)
        } else if (e.title == nameFromSecondBanner) {
            localStorage.setItem(e.title + ", " + e.colors[0] + "," + e.sizes[0], e.discountedPrice + "," + count + "," + true)
        }
    }
    displayBagVariable();
}
btnAddToCart2.onclick = function () {
    let count = 1;
    for (const e of catalog) {
        if (e.title == nameFromFirstBanner) {
            localStorage.setItem(e.title + ", " + e.colors[0] + "," + e.sizes[0], e.discountedPrice + "," + count + "," + true)
        } else if (e.title == nameFromSecondBanner) {
            localStorage.setItem(e.title + ", " + e.colors[0] + "," + e.sizes[0], e.discountedPrice + "," + count + "," + true)
        }
    }
    displayBagVariable();
}
