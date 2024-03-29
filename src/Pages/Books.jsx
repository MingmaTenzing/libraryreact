import React, { useState } from "react";
import Book from "../components/ui/Book";
import { books } from "../data";

const Books = ({ books: initialBooks }) => {
  const [booksdata, setBooksData] = useState(initialBooks);
  
   
    
  
  function filterBooks(filter) {
    if (filter === "LOW_TO_HIGH") {
      setBooksData(
        books
          .slice()
          .sort(
            (a, b) =>
              (a.salePrice || a.originalPrice) -
              (b.salePrice || b.originalPrice)
          )
      );
    }

    if (filter === "HIGH_TO_LOW") {
      setBooksData(
        books
          .slice()
          .sort(
            (a, b) =>
              (b.salePrice || b.originalPrice) -
              (a.salePrice || a.originalPrice)
          )
      );

    }

    if (filter === "RATING") {
      setBooksData(books.slice().sort((a, b) => b.rating - a.rating));
    }
  }
  console.log(books);
  return (
    <div id="books__body">
      <main className="books__main">
        <section>
          <div className="books__container">
            <div className="row">
              <div className="books__header">
                <h2 className="section__title books__header--title">
                  All Books
                </h2>
                <select
                  id="filter"
                  defaultValue="DEFAULT"
                  onChange={(event) => filterBooks(event.target.value)}
                >
                  <option value="DEFAULT" disabled>
                    {" "}
                    Sort
                  </option>
                  <option value="LOW_TO_HIGH"> Price, Low to High</option>
                  <option value="HIGH_TO_LOW">Price, High to Low</option>
                  <option value="RATING">RATING</option>
                </select>
              </div>
              <div className="books">
                {booksdata.map((book) => (
                  <Book book={book} key={book.id} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Books;
