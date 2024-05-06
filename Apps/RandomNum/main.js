const min = 1;
const max = 1000;
let seed = 0;
let num = 0;
const button = document.getElementById('generate-button');
let num_display = document.getElementById('num_display')
let logic_display = document.getElementById('logic')
let prev_nums_dom = document.getElementById('prev-nums')
let logic = ''
let chance = ''
let prev_nums = []
const clear_btn = document.getElementById('clear')
   // Define probability thresholds for each outcome within the range [min, max)

button.addEventListener('click', () => {
    generateNum();
});

clear_btn.addEventListener('click',_ => { 
    prev_nums = []
    setDisplays()
})

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
        chance = '10%'
    }
    setDisplays()
}


function setDisplays() { 
    num = Math.ceil(num)
    // Set the text display on the page
    num_display.innerHTML = parseFloat('.' + num)

    // Set the logic display: 

    logic = 'The generated seed was ' + seed + ' this means that the number will be ' + num + ' this number has a ' + chance + ' chance of being generated'
    logic_display.innerHTML = logic
    prev_nums.push(JSON.stringify(num))
    prev_nums_dom.innerHTML = prev_nums
}