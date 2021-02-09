import kycFetcher from './node_modules/kyc/core.js'


function fetcher() {
    let url = `https://shazam.p.rapidapi.com/search?locale=en-US&offset=0&limit=5&term=${document.getElementById('search-box').value}`;

    let options = {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "0ab92351f6mshdb7da2d8095637fp173240jsn17da6f9f3416",
            "x-rapidapi-host": "shazam.p.rapidapi.com"
        }
    };

    let card = function (item) {
        return `
        <div>
            <img src="${item.track.images.background}">
            <h3>${item.track.title}</h3>
        </div>
        `
    }

    kycFetcher(url, options, 86000000, false, 'json', true, 'body', card, 'tracks', 'hits')
}


document.getElementById('search-btn').addEventListener('click', fetcher);