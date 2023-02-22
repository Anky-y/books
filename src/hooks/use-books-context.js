import { useContext } from "react";
import BooksContext from "../context/books";
function useBookscontext() {
  return useContext(BooksContext);
}
export default useBookscontext;
