
let conteinerBag = document.getElementById("bag");

for (let i = 0; i < localStorage.length; i++) {
    drawBannerByName(conteinerBag, localStorage.key(i));
}