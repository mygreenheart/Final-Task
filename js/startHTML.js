"use strict"

let firstBanner = document.getElementById("first_banner"),
    secondBanner = document.getElementById("second_banner"),
    bestOfferDiv = document.getElementById("best_offer"),
    conteinerNewArivals = document.getElementById("banner_conteiner"),
    firstNextUp = document.getElementById("first_next_up"),
    firstNextDown = document.getElementById("first_next_down"),
    secondNextUp = document.getElementById("second_next_up"),
    secondNextDown = document.getElementById("second_next_down"),
    spanOldPrice = document.getElementById("old_price"),
    h3PriceDiscount = document.getElementById("price_with_discount"),
    btnAddToCart = document.getElementById("add_to_bag"),
    firstBannerArray = [],
    secondBannerArray = [];

fillNewArray();
// DRAW first banners
drawBannerByArray(firstBanner, firstBannerArray, 0)
drawBannerByArray(secondBanner, secondBannerArray, 0)
// GET its prices
let priceFromFirstBanner = getPriceForIndex(firstBannerArray, 0),
    priceFromSecondBanner = getPriceForIndex(secondBannerArray, 0);
spanOldPrice.textContent = "£" + countOldPrice(priceFromFirstBanner, priceFromSecondBanner)
h3PriceDiscount.textContent = "£" + countPriceDiscount(priceFromFirstBanner, priceFromSecondBanner);
// EVENT btn NEXT
firstNextUp.addEventListener("click", () => {
    nextUp(firstBanner, firstBannerArray);
    spanOldPrice.textContent = "£" + countOldPrice(priceFromFirstBanner, priceFromSecondBanner)
    h3PriceDiscount.textContent = "£" + countPriceDiscount(priceFromFirstBanner, priceFromSecondBanner);
})

firstNextDown.addEventListener("click", () => {
    nextDown(firstBanner, firstBannerArray);
    spanOldPrice.textContent = "£" + countOldPrice(priceFromFirstBanner, priceFromSecondBanner)
    h3PriceDiscount.textContent = "£" + countPriceDiscount(priceFromFirstBanner, priceFromSecondBanner);
})
secondNextUp.addEventListener("click", () => {
    nextUp(secondBanner, secondBannerArray);
    spanOldPrice.textContent = "£" + countOldPrice(priceFromFirstBanner, priceFromSecondBanner)
    h3PriceDiscount.textContent = "£" + countPriceDiscount(priceFromFirstBanner, priceFromSecondBanner);
})

secondNextDown.addEventListener("click", () => {
    nextDown(secondBanner, secondBannerArray);
    spanOldPrice.textContent = "£" + countOldPrice(priceFromFirstBanner, priceFromSecondBanner)
    h3PriceDiscount.textContent = "£" + countPriceDiscount(priceFromFirstBanner, priceFromSecondBanner);
})

drawBanners(conteinerNewArivals, 0, 4)