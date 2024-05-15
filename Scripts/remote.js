

// Variables
const endpoint = 'http://localhost:3300/';
let ticketsDOM;
let ticketsMobileDOM;
let responseData;
let ticketsData; 
let ticketsArray = []
let counter = 0

document.addEventListener('DOMContentLoaded', () => {
    ticketsDOM = document.getElementById('tickets');
    ticketsMobileDOM = document.querySelector('.section-to-hide')
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
    tickets.forEach(ticket => {
        const ticketElement = createTicketElement(ticket);
        ticketsDOM.appendChild(ticketElement);


    });

    addDel() // Add the delete button event listeners
}

// Helper function to create a ticket element
function createTicketElement(ticket) {
    const properties = [
        { label: 'Title', value: ticket.title, HTMLclass: 'title', labelClass: 'titleLabel' },
        { label: 'Name', value: ticket.name, HTMLclass: 'name', labelClass: 'titleLabel' },
        { label: 'Discord', value: ticket.discord, HTMLclass: 'discord', labelClass: 'titleLabel' },
        { label: 'Description', value: ticket.description, HTMLclass: 'desc', labelClass: 'titleLabel' },
        { label: 'Reproduction Steps', value: ticket.reproduction, HTMLclass: 'repro', labelClass: 'titleLabel' },
        { label: 'Ticket ID', value: ticket.id, HTMLclass: 'db-id', data_id: 'db-id', labelClass: 'titleLabel'}
    ];
    

    const ticketContainer = document.createElement('div');
    ticketContainer.classList.add('ticket');
    const delBtn = document.createElement('button')
    delBtn.innerHTML = 'Close'
    delBtn.classList.add('delBtn')
    ticketContainer.append(delBtn)

    properties.forEach(({ label, value, HTMLclass, data_id, labelClass }) => {
        const labelElement = document.createElement('strong');
        labelElement.textContent = `${label}: `;
        labelElement.classList.add(labelClass)

        const textElement = document.createElement('p');
        textElement.classList.add(HTMLclass)

        textElement.textContent = value;
        if (data_id) { 
            textElement.dataset.id = data_id
           
        }
        

        ticketContainer.appendChild(labelElement);
        ticketContainer.appendChild(textElement);
        
        
    });
    ticketsArray.push(ticketContainer)
    counter++
    console.log('Counter =',counter)
    return ticketContainer;
}

async function removeTicketFromDb(idx) { 
    console.log('ticket to remove =',idx)
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
    ticketsArray = []
    fetchAndDisplayTickets()
}
