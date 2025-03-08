import { Window } from "./window";

const lessonWindow = new Window('window-2');
lessonWindow.setWindowTitle("Today's Lesson");

function sumRange(number) {
    return number === 1 ? number : number + sumRange(number -1);
}

function power(base, exp) {
    if (exp === 0) {
        return 1;
    } else {
        return base * power(base, exp - 1)
    }
}

function factorial(number) {
    if (number === 1) {
        return number;
    } else {
        return number * factorial(number - 1);
    }
}

function all(arr, func) {
    const copy = arr.slice();
    if (copy.length === 0) {
        return true;
    } else if (func(copy[copy.length - 1])) {
        copy.pop();
        return all(copy, func);
    } else {
        return false;
    }
}

function productOfArray(arr) {
    const copy = arr.slice();
    if (copy.length === 0) {
        return 1;
    } else {
        return copy.pop() * productOfArray(copy);
    }
}

function contains(obj, value) {
    for (let key in obj) {
        if (obj[key] === value) {
            return true;
        } else if (
            typeof obj[key] === 'object' &&
            obj[key] !== null
        ) {
            return contains(obj[key], value);
        } 
    }
    return false;
}

const nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}

lessonWindow.setWindowContent(contains(nestedObject, 44))
// console.log(nestedObject)