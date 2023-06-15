fav = []; //favorties quotes array
quotes = [
  //quotes array
  {
    quote: "Be yourself, everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    quote:
      "Two things are infinite: the universe and human stupidity, and I'm not sure about the universe.",
    author: "Albert Einstein",
  },
  {
    quote: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
  {
    quote: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote:
      "In the end, it's not the years in your life that count. It's the life in your years.",
    author: "Abraham Lincoln",
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    quote:
      "Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend.",
    author: " Albert Camus",
  },
  {
    quote: "If you tell the truth, you don't have to remember anything.",
    author: "Mark Twain",
  },
];

previousNumber = Math.floor(Math.random() * 13); //generates a random number between 0 and 12
document.getElementsByClassName("quote")[0].innerText =
  '"' + quotes[previousNumber].quote + '"'; //fills the quote
generatedQuote = quotes[previousNumber].quote; //store the generated quote
document.getElementsByClassName("author")[0].innerText =
  "by " + quotes[previousNumber].author; //fills the author of the quote
generatedAuthor = quotes[previousNumber].author; //store the generated author

function Generate() {
  do {
    //makes sure its different from the previous number
    randomNumber = Math.floor(Math.random() * 13);
  } while (randomNumber == previousNumber);
  previousNumber = randomNumber;
  document.getElementsByClassName("quote")[0].innerText =
    '"' + quotes[randomNumber].quote + '"';
  generatedQuote = quotes[previousNumber].quote;
  document.getElementsByClassName("author")[0].innerText =
    "by " + quotes[randomNumber].author;
  generatedAuthor = quotes[previousNumber].author;
}

function save() {
  const favObject = {
    //creates an object of the favorite quote and its author
    quote: generatedQuote,
    author: generatedAuthor,
  };
  fav.push(favObject); //add that object to the favorites quotes array
  localStorage.setItem("favoriteQuotes", JSON.stringify(fav)); //Storing the fav array in local storage
}
