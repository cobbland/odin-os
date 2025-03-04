import APIPlayHTML from "./api-play.html";

class Window {

    constructor(windowID) {
        this.windowID = windowID;
        this.windowTitle = document.querySelector(`#${this.windowID} .window-title`);
        this.windowContent = document.querySelector(`#${this.windowID} .window-content`);
    }
    
    setWindowTitle(title) {
        if (this.windowTitle) {
            this.windowTitle.innerText = title;
        } else {
            console.error(`DOM element "#${this.windowID} .window-title" not found`);
        }
    }

    setWindowContent(content) {
        if (this.windowContent) {
            this.windowContent.innerHTML = content;
        } else {
            console.error(`DOM element "#${this.windowID} .window-content" not found`);
        }
    }

}

const myAPIWindow = new Window('window-2');
myAPIWindow.setWindowTitle('Playing with APIs');
myAPIWindow.setWindowContent(APIPlayHTML);

const img = document.querySelector('.gif');

let gifSearch = 'waiting';

let weatherLocation = 'ohio';

const newGIF = async function() {
        fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${weatherLocation}?key=MBK26J9HC5S79E2LG3RTL4R2W`,
        {mode: 'cors'}
    ).then(function(response) {
        return response.json();
    }).then(function(response) {
        gifSearch = response.days[0].conditions
    }).catch(() => gifSearch = 'try again')
    .then(function() {
        fetch(`https://api.giphy.com/v1/gifs/translate?api_key=F6FOppZOtltQDEMqetJa63OW2ptQcrDE&s=${gifSearch}`, {mode: 'cors'})
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            img.src = response.data.images.original.url;
            weatherText.innerText = gifSearch;
        });
    })
}

newGIF();

const newGIFForm = document.querySelector('#new-gif-form');
const locationInput = document.querySelector('#location');
const weatherText = document.querySelector('.weather-text');

newGIFForm.addEventListener('submit', (event) => {
    event.preventDefault();
    weatherLocation = locationInput.value;
    newGIF();
})
