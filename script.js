var playerUm;
var playerDois;

function efetuarLogin() {
    var usuario = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    if (usuario == "admin@admin.com.br" && senha == "admin") {
        document.getElementById("containerLogin").style.display = "none";
        document.getElementById("containerHome").style.display = "block";
    } else {
        alert("Dados incorretos");
    }
}

function efetuarLogout() {
    pararVideo1();
    pararVideo2();
    document.getElementById("containerHome").style.display = "none";
    document.getElementById("containerLogin").style.display = "flex";
}

window.addEventListener('load', function () {
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
});

function onYouTubeIframeAPIReady() {
    playerUm = new YT.Player('playerUm', {
        height: '450',
        width: '650',
        videoId: 'lti52XzclrY',
    });
    playerDois = new YT.Player('playerDois', {
        height: '450',
        width: '650',
        videoId: 'ClMZGJDtPEI',
    });
}

function pararVideo1() {
    playerUm.stopVideo();
}

function pararVideo2() {
    playerDois.stopVideo();
}


