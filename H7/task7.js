// 1.
let sumResult = sumMultiple(2)(4);
alert(sumResult);

function sumMultiple(a) {
    return function(b) {
        return a + b;
    };
}

// 2.
function makeCounter() {
    let currentCount = 1;

    return function() {
        return currentCount++;
    };
}

let counter1 = makeCounter();
let counter2 = makeCounter();

alert(counter1());
alert(counter1());
alert(counter2());
alert(counter2());
alert(counter2());
alert(counter1());

// 3.
let numbers = sumInput();
alert(numbers);

function sumInput() {
    let numbers = new Array();

    function callPrompt() {
        let number = prompt('Type number', 0);

        // If prompt not canceled.
        if (number != null) {

            // If prompt result is numeric string.
            if (isNumeric(number)) {

                // Add prompt result into result array.
                numbers.push(number);

                // Call function callPrompt recursivly.
                callPrompt();
            }
        }
    }

    // Call prompt first time.
    callPrompt();

    return numbers;
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

