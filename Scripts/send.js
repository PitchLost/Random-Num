// Variables: 
// Variables
const endpoint = 'http://localhost:3300/';
let dataToSend = {
    title: '',
    name: '',
    discord: '',
    description: '',
    reproduction: ''
};



// Functions: 

// Function to handle form submission and sending data to the server
async function sendData() {
    try {
        const response = await fetch(endpoint + 'ticketCreate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToSend)
        });

        if (!response.ok) {
            throw new Error('Failed to create ticket. Please try again.');
        }

        console.log('Ticket created successfully.');
        // Optionally handle response data or perform additional actions after creating ticket

    } catch (error) {
        console.error('Error creating ticket:', error.message);
    }
}
