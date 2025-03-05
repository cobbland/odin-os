import { Window } from "./window";
import { Weather } from "./weather";

const lessonWindow = new Window('window-2');
lessonWindow.setWindowTitle("Today's Lesson");
lessonWindow.setWindowContent(`
    <p>hi</p>
`);

const myWeather = new Weather('lynchburg,va');

console.log(myWeather.getWeatherJSON().then((result) => result.json()));