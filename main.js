const min = 1;
const max = 1300;
let seed = 0;
let num = 0;
const button = document.getElementById('generate-button');
let num_display = document.getElementById('num_display')
let logic_display = document.getElementById('logic')
let prev_nums_dom = document.getElementById('prev-nums')
let logic = ''
let chance = ''
let prev_nums = []
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

button.addEventListener('click', () => {
    generateNum();
});

function generateNum() {
    seed = Math.random() * (max - min) + min; // Generate a seed within the range [min, max)

    if (seed <= 100) { 
        const local_min = 90; 
        const local_max = 100;
      num = Math.random() * (local_max - local_min) + local_min; // Generate 90-100
      chance = '1%'
    } else { 
        const local_min = 1; 
        const local_max = 89;
        num = Math.random() * (local_max - local_min) + local_min;
        chance = '15%'
    }
    num = Math.ceil(num)
    // Set the text display on the page
    num_display.innerHTML = parseFloat('.' + num)

    // Set the logic display: 

    logic = 'The generated seed was ' + seed + ' this means that the number will be ' + num + ' this number has a ' + chance + ' chance of being generated'
    logic_display.innerHTML = logic
    prev_nums.push(JSON.stringify(num))
    prev_nums_dom.innerHTML = prev_nums

}
