function download_json(url) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        df = JSON.parse(xhr.responseText);
        console.log(df.length);
    };
    xhr.open("GET", url, true);
    xhr.send(null);
}
