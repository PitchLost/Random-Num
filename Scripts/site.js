// Variables:





// Functions:

function windowOpen() { 
    window.open('createticket.html')
}

function addDel() {
    const delBtns = document.querySelectorAll('.delBtn');

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
        // Perform deletion logic (e.g., remove ticket element from DOM)
        console.log(ticket);
        const testHTML = ticket.querySelector('.title')
        console.log(testHTML)
    } else {
        console.error('Ticket element not found');
    }
}


// Event listeners


