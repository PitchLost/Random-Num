

document.addEventListener('DOMContentLoaded', () => {
    const ticketWindow = document.getElementById('viewTicket');
    console.log(ticketWindow)
    const ticketsDiv = document.getElementById('tickets');
    let windowOpen = false;

    // Function to display ticket details
    function viewTicket(ticket) {
        windowOpen = true;
        console.log('View ticket', '\n', ticket);

        // Example: Extracting details from ticket element
        const titleElement = ticket.querySelector('.title');
        const nameElement = ticket.querySelector('.name');
        const discordElement = ticket.querySelector('.discord')
        const descriptionElement = ticket.querySelector('.desc');
        const reproductionElement = ticket.querySelector('.repro')
        console.log(titleElement)
        

        // Display details in ticketWindow if elements are found
        if (titleElement && nameElement && descriptionElement) {
            const title = titleElement.textContent;
            const name = nameElement.textContent;
            const discord = discordElement.textContent;
            const description = descriptionElement.textContent;
            const reproduction = reproductionElement.textContent;


            // Display ticket details in ticketWindow
            document.getElementById('ticketT').textContent = title;
            document.getElementById('ticketN').textContent = name;
            document.getElementById('ticketD').textContent = discord;
            document.getElementById('ticketDe').textContent = description;
            document.getElementById('ticketR').textContent = reproduction;

            // Show ticketWindow

            ticketWindow.style.display = 'flex !important';
            
            console.log('Setting window to visible')
        }
    }

    // Event listener using event delegation to handle clicks on tickets
    ticketsDiv.addEventListener('click', e => {
        const clickedTicket = e.target.closest('.ticket'); // Find the closest parent with class 'ticket'
        if (clickedTicket) {
            viewTicket(clickedTicket);
        }
    });

    // Close ticketWindow when clicking outside of it
    document.addEventListener('click', e => {
        if (windowOpen && !ticketWindow.contains(e.target)) {
            ticketWindow.style.display = 'none';
            windowOpen = false;
        }
    });
});
