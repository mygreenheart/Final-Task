
let conteinerBag = document.getElementById("bag"),
    title,
    size,
    color;
console.log(conteinerBag)
for (const key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
        let localStorageTemp = key.split(",");
        title = localStorageTemp[0];
        color = localStorageTemp[1];
        size = localStorageTemp[2];
        drawBannerByNameForBag(conteinerBag, title, color, size);
    }
}
