import { createContext, useState, useCallback } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = useCallback(async () => {
    const res = await axios.get(`http://localhost:3001/books`);
    setBooks(res.data);
  }, []);

  const createBook = async (title) => {
    const response = await axios.post(`http://localhost:3001/books`, {
      title,
    });
    setBooks([...books, response.data]);
  };

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const editBookById = async (id, title) => {
    const res = await axios.put(`http://localhost:3001/books/${id}`, {
      title,
    });
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...res.data };
      } else {
        return book;
      }
    });
    setBooks(updatedBooks);
  };

  const valueToShare = {
    books,
    createBook,
    deleteBookById,
    editBookById,
    fetchBooks,
  };
  return <BooksContext.Provider value={valueToShare}>{children}</BooksContext.Provider>;
}
export { Provider };
export default BooksContext;
