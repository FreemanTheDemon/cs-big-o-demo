let x = 20;

// time/space O(1)

let a = 5;
let b = 'five';
let c = true;

// time/space O(1)

let fullArr = [1, 2, 3, 4, 5];

function ourFunc(arr) {
    let emptyArr = [];

    arr.forEach(num = emptyArr.push(num * 2));

    return emptyArr;
}

ourFunc(fullArr);

// time/space O(n)

function ourFunc2(arr) {
    let emptyArr = [];

    for (let i = 0; i < 4; i++) {
        emptyArr.push(arr[i] * 2);
    }

    return emptyArr;
}

ourFunc2(fullArr);

// time/space O(1)

function ourFunc3(arr) {
    let emptyArr = [];

    for (let i = 0; i < arr.length; i++) {
        emptyArr.push(arr[i] * 2);
    }

    return emptyArr;
}

ourFunc3(fullArr);

// time O(n) space O(n^2)