const messageBoxDOM = document.getElementById('message-box');
const messageDOM = document.createElement('strong')
let boxShown = false; // Track if the message box is currently shown

function messageBox(msg) {
    // Update the message box content

    messageDOM.textContent = msg;
    messageBoxDOM.append(messageDOM)
    
    // Set the message box to be visible
    messageBoxDOM.style.visibility = 'visible';
    boxShown = true;

    // Use setTimeout to hide the message box after 3000 milliseconds (3 seconds)
    setTimeout(() => {
        // Only hide the message box if it's currently shown
        if (boxShown) {
            messageBoxDOM.style.visibility = 'hidden';
            messageBoxDOM.textContent = ''; // Clear the message content
            boxShown = false;
        }
    }, 3000);
}
