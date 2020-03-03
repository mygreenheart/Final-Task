"use strict"
let container1 = document.getElementById("container_new_arrivals"),
    container2 = document.getElementById("container_show_more"),
    select1 = document.getElementById("fashion"),
    select2 = document.getElementById("product_type"),
    select3 = document.getElementById("color"),
    select4 = document.getElementById("brand"),
    select5 = document.getElementById("size"),
    select6 = document.getElementById("price_range"),
    btnShowMore = document.querySelector(".button_container input"),
    a = document.getElementsByClassName("filter_a"),
    p = document.getElementsByClassName("filter_p"),
    navContainer = document.getElementById("topmenu");


//Events(DO REFACTORING)
select1.onclick = function (event) {
    let target = event.target;
    if (target.name != undefined) {
        a[0].innerText = target.name;
        a[0].style.color = "#d14b58"
        p[0].style.opacity = "1";
        if (target.name == "Not selected") {
            a[0].innerText = "Fashion"
            a[0].style.color = "black"
            p[0].style.opacity = "0";
        }
        //  target.style.color = "#d14b58";
    }
}
select2.onclick = function (event) {
    let target = event.target;
    if (target.name != undefined) {
        a[1].textContent = target.name;
        a[1].style.color = "#d14b58"
        p[1].style.opacity = "1";
        if (target.name == "Not selected") {
            a[1].innerText = "Product type"
            a[1].style.color = "black"
            p[1].style.opacity = "0";
        }
        // target.style.color = "#d14b58";
    }
}
select3.onclick = function (event) {
    let target = event.target;
    if (target.name != undefined) {
        a[2].textContent = target.name;
        a[2].name = target.name;
        a[2].style.color = "#d14b58"
        p[2].style.opacity = "1";
        if (target.name == "Not selected") {
            a[2].innerText = "Color"
            a[2].style.color = "black"
            p[2].style.opacity = "0";
        }
        //  target.style.color = "#d14b58";
    }
}
select4.onclick = function (event) {
    let target = event.target;
    if (target.name != undefined) {
        a[3].textContent = target.name;
        a[3].name = target.name;
        a[3].style.color = "#d14b58"
        p[3].style.opacity = "1";
        if (target.name == "Not selected") {
            a[3].innerText = "Brand"
            a[3].style.color = "black"
            p[3].style.opacity = "0";
        }
        //target.style.color = "#d14b58";
    }
}
select5.onclick = function (event) {
    let target = event.target;
    if (target.name != undefined) {
        a[4].textContent = target.name;
        a[4].name = target.name;
        a[4].style.color = "#d14b58"
        p[4].style.opacity = "1";
        if (target.name == "Not selected") {
            a[4].style.color = "black"
            p[4].style.opacity = "0";
            a[4].innerText = "Size"
        }
        //  target.style.color = "#d14b58";
    }
}
select6.onclick = function (event) {
    let target = event.target;
    if (target.name != undefined) {
        a[5].textContent = target.name;
        a[5].name = target.name;
        a[5].style.color = "#d14b58"
        p[5].style.opacity = "1";
        if (target.name == "Not selected") {
            a[5].innerText = "Price range"
            a[5].style.color = "black"
            p[5].style.opacity = "0";
        }
        // target.style.color = "#d14b58";
    }
}

fillAllSelect(select1, select3, select5);
drawBanners(container1, fillterArr, 0, 4)
drawBanners(container2, fillterArr, 4, 12)



btnShowMore.addEventListener("click", () => {
    if (count1 == 0) {
        count1++;
        drawBanners(container2, catalog, 6, 7)
    }

})