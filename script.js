const randomFacts = [
    "I live in Ireland",
    "I play Basketball",
    "STEM",
];

const fact = document.getElementById("fact");

let lastIndex = -1;

function randomFact() {

    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * randomFacts.length);
    } while (randomIndex === lastIndex);

    lastIndex = randomIndex;
    fact.textContent = randomFacts[randomIndex];
}