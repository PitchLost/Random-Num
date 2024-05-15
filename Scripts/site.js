// Variables:





// Functions:

function windowOpen() { 
    window.open('createticket.html')
}
function addDel() {
    const delBtns = document.querySelectorAll('.delBtn');
    console.log('Adding delete buttons', delBtns);
    
    delBtns.forEach(button => {
        button.addEventListener('click', e => {
            e.preventDefault();

            
            
            
                const ticket = button.parentElement; // Assuming the parent element is the ticket container

                // Retrieve the data-id attribute value from the ticket element
                handleDeleteTicket(ticket)

                // Stop further propagation of the click event to prevent multiple executions
                e.stopImmediatePropagation();
            
        })
    });
}

function handleDeleteTicket(ticketId) { 
    console.log('Deleting ticket with ID:', ticketId);

    // Call your deletion logic here, using the ticketId parameter
    // For example:
    // removeTicketFromDb(ticketId);
}


function handleDeleteTicket(ticket) { 
    console.log('Deleting: ', ticket);

    if (ticket) {
        // Use a for loop to iterate through each ticket
       for (let i = 0; i < ticketsArray.length; i++) { 
        console.log('i =',i)
        if (ticketsArray[i] == ticket) { 
            console.log('Ticket found at index:',i)
            console.log('Test:', '\n', ticketsData)
           let targetId = ticketsData[i]
           targetId = targetId.id;
           targetId--
           console.log('Target Id = ',targetId)
           
            
            removeTicketFromDb(i)
            return
        } 
       }
    } else {
        console.error('Ticket element not found');
    }
}


// Event listeners


