import { useEffect, useState } from "react";
import { createBook, deleteBook, getBooks } from "../services/bookService";
import BookCard from "../components/BookCard/BookCard";
import BookForm from "../components/BookForm/BookForm";

import BookCardSkeleton from "../components/Skeleton/BookCardSkeleton";

function Books() {
  const [loading, setLoading] = useState(true);

  const [books, setBooks] = useState([]);

  const [nomi, setNomi] = useState("");

  const [muallif, setMuallif] = useState("");

  const [sahifa, setSahifa] = useState("");

  const [janr, setJanr] = useState("");

  async function fetchBooks() {
    try {
      setLoading(true);

      const response = await getBooks();

      setBooks(response.data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchBooks();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    const newBook = { nomi, muallif, sahifa, janr };

    try {
      const response = await createBook(newBook);

      setBooks([...books, response.data]);

      setNomi("");
      setMuallif("");
      setSahifa("");
      setJanr("");
    } catch (error) {
      console.log(error.message);
    }
  }

  async function removeBook(id) {
    try {
      await deleteBook(id);

      const filteredBooks = books.filter((book) => book._id !== id);

      setBooks(filteredBooks);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      <div>
        <BookForm
          nomi={nomi}
          setNomi={setNomi}
          muallif={muallif}
          setMuallif={setMuallif}
          sahifa={sahifa}
          setSahifa={setSahifa}
          janr={janr}
          setJanr={setJanr}
          handleSubmit={handleSubmit}
        />
      </div>
      <div>
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <BookCardSkeleton key={index} />
            ))
          : books.map((book) => (
              <BookCard key={book._id} book={book} removeBook={removeBook} />
            ))}
      </div>
    </>
  );
}

export default Books;
