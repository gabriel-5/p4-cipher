// take user input
// compare each character and find index in array of alphabet
// replace each character with new letter at higher index in array 
// (if over 24 then minus 24)
// give back new string



let testString = "z zz";


let alphabet = [" ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function getIndex(str) {
    let indexArr = [];
    for (let i = 0; i < str.length; i++) {
        indexArr.push(alphabet.indexOf(str[i]));
    }
    return indexArr;
}

function encode(str, key) {
    let strIndex = getIndex(str);
    let newArr = [];
    for (i = 0; i < strIndex.length; i++) {
        if (strIndex[i] === 0) {
            newArr.push(alphabet[strIndex[i]]);
        }
        else if (strIndex[i] + key > 25) {
            newArr.push(alphabet[strIndex[i] + key - 26])
        } else {
            newArr.push(alphabet[strIndex[i] + key]);
        }
    }
    document.getElementById("output").innerHTML = newArr.join("");
    console.log(newArr.join(""))
}

function decode(str, key) {
    let strIndex = getIndex(str);
    let newArr = [];
    for (i = 0; i < strIndex.length; i++) {
        if (strIndex[i] === 0) {
            newArr.push(alphabet[strIndex[i]]);
        }
        else if (strIndex[i] < 2) {
            newArr.push(alphabet[strIndex[i] - key + 26])
        } else {
            newArr.push(alphabet[strIndex[i] - key]);
        }
    }
    document.getElementById("output2").innerHTML = newArr.join("");
    console.log(newArr.join(""))
}

