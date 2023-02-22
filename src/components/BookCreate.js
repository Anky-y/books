import { useState } from "react";
import useBookscontext from "../hooks/use-books-context";

function BookCreate() {
  const [bookName, setBookName] = useState("");

  const { createBook } = useBookscontext();

  const handleChange = (e) => {
    setBookName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createBook(bookName);
    setBookName("");
  };
  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label></label>
        <input className="input" value={bookName} type="text" onChange={handleChange} />
        <button className="button">Create!</button>
      </form>
    </div>
  );
}

export default BookCreate;
