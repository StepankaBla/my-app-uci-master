const catData = [
    { color: 'je', size: 'malá', shape: 'kruh', image: './je.jpg' },
    { color: 'ju', size: 'velká', shape: 'čtverec', image: './ju.jpg' },
    { color: 'la', size: 'střední', shape: 'trojúhelník', image: './la.jpg' },
    // ... další kočky
];

let correctOption;

function generateCatProperties() {
    const randomCat = catData[Math.floor(Math.random() * catData.length)];
    document.getElementById('color').textContent = randomCat.color;
    document.getElementById('size').textContent = randomCat.size;
    document.getElementById('shape').textContent = randomCat.shape;

    // Nastavíme obrázky pro možnosti
    for (let i = 1; i <= 3; i++) {
        const optionImage = document.getElementById('option' + i);
        optionImage.src = randomCat.image;
        optionImage.alt = 'Kočka ' + i;
    }

    correctOption = 'option' + (Math.floor(Math.random() * 3) + 1); // Náhodně vybraná správná možnost
}

function checkGuess(option) {
    const resultElement = document.getElementById('result');
    if (option === correctOption) {
        resultElement.textContent = 'Správně! Odpověď je správná.';
        generateCatProperties(); // Generujeme nové vlastnosti a obrázky po správné odpovědi
    } else {
        resultElement.textContent = 'Špatně! Odpověď je nesprávná.';
    }
}

window.onload = function() {
    generateCatProperties();
};
