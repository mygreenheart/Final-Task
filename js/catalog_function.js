"use strict"
let catalog = window.catalog,
    conteiner1 = document.getElementById("conteiner_new_arrivals"),
    conteiner2 = document.getElementById("conteiner_show_more"),
    select1 = document.getElementById("fashion"),
    select2 = document.getElementById("fashion"),
    select3 = document.getElementById("color"),
    select4 = document.getElementById("brand"),
    select5 = document.getElementById("size"),
    select6 = document.getElementById("price_range");

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

function fillAllSelect(select1, select3, select5) {

    for (const e of catalog) {
        fashion.add(e.fashion)
        for (let i = 0; i < e.colors.length; i++) {
            color.add(e.colors[i])
        }
        for (let i = 0; i < e.sizes.length; i++) {
            size.add(e.sizes[i])
        }
    }
    // Create optiom for select
    for (const e of fashion) {
        let li = document.createElement("li"),
            a = document.createElement("a");
        a.innerText = e;
        a.name = e;
        li.appendChild(a);
        select1.appendChild(li);
    }
    for (const e of color) {
        let li = document.createElement("li"),
            a = document.createElement("a");
        a.innerText = e;
        li.appendChild(a);
        select3.appendChild(li);
    }
    for (const e of fashion) {
        let li = document.createElement("li"),
            a = document.createElement("a");
        a.innerText = e;
        li.appendChild(a);
        select5.appendChild(li);
    }
}

select1.onclick = function(event){
    let target = event.target;
for()

}
fillAllSelect(select1, select3, select5);
drawBanners(conteiner1, 0, 4)
drawBanners(conteiner2, 4, 12)