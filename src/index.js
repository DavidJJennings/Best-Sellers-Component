import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { books } from "./books.js";

const BookList = () => {
  const getBook = (id) => {
    const found = books.find((book) => book.id === id);
    console.log(found);
  };
  return (
    <section className="bookList">
      {books.map((book) => {
        return <Book {...book} key={book.id} getBook={getBook} />;
      })}
    </section>
  );
};

const Book = (props) => {
  const { img, title, author, id, getBook } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <button onClick={() => getBook(id)}>Click Me</button>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
