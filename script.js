const generateBtn = document.getElementById('generateButton');
const resetBtn = document.getElementById('resetButton');
const spellArea = document.getElementById('spellArea');
const ingredients = document.querySelectorAll('#ingredientsList li');

let countdownInterval;

// Helper: Gets a random item from an array and a bright HSL color
const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)].textContent;

// hsl is Hue, Saturation, Lightness
const getRandomColor = () => `hsl(${Math.floor(Math.random() * 360)}, 70%, 60%)`;

function startSpellGeneration() {
    clearInterval(countdownInterval);
    generateBtn.disabled = true;

    let timeLeft = 3;
    spellArea.textContent = timeLeft;

    countdownInterval = setInterval(() => {
        timeLeft--;

        if (timeLeft > 0) {
            spellArea.textContent = timeLeft;
        } else {
            clearInterval(countdownInterval);

            // Generate spell and style the area instantly
            spellArea.textContent = `🪄 Casted: ${getRandomItem(ingredients)}!`;
            spellArea.style.backgroundColor = getRandomColor();

            generateBtn.disabled = false;
        }
    }, 1000);
}

function resetSpellbook() {
    clearInterval(countdownInterval);

    // Reset layout and enable button
    spellArea.innerHTML = '<span style="font-weight: normal; color: #666;">The spellbook is idle. Click generate!</span>';
    spellArea.style.backgroundColor = '#f0f0f0';
    generateBtn.disabled = false;
}

// Event Listeners
generateBtn.addEventListener('click', startSpellGeneration);
resetBtn.addEventListener('click', resetSpellbook);