"use strict"
let bestOffer = window.bestOffer,
    catalog = window.catalog,
    count = 0;

function createDiv(conteiner, img, name, price, oldPrice, isNew, id) {
    let divBanner = document.createElement("div"),
        imgNew = document.createElement("img"),
        aBanner = document.createElement("a"),
        pViewItem = document.createElement("p"),
        imgBanner = document.createElement("img"),
        h3Name = document.createElement("h3"),
        pPrice = document.createElement("p"),
        oldPriceSpan = document.createElement("span");

    divBanner.className = "banner";
    pViewItem.className = "view_item";

    pViewItem.textContent = "View Item";
    pPrice.className = "price " + id;

    aBanner.href = "#";
    imgBanner.width = "240"
    imgBanner.height = "340"

    imgBanner.src = img;
    imgBanner.alt = "cute girl"
    h3Name.textContent = name;
    pPrice.textContent = "£" + price;
    //Add NEW img
    if (isNew == true) {
        imgNew.src = "./img/new.png"
        imgNew.className = "imgNew";
        divBanner.appendChild(imgNew)
    }

    conteiner.appendChild(aBanner);
    aBanner.appendChild(divBanner);
    divBanner.appendChild(pViewItem);
    divBanner.appendChild(imgBanner);
    divBanner.appendChild(h3Name);
    //Add OLDPRICE
    if (price != oldPrice) {
        oldPriceSpan.className = "old_price";
        oldPriceSpan.textContent = "£" + oldPrice + ".00";
        divBanner.appendChild(oldPriceSpan);
    }
    divBanner.appendChild(pPrice);
}
function drawBanners(conteiner, from, to) {
    for (var i = from; i < to; i++) {
        let img = catalog[i].thumbnail,
            name = catalog[i].title,
            price = catalog[i].discountedPrice,
            oldPrice = catalog[i].price,
            isNew = catalog[i].hasNew;


        createDiv(conteiner, img, name, price, oldPrice, isNew);
    }
}
function fillAllSelect(select1, select3, select5) {
    let fashion = new Set()
    let color = new Set()

    let size = new Set()                    //To do uniq array elements
    for (const e of catalog) {
        fashion.add(e.fashion)
        for (let i = 0; i < e.colors.length; i++) {
            color.add(e.colors[i])
        }
        for (let i = 0; i < e.sizes.length; i++) {
            size.add(e.sizes[i])
        }
    }
    // Create optiom for select
    for (const e of fashion) {
        let li = document.createElement("li"),
            a = document.createElement("a");
        a.innerText = e;
        a.name = e;
        li.appendChild(a);
        select1.appendChild(li);
    }
    for (const e of color) {
        let li = document.createElement("li"),
            a = document.createElement("a");
        a.innerText = e;
        a.name = e;
        li.appendChild(a);
        select3.appendChild(li);
    }
    for (const e of size) {
        let li = document.createElement("li"),
            a = document.createElement("a");
        a.innerText = e;
        a.name = e;
        li.appendChild(a);
        select5.appendChild(li);
    }
}
function drawBannerByArray(conteiner, array, pos) {
    let img = array[pos].thumbnail,
        name = array[pos].title,
        price = array[pos].discountedPrice,
        oldPrice = array[pos].price,
        isNew = array[pos].hasNew;
    createDiv(conteiner, img, name, price, oldPrice, isNew, "best_offer_price");
}
function fillNewArray() {
    for (const e of catalog) {
        for (let i = 0; i < bestOffer.left.length; i++) {
            if (e.id == bestOffer.left[i]) {
                firstBannerArray.push(e);
            }
        }
        for (let i = 0; i < bestOffer.right.length; i++) {
            if (e.id == bestOffer.right[i]) {
                secondBannerArray.push(e);
            }
        }
    }
}
function calcPriceWithDiscount(queryselector) {
    queryselector.forEach(e => {
        console.log(e.textContent)
    })
}
function getPriceForIndex(arr, pos) {
    return arr[pos].discountedPrice;
}
function nextUp(baner, array) {
    baner.innerHTML = "";
    if (count == array.length - 1) {
        count = -1;
    }
    count++;
    drawBannerByArray(baner, array, count)
    priceFromFirstBanner = getPriceForIndex(array, count);
}
function nextDown(baner, array) {
    baner.innerHTML = "";
    if (count == 0) {
        count = array.length;
    }
    count--;
    drawBannerByArray(baner, array, count)
    priceFromFirstBanner = getPriceForIndex(array, count);
}
function countOldPrice(string1, string2) {
    return +string1 + string2;
}
function countPriceDiscount(string1, string2) {
    return ((string1 + string2) - ((string1 + string2) / 100 * bestOffer.discount)).toFixed(1);
}