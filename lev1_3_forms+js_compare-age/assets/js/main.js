console.log("läuft geschmeidig");

const firstAge = document.getElementById('first_age');
const secondAge = document.getElementById('second_age');
const result = document.querySelector('p');

function compareAge () {
let diff = firstAge.value - secondAge.value;
result.innerHTML = diff;
}

