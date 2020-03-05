"use strict"
let container1 = document.getElementById("container_new_arrivals"),
    container2 = document.getElementById("container_show_more"),
    fillterTabletPhone = document.getElementById("fillter_tablet_phone"),
    aClose = document.getElementById("span_close"),
    openDiv = document.getElementById("open_div"),
    submenu = document.getElementsByClassName("submenu"),
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
let flag = false;
function changeSize() {
    if (screen.width > 375 && screen.width < 768) {
        container1.innerHTML = ""
        container2.innerHTML = ""
        drawBanners(container1, fillterArr, 0, 2);
        drawBanners(container2, fillterArr, 2, 6)
        fillterTabletPhone.style.display = "block"
        if (flag == false) {
            createFillter()
            flag = true;
        }
    }
    if (screen.width > 768 && screen.width < 1024) {
        container1.innerHTML = ""
        container2.innerHTML = ""
        drawBanners(container1, fillterArr, 0, 3);
        drawBanners(container2, fillterArr, 3, 9)
        fillterTabletPhone.style.display = "block"
        if (flag == false) {
            createFillter()
            flag = true;
        }
    }
    if (screen.width > 1024) {
        container1.innerHTML = ""
        container2.innerHTML = ""
        drawBanners(container1, fillterArr, 0, 4);
        drawBanners(container2, fillterArr, 4, 12)
        fillterTabletPhone.style.display = "none"
    }
}
window.onload = function () {
    this.changeSize()
}
window.onresize = function () {
    this.changeSize()
}
function createFillter() {
    let divFillter = document.createElement("div"),
        spanFashion = document.createElement("span"),
        spanProduct = document.createElement("span"),
        spanColor = document.createElement("span"),
        spanBrand = document.createElement("span"),
        spanSize = document.createElement("span"),
        spanPriceRange = document.createElement("span"),
        pFashion = document.createElement("p"),
        pProduct = document.createElement("p"),
        pColor = document.createElement("p"),
        pBrand = document.createElement("p"),
        pSize = document.createElement("p"),
        pPriceRange = document.createElement("p"),
        openDivInside = document.createElement("div"),
        aClose = document.createElement("a"),
        openDiv = document.createElement("div");


    let arrP = [pFashion, pProduct, pColor, pBrand, pSize, pPriceRange]
    let arrSpan = [spanFashion, spanProduct, spanColor, spanBrand, spanSize, spanPriceRange]

    divFillter.className = "p_fillter";
    openDiv.id = "open_div";
    aClose.id = "a_close"
    openDivInside.className = "open_div_inside"

    spanFashion.textContent = "Fashion, ";
    spanProduct.textContent = "Product type, ";
    spanColor.textContent = "Color, ";
    spanBrand.textContent = "Brand, ";
    spanSize.textContent = "Size, ";
    spanPriceRange.textContent = "Price range";
    pFashion.textContent = "Fashion";
    pProduct.textContent = "Product type";
    pColor.textContent = "Color";
    pBrand.textContent = "Brand";
    pSize.textContent = "Size";
    pPriceRange.textContent = "Price range";
    aClose.textContent = "X";



    fillterTabletPhone.appendChild(divFillter);
    divFillter.appendChild(spanFashion)
    divFillter.appendChild(spanProduct)
    divFillter.appendChild(spanColor)
    divFillter.appendChild(spanBrand)
    divFillter.appendChild(spanSize)
    divFillter.appendChild(spanPriceRange)
    divFillter.appendChild(openDiv)
    openDiv.appendChild(aClose)
    openDiv.appendChild(openDivInside)
    for (let i = 0; i < submenu.length; i++) {
        let divForList = document.createElement("div")
        let name = arrSpan[i].textContent;
        arrP[i].className = "title_list"
        divForList.appendChild(arrP[i])
        openDivInside.appendChild(divForList);
        divForList.appendChild(submenu[i])

        submenu[i].childNodes[1].style.color = "black"
        divForList.onclick = function (event) {
            let theTarget = event.target;
            if (theTarget.name == "Not selected") {
                arrSpan[i].textContent = name;
                arrSpan[i].style.color = "black"
            } else {
                arrSpan[i].textContent = theTarget.name + ", ";
                arrSpan[i].style.color = "#f14a58"
            }

        }
    }
    divFillter.addEventListener("click", () => {
        openDiv.style.display = "block"
    })

}




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