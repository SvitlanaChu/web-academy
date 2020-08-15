// 1.
let admin, name;

name = 'Jon';
admin = name;

alert(admin);

// 2.
let name = "Ilya";

alert( `hello ${1}` ); // hello 1
alert( `hello ${"name"}` ); // hello name
alert( `hello ${name}` ); // hello Ilya

// 3.
let number = parseInt(prompt('Type number', 0));

if (typeof number === 'number') {
    let result = number > 0? 1 : -1;
    alert(result);
}

// 4.
let age = parseInt(prompt('Type number', 19));
let ageResult = 14 <= age <= 90 ? 'Can by alcohol' : 'Can\'t by alcohol';
alert(ageResult);

// 5.
let loopResult;
for(let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        loopResult = loopResult + i + ','
    }
}

alert(loopResult);

// 6.
let minResult = min(2, 4);
alert(minResult);

function min(a, b) {
    let result;

    if (a > b) {
        result = b
    } else {
        result = a;
    }

    return result;
}

// 7.
let powResult = pow(2, 4);
alert(powResult);

function pow (a, n) {
    let result = a;

    if (n < 1) {
        return result;
    }

    for (let i = 1; i <= n; i++) {
        result = result * a;
    }

    return result;
}