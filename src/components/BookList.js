import BookShow from "./BookShow";
import useBookscontext from "../hooks/use-books-context";

function BookList() {
  const { books } = useBookscontext();
  const renderedBooks = books.map((book) => <BookShow key={book.id} book={book} />);
  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
