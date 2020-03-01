let itemConteiner = document.getElementById("item"),
    radioColor = document.getElementsByClassName("radio_color"),
    radioSize = document.getElementsByClassName("radio_size"),
    pPrice = document.getElementsByClassName("price"),
    color,
    size;



drawBannerByName(itemConteiner, sessionStorage.getItem("linkName"));
let title = itemConteiner.childNodes[2].firstChild.textContent,
    price = +pPrice[0].textContent.substr(1, pPrice[0].textContent.length),
    error = document.getElementById("error"),
    btnAddToCart = document.getElementById("add_to_bag");
    
function getCheckedColor() {
    for (let i = 0; i < radioColor.length; i++) {
        if (radioColor[i].checked == true) {
            return color = radioColor[i].value;
        }
    }
}

function getCheckedSize() {
    for (let i = 0; i < radioSize.length; i++) {
        if (radioSize[i].checked == true) {
            return size = radioSize[i].value;
        }
    }
}

btnAddToCart.onclick = function () {
    if (getCheckedSize() != undefined && getCheckedColor() != undefined) {
        error.style.opacity = 0;
        localStorage.setItem(title + ", " + getCheckedColor() + ", " + getCheckedSize(), price)
       displayBagVariable()
    } else {
        error.style.opacity = 1;
        throw "You must choose size and color."
    }
}

getCheckedColor()