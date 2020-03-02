"use strict"
let conteiner1 = document.getElementById("conteiner_new_arrivals"),
    conteiner2 = document.getElementById("conteiner_show_more"),
    select1 = document.getElementById("fashion"),
    select2 = document.getElementById("product_type"),
    select3 = document.getElementById("color"),
    select4 = document.getElementById("brand"),
    select5 = document.getElementById("size"),
    select6 = document.getElementById("price_range"),
    btnShowMore = document.querySelector(".button_conteiner input"),
    a = document.getElementsByClassName("filter_a"),
    p = document.getElementsByClassName("filter_p");



//Events(DO REFACTORING)
select1.onclick = function (event) {
    let target = event.target;
    if (target.name != undefined) {
        a[0].innerText = target.name;
        a[0].style.color = "#d14b58"
        p[0].style.opacity = "1";
        //  target.style.color = "#d14b58";
    }
}
select2.onclick = function (event) {
    let target = event.target;
    if (target.name != undefined) {

        a[1].innerText = target.name;
        a[1].style.color = "#d14b58"
        p[1].style.opacity = "1";
        // target.style.color = "#d14b58";
    }
}
select3.onclick = function (event) {
    let target = event.target;
    if (target.name != undefined) {
        a[2].innerText = target.name;
        a[2].style.color = "#d14b58"
        p[2].style.opacity = "1";
        //  target.style.color = "#d14b58";
    }
}
select4.onclick = function (event) {
    let target = event.target;
    if (target.name != undefined) {
        a[3].innerText = target.name;
        a[3].style.color = "#d14b58"
        p[3].style.opacity = "1";
        //target.style.color = "#d14b58";
    }
}
select5.onclick = function (event) {
    let target = event.target;
    if (target.name != undefined) {
        a[4].innerText = target.name;
        a[4].style.color = "#d14b58"
        p[4].style.opacity = "1";
        //  target.style.color = "#d14b58";
    }
}
select6.onclick = function (event) {
    let target = event.target;
    if (target.name != undefined) {
        a[5].innerText = target.name;
        a[5].style.color = "#d14b58"
        p[5].style.opacity = "1";
        // target.style.color = "#d14b58";
    }
}

fillAllSelect(select1, select3, select5);
drawBanners(conteiner1, 0, 4)
drawBanners(conteiner2, 4, 12)

btnShowMore.addEventListener("click", () => {
    if (count == 0) {
        count++;
        drawBanners(conteiner2, 12, catalog.length)
    }

})