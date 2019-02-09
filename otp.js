/*
*
* sources: https://github.com/vigetlabs/otp/tree/master/languages/JavaScript/src
*
* */

function otpencrypt(message, key) {
    let keyChars = key.split('');

    return message.split('')
        .map(function(val) {
            let h1, h2, asciiChar, hexChar;

            // get the next two characters in the key
            h1 = keyChars.shift();
            h2 = keyChars.shift();

            // get number from ascii character
            asciiChar = val.charCodeAt();

            // calculate decimal number from key bits
            hexChar = parseInt(h1 + h2, 16);

            // return the characters to the array for looping
            keyChars.push(h1, h2);

            // XOR the ascii number with the hex number, and convert to hex
            return (asciiChar ^ hexChar).toString(16);
        }).join('');
}


function otpdecrypt(cipherText, key) {
    // split the cipher text into pairs of characters
    let cipherPairs = cipherText.match(/.{1,2}/g);
    let keyChars    = key.split('');

    return cipherPairs
        .map(function(val) {
            let h1, h2, encodedChar, hexChar;

            // get the next two characters of the hex key
            h1 = keyChars.shift();
            h2 = keyChars.shift();

            // calculate decimal number from encoded ascii bits
            encodedChar = parseInt(val, 16);

            // calculate decimal number from key bits
            hexChar = parseInt(h1 + h2, 16);

            // return the characters to the array for looping
            keyChars.push(h1, h2);

            // XOR the encoded char with the hex char, convert to characters
            return strfchar(encodedChar ^ hexChar);
        }).join('');
}

function strfchar(code) {
    let cache = {};
    return cache[code] || (cache[code] = String.fromCharCode(code));
}
