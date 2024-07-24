//when the button is clicked:
//  pop up a form that takes input from the user
//  when submit button is pressed:
//      call the function that extracts data from the form and fills it into the constructor
//      displayBooks();




// add a book button
let formbutton = document.querySelector(".bookbutton");
formbutton.addEventListener("click", showForm);


// the form submit btn.
let booksubmit = document.querySelector(".submitbtn");
booksubmit.addEventListener("click", addBookToLibrary);


// the dialog box
const dialog = document.querySelector("dialog");

//the book div
let bookscontainer = document.querySelector('.books');









let library = [];

function Book(title, author, pages, read){
    // constructs the book.
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function showForm(){
        // display an html form for user to enter the book data.

        //empty it from last use.
        let form =  document.querySelector('.bookform');
        form.reset();
        
        dialog.showModal()
}


function addBookToLibrary(){
    // called when submitting the book is pressed.

    // tries to send data to server. we prevent the default, close instead.
    event.preventDefault();
    dialog.close();


    //grab the forms input data
    let title = document.querySelector(".titleinput").value;
    let author = document.querySelector(".authorinput").value;
    let pages = document.querySelector(".pagesinput").value;
    let read = document.querySelector(".readinput").checked;

    // feed it into constructor.
    let book = new Book(title, author, pages, read);


    // push the new Book() instance to the library array.
    library.push(book);

    // display new book list. this is a list of objects being passed into the function
    displayBooks(library);
}

function displayBooks(objectlist){
    bookscontainer.textContent = '';

    objectlist.forEach((book, index) => {
        //for each book in our list:
        
        //create the card layout.
        let card = document.createElement('Div');
        let cardhead = document.createElement('Div');
        let cardbody = document.createElement('Div');

        //books title
        let cardtitle = document.createElement('h1');
        cardtitle.textContent = book.title;
        //delete button
        let cardremove = document.createElement('button');
        cardremove.textContent = "x";
        cardremove.classList.add('bookdelbtn');
        cardremove.onclick = function() {
            card.remove();
            objectlist.remove(book);
        }

        //append to the head
        cardhead.appendChild(cardtitle);
        cardhead.appendChild(cardremove);

        // now the body information
        let cardauthor = document.createElement('p');
        cardauthor.textContent = book.author;

        let cardpages = document.createElement('p');
        cardpages.textContent = book.pages;

        let cardread = document.createElement('p');
        cardread.textContent = book.read;
        //append it to the body
        cardbody.appendChild(cardauthor);
        cardbody.appendChild(cardpages);
        cardbody.appendChild(cardread);

        //now we add the classes
        card.classList.add('card');
        cardhead.classList.add('cardhead');
        cardbody.classList.add('cardbody');

        //add the head and body to the card
        card.appendChild(cardhead);
        card.appendChild(cardbody);
    

        //append the card to the book div
        let bookdiv = document.querySelector('.books');
        bookdiv.appendChild(card);
        
        })
        
    }















