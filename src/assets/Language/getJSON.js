let getJSON = function(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    // xhr.onload = function() {
    //     let status = xhr.status;
    //     if (status === 200) {
    //         callback(null, xhr.response);
    //     } else {
    //         callback(status);
    //     }
    // };
    xhr.send();
    if (xhr.status !== 200) {
        console.error( xhr.status + ': ' + xhr.statusText );
    } else {
        return xhr.responseText;
    }
};
export default getJSON;