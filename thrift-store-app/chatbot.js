// chatbot.js

// Function to generate a random question
function getRandomQuestion() {
    const questions = [
        "How can I assist you today?",
        "What information are you looking for?",
        "Do you have any specific queries?",
        "How can I help you with your task?"
    ];
    return questions[Math.floor(Math.random() * questions.length)];
}

// Function to provide suggestions based on user input
function getSuggestions(input) {
    const suggestions = [];
    if (input.toLowerCase().includes('reuse cloth')) {
        suggestions.push("Consider turning it into a tote bag.");
        suggestions.push("Try making a patchwork quilt.");
        suggestions.push("Use it as a cleaning rag.");
    } else if (input.toLowerCase().includes('fashionable')) {
        suggestions.push("Pair it with high-waisted jeans for a trendy look.");
        suggestions.push("Accessorize with statement jewelry.");
        suggestions.push("Layer it with a stylish jacket.");
    } else if (input.toLowerCase().includes('support')) {
        suggestions.push("You can reach out to our customer service for help.");
        suggestions.push("Visit our FAQ section for common inquiries.");
        suggestions.push("Chat with a live agent for immediate assistance.");
    } else {
        suggestions.push("Try asking about our services.");
        suggestions.push("You can inquire about pricing.");
        suggestions.push("Ask for support options.");
        suggestions.push("Check our FAQ section for more details.");
    }
    return suggestions;
}

// Function to handle sending messages
function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    const responseArea = document.getElementById('chatbot-questions');
    if (userInput) {
        responseArea.innerHTML += `<p>User: ${userInput}</p>`;
        const suggestions = getSuggestions(userInput);
        suggestions.forEach(suggestion => {
            responseArea.innerHTML += `<p>Bot Suggestion: ${suggestion}</p>`;
        });
        document.getElementById('user-input').value = ''; // Clear input
    }
}

// Function to toggle chatbot visibility
function toggleChatbot() {
    const chatbotPopup = document.getElementById('chatbot-popup');
    chatbotPopup.style.display = chatbotPopup.style.display === 'none' ? 'block' : 'none';
}

// Initialize the chatbot with a random question after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('question').innerText = getRandomQuestion();
});

// Example usage
// console.log(getRandomQuestion()); // Logs a random question
// console.log(getSuggestions(userInput)); // Call this with user input to get suggestions
