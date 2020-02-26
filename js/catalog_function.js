"use strict"
let catalog = window.catalog,
    conteiner1 = document.getElementById("conteiner_new_arrivals"),
    conteiner2 = document.getElementById("conteiner_show_more"),
    select1 = document.getElementById("fashion");

function createDiv(conteiner, img, name, price) {
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
    imgBanner.width = "240"
    imgBanner.height = "340"

    imgBanner.src = img;
    imgBanner.alt = "cute girl"
    h3Name.textContent = name;
    pPrice.textContent = "£" + price;

    conteiner.appendChild(aBanner);
    aBanner.appendChild(divBanner);
    divBanner.appendChild(pViewItem);
    divBanner.appendChild(imgBanner);
    divBanner.appendChild(h3Name);
    divBanner.appendChild(pPrice);
}

function drawBanners(conteiner, from, to) {
    for (var i = from; i < to; i++) {
        let img = window.catalog[i].thumbnail,
            name = window.catalog[i].title,
            price = window.catalog[i].price;
        createDiv(conteiner, img, name, price);
    }
}

function fillAllSelect(select) {

    for (let i = 0; i < catalog.length; i++) {
        let option = document.createElement("option");
        option.setAttribute("value", catalog[i].fashion);

        option.innerText = catalog[i].fashion;
        select.appendChild(option);



    }
}

fillAllSelect(select1);
drawBanners(conteiner1, 0, 4)
drawBanners(conteiner2, 4, 12)