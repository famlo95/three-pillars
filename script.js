class Bookshelf {
    constructor() {
        this.favoriteBooks = [];
    }

    addFavoriteBook (bookTitle) {
        const notValidWord = 'Great';
        if (!bookTitle.includes(notValidWord)) {
            this.favoriteBooks.push(bookTitle);
        } else {
            return;
        }
    }

    printFavoriteBooks () {
        console.log(`My ${String(this.favoriteBooks.length)} favorite books are:`);
        for (const title of this.favoriteBooks) {
            console.log(`-> ${title}`);
        }
    }
}

function loadBooks (callback) {
	fakeAjax(BOOK_API, callback); /* Add the books to Bookshelf */
    callback.printFavoriteBooks(); /* Print the name of the books */
}

let BOOK_API = "https://some.url/api";

loadBooks(new Bookshelf());

function fakeAjax(url,cb) {
	setTimeout(function fakeLoadingDelay(){
		cb([
			"A Song of Ice and Fire",
			"The Great Gatsby",
			"Crime & Punishment",
			"Great Expectations",
			"You Don't Know JS"
		]);
	},500);
}