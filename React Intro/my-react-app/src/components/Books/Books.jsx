import { useEffect, useState } from "react";

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://booksbackend-3rhc.onrender.com/users")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      });
  }, []);

  return (
    <div>
      <h1>Books</h1>

      {books.map((book) => (
        <div
          key={book._id}
          style={{
            border: "1px solid white",
            marginBottom: "10px",
            padding: "10px",
          }}>
          <h2>{book.ism}</h2>

          <p>
            Muallif:
            {book.familiya}
          </p>

          <p>
            Sahifasi:
            {book.sahifasi}
          </p>

          <p>
            Janr:
            {book.janr}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Books;
