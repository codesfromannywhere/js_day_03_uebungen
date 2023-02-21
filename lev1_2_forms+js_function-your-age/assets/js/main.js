console.log("läuft hier");

function getAge () {
    const birth = document.getElementById('input').value;
    let age = document.getElementById('age');
    console.log (2023 - birth);
    document.write(2023 - birth);
    age.innerHTML = (2023 - birth);
}