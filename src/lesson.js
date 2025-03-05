import { Window } from "./window";
import { Weather } from "./weather";

const lessonWindow = new Window('window-2');
lessonWindow.setWindowTitle("Today's Lesson");

const myWeather = new Weather('lynchburg,va');

async function weatherToday() {
    const weatherJSON = await myWeather.getWeatherJSON();
    const todaysWeather = weatherJSON.days[0].conditions;
    lessonWindow.setWindowContent(todaysWeather);
}

weatherToday();