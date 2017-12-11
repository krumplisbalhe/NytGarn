
function getData() {
    fetch("http://zawropati.com/GARN/wp-json/wp/v2/hairdressers?_embed").then(res => res.json()).then(showHairdressers);
}

function showHairdressers(data) {
    let list = document.querySelector("#aboutlist");
    let template = document.querySelector("#hairdressersTemplate").content;
    data.forEach(function (theHairdresser) {
        console.log(theHairdresser)
        let clone = template.cloneNode(true);
        let name = clone.querySelector(".name");
        name.textContent = theHairdresser.acf.name;
        let description = clone.querySelector(".description");
        description.innerHTML = theHairdresser.acf.description;
        let image = clone.querySelector(".image");
        image.setAttribute('src', theHairdresser._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url);
        let instagram = clone.querySelector(".instagram");
        instagram.setAttribute('href', theHairdresser.acf.instagram);

        list.appendChild(clone);
    })
}

function getPrices() {
    fetch("http://zawropati.com/GARN/wp-json/wp/v2/prices").then(res => res.json()).then(showPrices)
}

function showPrices(prices) {
    let pricelist = document.querySelector("#pricelist");
    let pricestemplate = document.querySelector("#pricesTemplate").content;
    prices.forEach(function (aPrice) {
        console.log(aPrice)
        let clone = pricestemplate.cloneNode(true);
        let title = clone.querySelector(".title");
        title.textContent = aPrice.title.rendered;
        let price = clone.querySelector(".price");
        price.textContent = aPrice.acf.price;
        pricelist.appendChild(clone);
    })
}

function getColorCut() {
    fetch("http://zawropati.com/GARN/wp-json/wp/v2/prices?_embed&per_page=100").then(res => res.json()).then(showHair)
}

function showHair(colorcut) {

    let colorcuttemplate = document.querySelector("#HairTemplate").content;
    colorcut.forEach(function (aColorCut) {
        console.log(aColorCut)
        let clone = colorcuttemplate.cloneNode(true);
        let cctitle = clone.querySelector(".hairtitle");
        cctitle.innerHTML = aColorCut.title.rendered;
        let ccprice = clone.querySelector(".hairprice");
        ccprice.textContent = aColorCut.acf.price;

        let parent;
        if (aColorCut.categories[0] == 2) {
            parent = document.querySelector("#pricelistColorCut");

        } else if (aColorCut.categories[0] == 3) {
            parent = document.querySelector("#pricelistCut");

        } else if (aColorCut.categories[0] == 5) {
            parent = document.querySelector("#pricelistColor");

        }
        parent.appendChild(clone);


    })
}

function toggleThatPriceX() {
    var x = document.getElementById("toggle1");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }

}

function toggleThatPriceY() {
    var y = document.getElementById("toggle2");
    if (y.style.display === "block") {
        y.style.display = "none";
    } else {
        y.style.display = "block";
    }
}

function toggleThatPriceZ() {
    var z = document.getElementById("toggle3");
    if (z.style.display === "block") {
        z.style.display = "none";
    } else {
        z.style.display = "block";
    }
}

if (document.querySelector("#hairdressersTemplate")) {
    getData();
}
if (document.querySelector("#pricesTemplate")) {
    getPrices();
}
if (document.querySelector("#pricelistColorCut")) {
    getColorCut();
}

