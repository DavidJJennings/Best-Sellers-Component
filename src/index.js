import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Book from "./Bookitem.js";
import books from "./books.js";

const BookList = () => {
  const getBook = (id) => {
    const found = books.find((book) => book.id === id);
    console.log(found);
  };
  return (
    <>
      <h1>Amazon Best Sellers</h1>
      <section className="bookList">
        {books.map((book, index) => {
          return (
            <Book {...book} key={book.id} getBook={getBook} rank={index} />
          );
        })}
      </section>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
