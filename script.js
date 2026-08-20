const randomFacts = [
    "I enjoy playing Basketball.",
    "My first ever game was a Roblox game called 'Survive Spongebob The Killer'.",
    "My first business was where me and my friend made paintings and sold them on the street.",
    "The first programming language I learned was Lua, but I wasn't any good.",
    "My favourite video game is Call Of Duty Infinite Warfare.",
    "My favourite subject in school is Business and Science."
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