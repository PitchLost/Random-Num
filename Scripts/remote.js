// Variables
let data_to_send = { 
    title: '', 
    name: '', 
    discord: '',
    description: '', 
    reproduction: ''
}

const titleDOM = document.getElementById('ticket-label')
const nameDOM = document.getElementById('ticket-user')
const discordDOM = document.getElementById('ticket-discord')
const descDOM = document.getElementById('ticket-desc')
const reproductionDOM = document.getElementById('ticket-reproduction')
const ticketsDOM = document.getElementById('tickets')
const newTicket = document.createElement('div')

const titleText = 'Title'; 
const nameText = 'Name'; 
const discordText = 'Discord'
const descText = 'Description'
const reproText = 'Reproduction Text'

const headers = ['Ticket Title', 'Name', 'Discord', 'Description', 'Reproduction Steps']


// On page load: 
document.addEventListener('DOMContentLoaded', _ => { 
    init_connection()
})


// Functions


async function init_connection() {
    try {
        const response = await fetch('http://localhost:3300/connect', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Use response.text() to get the response body as text
        const responseData = await response.text();

        // Log the response data to the console
        console.log(responseData);
    } catch (error) {
        // Handle fetch errors or network errors
        console.error('Error connecting to server:', error.message);
    }
}


async function sendData() { 

    data_to_send = { 
        title: titleDOM.value, 
        name: nameDOM.value, 
        discord: discordDOM.value, 
        description: descDOM.value, 
        reproduction: reproductionDOM.value 
    }


    console.log(data_to_send)
    const response = await fetch('http://localhost:3300/ticketCreate', { 
        body: JSON.stringify(data_to_send), 
        method: 'POST', 
        headers: { 
            'Content-Type': 'application/json'
        }

    })
    console.log(response)

}

async function getTickets() {
    console.log('Getting data from database');

    try {
        const response = await fetch('http://localhost:3300/getTickets', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });

        if (!response.ok) {
            throw new Error('Internal server error. Check your network and try again.');
        }

        console.log('Data received from server successfully.');

        const db_items = await response.json();
        console.log('Data from database:', db_items);

        // Clear previous content in ticketContainer
        ticketsDOM.innerHTML = '';

        // Iterate through each ticket and create a new display element
        db_items.forEach(ticket => {
            const ticketContainer = document.createElement('div');
            ticketContainer.classList.add('ticket');

            // Display ticket properties in a structured format
            const ticketTitle = document.createElement('header');
            ticketTitle.textContent = ticket.title;

            const nameLabel = document.createElement('strong');
            nameLabel.textContent = 'Name: ';
            const nameText = document.createElement('p');
            nameText.textContent = ticket.name
            console.log('Name:',ticket.name)
            

            const discordLabel = document.createElement('strong');
            discordLabel.textContent = 'Discord: ';
            const discordText = document.createElement('p');
            discordText.textContent = ticket.discord
            console.log('Discord:',ticket.discord)

            const descLabel = document.createElement('strong');
            descLabel.textContent = 'Description: ';
            const descText = document.createElement('p');
            descText.textContent = ticket.description

            const reproLabel = document.createElement('strong');
            reproLabel.textContent = 'Reproduction Steps: ';
            const reproText = document.createElement('p');
            reproText.textContent = ticket.reproduction

            ticketContainer.appendChild(ticketTitle);
            ticketContainer.appendChild(nameLabel)
            ticketContainer.append(nameText)
            ticketContainer.appendChild(discordLabel)
            ticketContainer.append(discordText)
            ticketContainer.appendChild(descLabel)
            ticketContainer.append(descText)
            ticketContainer.appendChild(reproLabel)
            ticketContainer.append(reproText)
            ticketsDOM.append(ticketContainer)




        });

    } catch (error) {
        console.error('Error fetching or processing data:', error.message);
    }
}
