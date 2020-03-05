
let containerBag = document.getElementById("bag"),
    pEmpty = document.getElementById("sh_bag"),
    pThank= document.getElementById("sh_bag2"),
    pTotalPrice = document.getElementById("total_price"),
    spanDiscount = document.getElementById("discount"),
    bagInfo = document.getElementsByClassName("bag__info"),
    emptyBag = document.getElementById("empty_bag"),
    checkout = document.getElementById("checkout"),
    title,
    size,
    color;

drawBannersFromLocalStorage()

function showTotalPrice() {
    let price, count, totalPrice = 0;
    for (const key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            price = +localStorage.getItem(key).split(",")[0];
            count = +localStorage.getItem(key).split(",")[1];
            totalPrice += price * count;
        }
    }
    if (isDiscount == "true") {
        spanDiscount.style.display = "block";
        if (localStorage.length != 0) {
            totalPrice = totalPrice - bestOffer.discount;
        }
    }
    bagPrice.textContent = " £" + totalPrice;
    bagCount.textContent = "(" + localStorage.length + ")";
    pTotalPrice.textContent = "Total price: £" + totalPrice.toFixed(2);
}
function isEmpty() {
    if (localStorage.length > 0) {
        pEmpty.style.display = "none"
    } else if (localStorage.length == 0) {
        pEmpty.style.display = "block"
    }
}
// Draw banners from local storage
function drawBannersFromLocalStorage() {
    for (const key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            let localStorageTemp = key.split(",");
            title = localStorageTemp[0];
            color = localStorageTemp[1];
            size = localStorageTemp[2];
            count = +localStorage.getItem(key).split(",")[1];
            drawBannerByNameForBag(containerBag, title, color, size, count);
        }
    }
}
// Event for Quantity
containerBag.onclick = function (event) {
    let target = event.target;
    let banner = target.parentElement.parentElement.childNodes;
    let title = banner[0].textContent;
    let price = +banner[1].textContent.substr(1, banner[2].textContent.length)
    let color = banner[2].textContent.substr(7, banner[2].textContent.length)
    let size = banner[3].textContent.substr(6, banner[2].textContent.length)

    if (target.textContent == " + ") {
        let count = ++target.parentElement.childNodes[2].textContent;
        if (isDiscount == "true") {
            localStorage.setItem(title + "," + color + "," + size, price + "," + count + "," + true)
        } else {
            localStorage.setItem(title + "," + color + "," + size, price + "," + count + "," + false)
        }
        displayBagVariable()
        showTotalPrice()
    } else if (target.textContent == " – " && target.parentElement.childNodes[2].textContent != 1) {
        let count = --target.parentElement.childNodes[2].textContent;
        if (isDiscount == "true") {
            localStorage.setItem(title + "," + color + "," + size, price + "," + count + "," + true)
        } else {
            localStorage.setItem(title + "," + color + "," + size, price + "," + count + "," + false)
        }
        displayBagVariable()
        showTotalPrice()
    }

}
checkout.onclick = function(){
    localStorage.clear();
    containerBag.innerHTML = "";
    displayBagVariable()
    showTotalPrice()
    if (localStorage.length == 0) {
        pThank.style.display = "block"
        spanDiscount.style.opacity = "0";
    }
}
//Remove items
window.onclick = function (event) {
    let target = event.target,
        banner = target.parentElement.childNodes,
        title = banner[0].textContent,
        color = banner[2].textContent.substr(7, banner[2].textContent.length),
        size = banner[3].textContent.substr(6, banner[2].textContent.length),
        string = title + "," + color + "," + size;
    if (target.textContent == "Remove item") {
        for (const key in localStorage) {
            if (localStorage.hasOwnProperty(key)) {
                if (key == string) {
                    localStorage.removeItem(key)
                    containerBag.innerHTML = "";
                    drawBannersFromLocalStorage();
                    displayBagVariable()
                    showTotalPrice()
                    if (localStorage.length == 0) {
                        pEmpty.style.display = "block"
                    }
                }
            }
        }
    }

}
emptyBag.onclick = function () {
    localStorage.clear();
    containerBag.innerHTML = "";
    displayBagVariable()
    showTotalPrice()
    if (localStorage.length == 0) {
        pEmpty.style.display = "block"
        spanDiscount.style.opacity = "0";
    }
}

isEmpty()
showTotalPrice()

