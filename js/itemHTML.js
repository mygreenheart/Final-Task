let itemConteiner = document.getElementById("item"),
    radioColor = document.getElementsByClassName("radio_color"),
    radioSize = document.getElementsByClassName("radio_size"),
    color,
    size;



drawBannerByName(itemConteiner, sessionStorage.getItem("linkName"));
let title = itemConteiner.childNodes[2].firstChild.textContent;
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
    let count = 0;
    if (getCheckedSize() != undefined && getCheckedColor() != undefined) {
        localStorage.setItem(title + ", " + getCheckedColor() + ", " + getCheckedSize(), title)
        bagCount.textContent = "(" + localStorage.length + ")";
    } else {
        alert("You shoud choose size and color")
        throw "You shoud choose size and color"
    }
    count++;
}

getCheckedColor()