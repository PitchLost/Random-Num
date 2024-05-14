// Variables:





// Functions:

function windowOpen() { 
    window.open('createticket.html')
}

function addDel() {
    const delBtns = document.querySelectorAll('.delBtn');
    console.log('Adding delete buttons', delBtns)
    delBtns.forEach(button => {
        button.addEventListener('click', e => {

            // Prevent the default behavior of the button (e.g., form submission)
            e.preventDefault();

            // Confirm deletion with user (optional)
            const confirmDelete = confirm('Are you sure you want to delete this ticket?');
            
            if (confirmDelete) {
                // Get the specific ticket or element related to the button (if applicable)
                const ticket = button.parentElement // Adjust based on your HTML structure
                
                // Call a function to handle deletion for this specific ticket
                handleDeleteTicket(ticket);

                // Stop further propagation of the click event to prevent multiple executions
                e.stopImmediatePropagation();
            }
        });
    });
}

function handleDeleteTicket(ticket) { 
    console.log('Deleting: ', ticket);

    if (ticket) {
        // Use a for loop to iterate through each ticket
       for (let i = 0; i < ticketsArray.length; i++) { 
        if (ticketsArray[i] == ticket) { 
            console.log('Ticket found at index:',i)
            removeTicketFromDb(i)
        } 
       }
    } else {
        console.error('Ticket element not found');
    }
}


// Event listeners


