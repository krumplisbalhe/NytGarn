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
        instagram.setAttribute('href',theHairdresser.acf.instagram);

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
if(document.querySelector("#hairdressersTemplate")){
    getData();
}
if(document.querySelector("#pricesTemplate")){
 getPrices();
}
