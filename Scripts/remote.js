// Variables
const endpoint = 'http://localhost:3300/';
let ticketsDOM;
let responseData;
let ticketsData; 
let ticketsArray = []

document.addEventListener('DOMContentLoaded', () => {
    ticketsDOM = document.getElementById('tickets');
    // Call fetch and display tickets only if ticketsDOM exists
    
    initConnection( )
});


// Function to initialize connection with the server
async function initConnection() {
    try {
        const response = await fetch(endpoint + 'connect', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        responseData = await response.text();
        console.log('Connected to server:', responseData);
        

        // Fetch and display tickets after successful connection
        await fetchAndDisplayTickets();

    } catch (error) {
        console.error('Error connecting to server:', error.message);
    }
}

// Function to fetch tickets from the server and display them
async function fetchAndDisplayTickets() {
    try {
        const response = await fetch(endpoint + 'getTickets', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Internal server error. Check your network and try again.');
        }
        ticketsData = await response.json();
        renderTickets(ticketsData);
        console.log('Tickets Fetched:',ticketsData)

    } catch (error) {
        console.error('Error fetching or processing data:', error.message);
    }
}

// Function to render tickets on the DOM
function renderTickets(tickets) {
    ticketsDOM.innerHTML = ''; // Clear previous content

    let tempCount = 0
    tickets.forEach(ticket => {
        const ticketElement = createTicketElement(ticket);
        ticketsDOM.appendChild(ticketElement);
        tempCount++ 
        console.log(tempCount)

    });
    console.log('Finished rendering tickets', '\n', ticketsArray)
    addDel() // Add the delete button event listeners
}

// Helper function to create a ticket element
function createTicketElement(ticket) {
    const properties = [
        { label: 'Title', value: ticket.title, class: 'title' },
        { label: 'Name', value: ticket.name, class: 'name' },
        { label: 'Discord', value: ticket.discord, class: 'discord' },
        { label: 'Description', value: ticket.description, class: 'desc' },
        { label: 'Reproduction Steps', value: ticket.reproduction, class: 'repro' }
    ];
    

    const ticketContainer = document.createElement('div');
    ticketContainer.classList.add('ticket');
    const delBtn = document.createElement('button')
    delBtn.innerHTML = 'Close'
    delBtn.classList.add('delBtn')
    ticketContainer.append(delBtn)

    properties.forEach(({ label, value, HTMLclass }) => {
        const labelElement = document.createElement('strong');
        labelElement.textContent = `${label}: `;

        const textElement = document.createElement('p');
        textElement.classList.add(HTMLclass)
        textElement.textContent = value;
        

        ticketContainer.appendChild(labelElement);
        ticketContainer.appendChild(textElement);
        
        
    });
    ticketsArray.push(ticketContainer)
    return ticketContainer;
}

async function removeTicketFromDb(idx) { 
    console.log('ticket to remove =',idx)
    idx++
    console.log(idx)
    const requestData = {
        idx: idx
      };
      
   

    const response = await fetch(endpoint + 'removeTicket', { 
        method: 'POST', 
        body: JSON.stringify(requestData), 
        headers: { 
            'Content-Type': 'application/json'
        }
    })
    console.log(response.text())
    fetchAndDisplayTickets()
}
