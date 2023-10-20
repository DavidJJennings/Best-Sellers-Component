const Book = (props) => {
  const { img, title, author, id, getBook, rank } = props;

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <button onClick={() => getBook(id)}>Click Me</button>
      <span className="rank"> {`#${rank + 1}`}</span>
    </article>
  );
};
export default Book;
