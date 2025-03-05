import APIPlayHTML from "./api-play.html";
import { Window } from "./window";

const myAPIWindow = new Window('window-2');
myAPIWindow.setWindowTitle('Playing with APIs');
myAPIWindow.setWindowContent(APIPlayHTML);

const img = document.querySelector('.gif');

let gifGIF = 'waiting';

let weatherLocation;

async function newGIF() {
    let gifSearch = "try again";

    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${weatherLocation}?key=MBK26J9HC5S79E2LG3RTL4R2W`, {mode: 'cors'});
        const weatherData = await response.json();
        gifSearch = await weatherData.days[0].conditions;
    } catch (error) {
        console.error('Failed to fetch weather data. Using default search term:', error);
    }
    
    const gifResponse = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=F6FOppZOtltQDEMqetJa63OW2ptQcrDE&s=${gifSearch}`, {mode: 'cors'});
    const gif = await gifResponse.json();
    gifGIF = await gif.data.images.original.url;
    img.src = await gifGIF;
    weatherText.innerText = gifSearch;
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
