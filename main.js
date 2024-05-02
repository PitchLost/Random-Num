const min = 1;
const max = 1300;
let seed = 0;
let num = 0;
const button = document.getElementById('generate-button');
let num_display = document.getElementById('num_display')
let logic_display = document.getElementById('logic')
let logic = ''
let chance = ''

button.addEventListener('click', () => {
    generateNum();
});

function generateNum() {
    seed = Math.random() * (max - min) + min; // Generate a seed within the range [min, max)
    console.log('Seed =', seed);

    // Define probability thresholds for each outcome within the range [min, max)
    const thresholds = [
        { value: 100, outcome: 1, chance: '15' },   // Probability of getting 1: 15% 
        { value: 390, outcome: 2, chance: '15' },   // Probability of getting 2: 15% 
        { value: 585, outcome: 3, chance: '15' },   // Probability of getting 3: 15% 
        { value: 780, outcome: 4, chance: '15' },   // Probability of getting 4: 15%
        { value: 975, outcome: 5, chance: '15' },   // Probability of getting 5: 15%
        { value: 1105, outcome: 6, chance: '5' },  // Probability of getting 6: 5%
        { value: 1227, outcome: 7, chance: '2' },  // Probability of getting 7: 2% 
        { value: 1260, outcome: 8, chance: '1' },  // Probability of getting 8: 1% 
        { value: 1295, outcome: 9, chance: '1' },  // Probability of getting 9: 1% 
        { value: 1300, outcome: 10, chance: '1' }  // Probability of getting 10: 1% 
    ];

    // Determine the outcome based on the seed value
    for (const threshold of thresholds) {
        if (seed < threshold.value) {
            num = threshold.outcome;
            chance = threshold.chance
            break;
        }
    }

    console.log('Number =', num);
    // Set the text display on the page
    num_display.innerHTML = parseFloat(num)

    // Set the logic display: 

    logic = 'The generated seed was ' + seed + ' this means that the number will be ' + num + ' this number has a ' + chance + '% chance of being generated'
    logic_display.innerHTML = logic

}
