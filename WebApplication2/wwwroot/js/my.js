function ButClick() {
    document.getElementById("text").innerHTML = "Go";
    var xhr = new XMLHttpRequest();
    xhr.onload = function (e) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                document.getElementById("text").innerHTML = xhr.responseText;
            } else {
                alert(xhr.status + ': ' + xhr.statusText);
            }
        }
    };
    xhr.onerror = function (e) {
        alert(xhr.status + ': ' + xhr.statusText);
    };
    xhr.open('GET', '/api/Str', true);
    xhr.send();
    Check();
}
async function Check() {
    var result = 0;
    while (result < 100) {
        var response = await fetch('/api/I');
        result = await response.text();
        document.getElementById("progress").style = `width: ${result}%`;
    }
}
window.onload = Check();