const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt"
  ];
  
  // Get references to HTML elements
  const quoteElement = document.getElementById("quote");
  const generateBtn1 = document.getElementById("generateBtn");
  
  // Add event listener to the button
  generateBtn1.addEventListener("click", generateQuote);
  
  // Function to generate a random quote
  function generateQuote() {
    // Get a random index from the quotes array
    const randomIndex = Math.floor(Math.random() * quotes.length);
    
    // Get the quote at the random index
    const randomQuote = quotes[randomIndex];
    
    // Update the quote element with the random quote
    quoteElement.textContent = randomQuote;
  }
  
  // Initial quote generation
  generateQuote();
  