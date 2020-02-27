"use strict"

let firstBanner = document.getElementById("first_banner"),
    secondBanner = document.getElementById("second_banner"),
    bestOfferDiv = document.getElementById("best_offer"),
    btnNext = document.getElementById("btn_next"),
    firstBannerArray = [],
    secondBannerArray = [];
fillNewArray();

let count = 0,
    priceFromFirstBanner = getPriceForIndex(firstBannerArray, count),
    priceFromSecondBanner = getPriceForIndex(secondBannerArray, count);


drawBannerByArray(firstBanner, firstBannerArray, count)
drawBannerByArray(secondBanner, secondBannerArray, count)

// let price = document.getElementsByClassName("best_offer_price")

// console.log(price)

btnNext.onclick = function () {
    firstBanner.innerHTML = "";
    if (count == firstBannerArray.length - 1) {
        count = -1;
    }
    count++;
    drawBannerByArray(firstBanner, firstBannerArray, count)
    priceFromFirstBanner = getPriceForIndex(firstBannerArray, count);
}

