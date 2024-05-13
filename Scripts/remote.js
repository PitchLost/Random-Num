// Variables
const endpoint = 'http://localhost:3300/';
let ticketsDOM;

document.addEventListener('DOMContentLoaded', () => {
    ticketsDOM = document.getElementById('tickets');
    console.log('ticketsDOM:', ticketsDOM); // Check if ticketsDOM is defined

    // Call fetch and display tickets only if ticketsDOM exists
    if (ticketsDOM) {
        fetchAndDisplayTickets();
    }
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

        const responseData = await response.text();
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

        console.log('Data received from server successfully.');

        const ticketsData = await response.json();
        renderTickets(ticketsData);

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
}

// Helper function to create a ticket element
function createTicketElement(ticket) {
    const properties = [
        { label: 'Title', value: ticket.title },
        { label: 'Name', value: ticket.name },
        { label: 'Discord', value: ticket.discord },
        { label: 'Description', value: ticket.description },
        { label: 'Reproduction Steps', value: ticket.reproduction }
    ];

    const ticketContainer = document.createElement('div');
    ticketContainer.classList.add('ticket');
    const delBtn = document.createElement('button')
    delBtn.innerHTML = 'Close'
    delBtn.classList.add('delBtn')
    ticketContainer.append(delBtn)

    properties.forEach(({ label, value }) => {
        const labelElement = document.createElement('strong');
        labelElement.textContent = `${label}: `;

        const textElement = document.createElement('p');
        textElement.textContent = value;

        ticketContainer.appendChild(labelElement);
        ticketContainer.appendChild(textElement);
    });

    addDel()
    return ticketContainer;
}
