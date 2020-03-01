
let conteinerBag = document.getElementById("bag"),
    pEmpty = document.getElementById("sh_bag"),
    title,
    size,
    color;

if (localStorage.length > 0) {
    pEmpty.style.display = "none"
} else (pEmpty.style.display = "block")

for (const key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
        let localStorageTemp = key.split(",");
        title = localStorageTemp[0];
        color = localStorageTemp[1];
        size = localStorageTemp[2];
        drawBannerByNameForBag(conteinerBag, title, color, size);
    }
}
conteinerBag.onclick = function (event) {
    let target = event.target;
    if (target.textContent == "+") {
        target.parentElement.childNodes[2].textContent++;
    } else if (target.textContent == "-" && target.parentElement.childNodes[2].textContent != 0) {
        target.parentElement.childNodes[2].textContent--;
    }

}