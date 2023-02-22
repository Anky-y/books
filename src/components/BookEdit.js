import { useState } from "react";
import useBookscontext from "../hooks/use-books-context";
function BookEdit({ book, onSubmit }) {
  const [title, setTile] = useState(book.title);
  const { editBookById } = useBookscontext();

  const handleChange = (e) => {
    setTile(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
    editBookById(book.id, title);
  };
  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>Title</label>
      <input value={title} onChange={handleChange} className="input" type="text" />
      <button className="button is-primary">Save</button>
    </form>
  );
}

export default BookEdit;
