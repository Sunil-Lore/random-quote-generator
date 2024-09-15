const quotes = [
    "The best way to predict the future is to invent it.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "The only way to do great work is to love what you do.",
    "You miss 100% of the shots you don't take.",
    "The purpose of our lives is to be happy."
];

function newQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerText = quotes[randomIndex];
}

document.getElementById('new-quote').addEventListener('click', newQuote);

// Initialize with a quote
newQuote();
