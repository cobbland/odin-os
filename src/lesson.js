// import { Window } from "./window.js";

// const lessonWindow = new Window('window-2');
// lessonWindow.setWindowTitle("Today's Lesson");

function binarySearch(
    search, arr, start = 0, end = arr.length - 1, mid = Math.round((start + end) / 2)
) {
    console.log(`arr: ${arr}, start: ${start}, end: ${end}, mid: ${mid}`)
    if (start > end) {
        console.log("It ain't here.");
        return;
    } else if (arr[mid] === search) {
        console.log("It's here!");
        return arr[mid];
    } 
    if (arr[mid] > search) {
        console.log("It's lower.");
        const newEnd = mid - 1;
        const newMid = Math.round((start + newEnd) / 2);
        binarySearch(search, arr, start, newEnd, newMid);
    } else if (arr[mid] < search) {
        console.log("It's higher.");
        const newStart = mid + 1;
        const newMid = Math.round((newStart + end) / 2);
        binarySearch(search, arr, newStart, end, newMid);
    }
    // console.log("The end.");
}

// lessonWindow.setWindowContent("Hi")
console.log(binarySearch(-1, [1, 2, 3, 4, 5, 8, 12, 15, 21]));

/*
Big O Notations are:
    O(1)       - Constant Complexity
    O(log N)   - Logarithmic Complexity
    O(N)       - Linear Complexity
    O(N log N) - N x log N Complexity
    O(n²)      - Quadratic Complexity
    O(n³)      - Cubic Complexity
    O(2ⁿ)      - Exponential Complexity
    O(N!)      - Factorial Complexity
*/




function stringToNumber(string) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < string.length; i++) {
        hashCode = primeNumber * hashCode + string.charCodeAt(i);
    }
    return hashCode;
}

function hash(name, surname) {
    return stringToNumber(name) + stringToNumber(surname);
}

let jacobDensfordHash = hash("jacob", "densford");
console.log(jacobDensfordHash);



