"use strict"
let bestOffer = window.bestOffer,
    catalog = window.catalog,
    count = 0,
    linkName,
    bagCount = document.getElementById("bag-count");




// Sort by dateAdd
catalog.sort((a, b) => {
    if (a.dateAdded > b.dateAdded)
        return -1
    if (a.dateAdded < b.dateAdded)
        return 1
    return 0
})
bagCount.textContent = "(" + localStorage.length + ")";

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

    aBanner.href = "page_details.html";
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
function createItem(conteiner, img, preview, name, description, price, size, color) {
    let divItemImages = document.createElement("div"),
        divItemInfo = document.createElement("div"),
        divSizeColor1 = document.createElement("div"),
        divSizeColor2 = document.createElement("div"),
        divImg = document.createElement("div"),
        mainImg = document.createElement("img"),
        h3Name = document.createElement("h3"),
        pDesriprion = document.createElement("h3"),
        pPrice = document.createElement("p"),
        spanSize = document.createElement("span"),
        spanColor = document.createElement("span"),
        pError = document.createElement("p"),
        btnAddToCart = document.createElement("input");


    divItemImages.className = "item__image";
    divItemInfo.className = "item__info";
    divSizeColor1.className = "size_color"
    divSizeColor2.className = "size_color"
    pDesriprion.className = "description";
    pPrice.className = "price";
    pError.id = "error";

    btnAddToCart.type = "button";
    btnAddToCart.value = "Add to bag";
    btnAddToCart.id = "add_to_bag";
    mainImg.src = img;
    mainImg.alt = "main image";
    mainImg.width = "590";
    mainImg.height = "390";

    spanSize.textContent = "Size:"
    spanColor.textContent = "Color:"
    pError.textContent = "You must choose size and color.";


    h3Name.textContent = name;
    pDesriprion.textContent = description;
    pPrice.textContent = "£" + price;

    conteiner.appendChild(divItemImages);
    conteiner.appendChild(divItemInfo);
    divItemImages.appendChild(mainImg);

    divItemInfo.appendChild(h3Name);
    divItemInfo.appendChild(pDesriprion);
    divItemInfo.appendChild(pPrice);
    divItemInfo.appendChild(divSizeColor1);
    divItemInfo.appendChild(divSizeColor2);
    divSizeColor1.appendChild(spanSize);
    divSizeColor2.appendChild(spanColor);
    // Show size
    for (let i = 0; i < size.length; i++) {
        let divRadio = document.createElement("div");
        let radioSize = document.createElement("input");
        let labelSize = document.createElement("label");
        radioSize.id = "radio_size" + i;
        radioSize.className = "radio_size";
        radioSize.type = "radio";
        radioSize.name = "size";
        radioSize.value = size[i];
        labelSize.htmlFor = 'radio_size' + i;
        labelSize.textContent = size[i];
        divRadio.appendChild(radioSize);
        divRadio.appendChild(labelSize);
        divSizeColor1.appendChild(divRadio);
    }
    // Show color
    for (let i = 0; i < color.length; i++) {
        let divRadio = document.createElement("div");
        let radioColor = document.createElement("input");
        let labelColor = document.createElement("label");
        radioColor.id = "radio_color" + i;
        radioColor.className = "radio_color";
        radioColor.type = "radio";
        radioColor.name = "color";
        radioColor.value = color[i];
        labelColor.htmlFor = 'radio_color' + i;
        labelColor.textContent = color[i];
        divRadio.appendChild(radioColor);
        divRadio.appendChild(labelColor);
        divSizeColor2.appendChild(divRadio);
    }
    divItemInfo.appendChild(pError);
    divItemInfo.appendChild(btnAddToCart);
    for (const e of preview) {
        let divImg = document.createElement("div");
        let previewImg = document.createElement("img");
        previewImg.src = e;
        previewImg.alt = "preview image"
        divItemImages.appendChild(divImg)
        divImg.appendChild(previewImg);
    }


}
function createBagItem(conteiner, img, name, price, color, size, isNew) {
    let aBannerConteiner = document.createElement("a"),
        bannerConteiner = document.createElement("div"),
        divBagImages = document.createElement("div"),
        divBagInfo = document.createElement("div"),
        imgMain = document.createElement("img"),
        imgNew = document.createElement("img"),
        h3Name = document.createElement("h3"),
        pPrice = document.createElement("p"),
        pSize = document.createElement("p"),
        pColor = document.createElement("p"),
        pQuantity = document.createElement("p"),
        aMinus = document.createElement("a"),
        spanCount = document.createElement("span"),
        aPlus = document.createElement("a"),
        aRemove = document.createElement("a");


    divBagImages.className = "item__image";
    divBagInfo.className = "item__info";
    bannerConteiner.className = "bag_conteiner";
    //Add NEW img
    if (isNew == true) {
        imgNew.src = "./img/new.png"
        imgNew.className = "imgNew";
        divBagImages.appendChild(imgNew)
    }
    pPrice.className = "price";
    pSize.className = "size";
    pColor.className = "color";
    pQuantity.className = "quantity";

    imgMain.src = img;
    imgMain.alt = "main image";
    imgMain.width = "340";
    imgMain.height = "265";

    h3Name.textContent = name;
    pPrice.textContent = "£" + price;
    pColor.textContent = "Color:" + color;
    pSize.textContent = "Size:" + size;
    pQuantity.textContent = "Quantity:"
    aMinus.textContent = "-";
    aPlus.textContent = "+";
    aRemove.textContent = "Remove item";


    conteiner.appendChild(bannerConteiner);
    bannerConteiner.appendChild(aBannerConteiner);
    bannerConteiner.appendChild(divBagInfo);
    aBannerConteiner.appendChild(divBagImages);
    divBagImages.appendChild(imgNew);
    divBagImages.appendChild(imgMain);

    divBagInfo.appendChild(h3Name);
    divBagInfo.appendChild(pPrice);
    divBagInfo.appendChild(pColor);
    divBagInfo.appendChild(pSize);
    divBagInfo.appendChild(pColor);
    divBagInfo.appendChild(pQuantity);
    pQuantity.appendChild(aMinus);
    pQuantity.appendChild(spanCount);
    pQuantity.appendChild(aPlus);
    divBagInfo.appendChild(aRemove);
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
function drawBannerByName(conteiner, titleName) {
    for (var i = 0; i < catalog.length; i++) {
        if (titleName == catalog[i].title) {
            let preview = catalog[i].preview,
                img = catalog[i].thumbnail,
                name = catalog[i].title,
                description = catalog[i].description,
                price = catalog[i].discountedPrice,
                size = catalog[i].sizes,
                color = catalog[i].colors;
            createItem(conteiner, img, preview, name, description, price, size, color);
        }
    }
}
function drawBannerByNameForBag(conteiner, titleName, color, size) {
    for (var i = 0; i < catalog.length; i++) {
        if (titleName == catalog[i].title) {
            let img = catalog[i].thumbnail,
                name = catalog[i].title,
                price = catalog[i].discountedPrice,
                isNew = catalog[i].isNew;
            createBagItem(conteiner, img, name, price, color, size, isNew);
        }
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
document.body.onclick = function () {
    let target = event.target;
    let banner = target.parentElement;
    if (banner.className == "banner") {
        if (banner.childNodes[2].textContent != "") {
            linkName = banner.childNodes[2].textContent;
            sessionStorage.setItem("linkName", linkName)
        } else {
            linkName = banner.childNodes[3].textContent;
            sessionStorage.setItem("linkName", linkName)
        }
    }

}

