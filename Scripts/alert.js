
const messageBoxDOM = document.getElementById('message-box')
let message;

function messageBox(msg) { 

    messageBoxDOM.style.visibility = 'visible'
    message = document.createElement('strong')
    message.textContent = msg;
    messageBoxDOM.appendChild(message)
    console.log(msg)
    setTimeout(_ => {
        messageBoxDOM.style.visibility = 'hidden' 
        message = ''
        message.textContent = ''
        messageBoxDOM.innerHTML = ''
    },3000)
    
}