"use strict"
let conteiner = document.getElementById("conteiner_new_arrivals");

function createDiv(img, name, price) {
    let divBanner = document.createElement("div"),
        aBanner = document.createElement("a"),
        pViewItem = document.createElement("p"),
        imgBanner = document.createElement("img"),
        h3Name = document.createElement("h3"),
        pPrice = document.createElement("p");


    //     <div class="banner">
    //         <p class="view_item">View item</p>
    //         <img src="/img/new_arrivals3.png" alt="cute girl">
    //             <h3>Turtle Neck Jumper in Rib</h3>
    //             <p class="price">£130.25</p>
    // </div>
    divBanner.className = "banner";
    pViewItem.className = "view_item";
    pViewItem.textContent = "View Item";
    pPrice.className = "price";
    aBanner.href = "#";

    imgBanner.src = img;
    imgBanner.alt = "cute girl"
    h3Name.textContent = name;
    pPrice.textContent = "£"+price;

    conteiner.appendChild(aBanner);
    aBanner.appendChild(divBanner);
    divBanner.appendChild(pViewItem);
    divBanner.appendChild(imgBanner);
    divBanner.appendChild(h3Name);
    divBanner.appendChild(pPrice);
}

function drawBanners(countDrow) {
    conteiner.innerHTML = "";
    for (var i = 0; i < countDrow; i++) {
        let img = window.catalog[i].thumbnail,
            name = window.catalog[i].title,
            price = window.catalog[i].price;
        createDiv(img, name, price);
    }
}
drawBanners(4)