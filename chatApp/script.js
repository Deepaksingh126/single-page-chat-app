const left = document.getElementById('left');
const right = document.getElementById('right');
const chat = document.getElementById('chat');
const input = document.getElementById('input');

// Helper function to handle message sending
const sendMessage = (messageType) => {
    const message = input.value.trim();
    if (!message) {
        console.warn('Message cannot be empty');
        return;
    }

    // Create new message element
    const messageDiv = document.createElement('div');
    messageDiv.id = messageType;
    messageDiv.textContent = message;
    chat.appendChild(messageDiv);

    // Clear input and scroll to bottom
    input.value = '';
    chat.scrollTop = chat.scrollHeight;
}

// Add event listeners for both buttons
left.addEventListener('click', () => sendMessage('client'));
right.addEventListener('click', () => sendMessage('owner'));

// Also handle enter key press
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage('owner');
    }
});