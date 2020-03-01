
let conteinerBag = document.getElementById("bag"),
    pEmpty = document.getElementById("sh_bag"),
    pTotalPrice = document.getElementById("total_price"),
    title,
    size,
    color;

function showTotalPrice() {
    let price, count, totalPrice = 0;
    for (const key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            price = +localStorage.getItem(key).split(",")[0];
            count = +localStorage.getItem(key).split(",")[1];
            totalPrice += price * count;
        }
    }
    pTotalPrice.textContent = "Total price: £" + totalPrice.toFixed(2);
}
if (localStorage.length > 0) {
    pEmpty.style.display = "none"
} else (pEmpty.style.display = "block")

// Draw banners from local storage
function drawBannersFromLocalStorage() {
    for (const key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            let localStorageTemp = key.split(",");
            title = localStorageTemp[0];
            color = localStorageTemp[1];
            size = localStorageTemp[2];
            count = +localStorage.getItem(key).split(",")[1];
            drawBannerByNameForBag(conteinerBag, title, color, size, count);
        }
    }
}

// Event for Quantity
conteinerBag.onclick = function (event) {
    let target = event.target;
    let banner = target.parentElement.parentElement.childNodes;
    let title = banner[0].textContent;
    const price = +banner[1].textContent.substr(1, banner[2].textContent.length)
    let color = banner[2].textContent.substr(7, banner[2].textContent.length)
    let size = banner[3].textContent.substr(6, banner[2].textContent.length)
    if (target.textContent == "+") {
        let count = ++target.parentElement.childNodes[2].textContent;
        localStorage.setItem(title + ", " + color + ", " + size, price + ", " + count)
        displayBagVariable()
        showTotalPrice()
    } else if (target.textContent == "-" && target.parentElement.childNodes[2].textContent != 1) {
        let count = --target.parentElement.childNodes[2].textContent;
        localStorage.setItem(title + ", " + color + ", " + size, price + ", " + count)
        displayBagVariable()
        showTotalPrice()
    }

}
drawBannersFromLocalStorage()
showTotalPrice()