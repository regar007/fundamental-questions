let inp = ["0.232567"]
let inp1 = ["2,567.00.2"]
let inp2 = ["1,097,99.09"]
let inp3 = ["1,097,699.09"]

function FormattedNumber(strArr) {
    let str: string = strArr[0]
    let noOfDecimals: string[] = str.split(".");

    if (noOfDecimals.length > 2) return false;

    let unformattedNumber: string = "";
    for (let i = 0; i < noOfDecimals[0].length; i++) {
        if (str[i] !== ",") unformattedNumber += str[i];
    }
    console.log('unformattedNumber ', unformattedNumber)
    unformattedNumber = Intl.NumberFormat().format(parseInt(unformattedNumber)) +
        (noOfDecimals.length > 1 ? ("." + noOfDecimals[1]) : "");
    console.log('unformattedNumber ', unformattedNumber)

    let zeroPadding: number = 0;
    for (let i = 0; i < noOfDecimals[0].length; i++) {
        if (noOfDecimals[0][i] === "0") zeroPadding++;
        else break;
    }
    console.log('zeroPadding ', zeroPadding)
    if (noOfDecimals[0].length > 1) {
        for (let i = 0; i < zeroPadding; i++) {
            unformattedNumber = "0" + unformattedNumber;
        }

    }

    return (str === unformattedNumber) ? true : false;
}

// KEEP THIS FUNCTION CALL HERE
console.log(FormattedNumber(inp));
console.log(FormattedNumber(inp1));
console.log(FormattedNumber(inp2));
console.log(FormattedNumber(inp3));








// For this challenge you will determine if two numbers can be multiplied to some specific number.
/*
have the function SumMultiplier(arr) take the array of numbers stored in arr and return the string true if any two numbers can be multiplied so that the answer is greater than double the sum of all the elements in the array. If not, return the string false. For example: if arr is [2, 5, 6, -6, 16, 2, 3, 6, 5, 3] then the sum of all these elements is 42 and doubling it is 84. There are two elements in the array, 16 * 6 = 96 and 96 is greater than 84, so your program should return the string true.
*/

/*
find the total sum
double the sum
analyze if any 2 numbers are greater than double sum
*/

function sumMultiplier(arr: number[]) {
    let total: number = 0;

    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }

    total *= 2;

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] * arr[j] > total) {
                return "true";
            }
        }
    }

    return "false";
}

let a = [2, 5, 6, -6, 16, 2, 3, 6, 5, 3];
let b = [2, 2, 2, 2, 4, 1];
let c = [1, 1, 2, 10, 3, 1, 12];
console.log(sumMultiplier(a)); // true
console.log(sumMultiplier(b)); // false
console.log(sumMultiplier(c)); // true

