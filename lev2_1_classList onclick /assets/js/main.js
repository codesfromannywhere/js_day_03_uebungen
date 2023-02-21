console.log("läuft bei dir"); 

const headline = document.getElementById('headline');

function changeHeadline() {
    document.getElementById('headline').classList.add('background');
}

function resetHeadline() {
    document.getElementById('headline').classList.remove('background');
}