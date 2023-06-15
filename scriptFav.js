//Retrieving the fav array from local storage
const storedQuotes = localStorage.getItem("favoriteQuotes");
const fav = JSON.parse(storedQuotes);

display = document.getElementsByClassName("display")[0]; //gets the display div for the quotes and their authors
for (oneObject of fav) {
  container = document.createElement("div"); //creates the container div
  container.setAttribute("class", "Container"); //set its class to container
  container.setAttribute("id", "Ctn"); //set its id to ctn

  quoteAuthor = document.createElement("div"); // creates the quoteAuthor div
  quoteAuthor.setAttribute("class", "quoteAuthor"); //sets its class to quoteAuthor
  container.appendChild(quoteAuthor); //puts the quoteAuthor div inside the container div

  quote = document.createElement("h3"); //creates an h3 element to put in the quote
  quote.setAttribute("class", "quote"); //sets its class to quote
  quote.innerText = '"' + oneObject.quote + '"'; //fills the h3 with the quote
  quoteAuthor.appendChild(quote); //puts the quote inside the quoteAuthor div

  author = document.createElement("p"); //creates a p element to put in the author
  author.setAttribute("class", "author"); //sets its class  to author
  author.innerText = "by " + oneObject.author; // fills the p with the author
  quoteAuthor.appendChild(author); //puts the author inside the quoteAuthor div

  display.appendChild(container); //and finally puts the container inside the big display div
}
