const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const addBtn = document.getElementById("addBtn");
const bookList = document.getElementById("bookList");
const searchInput = document.getElementById("search");

let books = [];

addBtn.addEventListener("click", () => {
    const title = titleInput.value.trim();
    const author = authorInput.value.trim();

    if (title === "" || author === "") return;

    const book = { title, author };
    books.push(book);

    titleInput.value = "";
    authorInput.value = "";

    renderBooks();
});

function renderBooks(filter = "") {
    bookList.innerHTML = "";

    books
        .filter(book =>
            book.title.toLowerCase().includes(filter.toLowerCase()) ||
            book.author.toLowerCase().includes(filter.toLowerCase())
        )
        .forEach((book, index) => {
            const div = document.createElement("div");
            div.className = "book";

            div.innerHTML = `
                <div class="book-info">
                    <h3>${book.title}</h3>
                    <p>by ${book.author}</p>
                </div>
                <button class="remove-btn" onclick="removeBook(${index})">Remove</button>
            `;

            bookList.appendChild(div);
        });
}

function removeBook(index) {
    books.splice(index, 1);
    renderBooks(searchInput.value);
}

searchInput.addEventListener("input", (e) => {
    renderBooks(e.target.value);
});