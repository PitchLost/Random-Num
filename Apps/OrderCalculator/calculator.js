// Buttons: 
const one = document.getElementById('one');
one.value = 1;
const two = document.getElementById('two');
two.value = 2;
const three = document.getElementById('three');
three.value = 3;
const four = document.getElementById('four');
four.value = 4;
const five = document.getElementById('five');
five.value = 5;
const six = document.getElementById('six');
six.value = 6;
const seven = document.getElementById('seven');
seven.value = 7;
const eight = document.getElementById('eight');
eight.value = 8;
const nine = document.getElementById('nine');
nine.value = 9;
const zero = document.getElementById('zero')
zero.value = 0

const calcForm = document.getElementById('calcForm')
// Text Box:
let textBox = document.getElementById('text-box')
let textBoxValue = textBox.value;



// Add a running total for the calculation: 
let new_calc = 0

textBoxValue = new_calc

// Operators: 

const multiply = document.getElementById('multiply')
multiply.value = '*'

const plus = document.getElementById('plus')
plus.value = '+'

const minus = document.getElementById('minus')
minus.value = '-'

const divide = document.getElementById('divide')
divide.value = '/'

const del = document.getElementById('delete')
 del.value = ' ' 

 // Prev-calcs HTML elements

const prev_calcs = document.getElementById('prev-calcs') // Get the previous calculations HTML div
const nameBox = document.getElementById('name-box')

// Add a number to the text box

// Prevent Defualt Submission
calcForm.addEventListener('submit',e => { 
    e.preventDefault()
})
function add_number(element) { 
    let new_number = element.value; // Make a local new number variable to track what number is being added
    textBox.value = textBox.value += new_number // Update the text box with the new number in it
    new_number = 0 // Reset This variable
}

// Function to calculate the equation: 

function calculate() { 

  if (textBox.value == '' || nameBox.value == '') { 
    alert('Please fill out all the boxes')
  } else { 


  let answer = eval(textBox.value) // Get the answer of the equation
  let label = nameBox.value


  // Log the answers
  console.log(answer)
  console.log(label)

  // Prepare the HTML object
  let newObject = document.createElement('div') 
  let labelObject = document.createElement('strong')
  labelObject.innerHTML = label
  let valueObject =  document.createElement('p')
  valueObject.innerHTML = answer
  newObject.append(labelObject)
  newObject.append(valueObject)
  newObject.classList.add('addedDivs');
  prev_calcs.append(newObject)


  let allDivs = document.querySelectorAll('.addedDivs'); // Use '.' before class name
  console.log(allDivs);
  
  for (let i = 0; i < allDivs.length; i++) {
    // Use an immediately invoked function expression (IIFE) to capture the current value of `i`
    (function(index) {
      allDivs[index].addEventListener('click', function() {
        combineFunction(5);
        console.log('Current Item:',allDivs[index]); // Access the correct element using the captured index
      });
    })(i); // Pass `i` to the IIFE to capture its value
  }
  
  function combineFunction(num) {
    console.log('Passed Num =',num);
  }
  }}  