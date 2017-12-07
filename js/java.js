function getAllHairdressers() {
    fetch("http://zawropati.com/GARN/wp-json/wp/v2/hairdressers")
    .then(res=>res.json())
    .then(showHairdressers);


}

function showHairdressers(data){
    let list = document.querySelector("#aboutlist");
    let template = document.querySelector("#hairdressersTemplate").content;

                 data.forEach(function(oneHairdresser){
        console.log(oneHairdresser)
        let clone = template.cloneNode(true);
        let name = clone.querySelector("h1");
        let description = clone.querySelector(".description");

        let img = clone.querySelector("img");

        title.textContent = oneEvent.title.rendered;
        price.textContent = oneEvent.acf.price;
        venue.textContent = oneEvent.acf.venue;
        var dateString = oneEvent.acf.date;
                 }
                              getData();

