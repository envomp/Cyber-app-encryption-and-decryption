
function decryptMD5(hash) {
    let httpRequest = new XMLHttpRequest();


    httpRequest.open('GET', `https://md5decrypt.net/en/Api/api.php?hash=${hash}&hash_type=md5&email=envomp@ttu.ee&code=6451ee93cc70c808`);
    httpRequest.send();

    return httpRequest;

}

