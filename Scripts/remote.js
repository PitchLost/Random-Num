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

// Functions
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

}