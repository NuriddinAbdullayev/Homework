import React from "react";

export default function BookCard({ book, removeBook }) {
  return (
    <>
      <div className='bg-gray-400 p-6 rounded-2xl shadow-lg'>
        <h1 className='text-2xl font-bold mb-3'>{book.nomi}</h1>

        <p className='mb-2'>
          <span className='font-bold'>Muallif:</span> {book.muallif}
        </p>

        <p className='mb-2'>
          <span className='font-bold'>Sahifasi:</span> {book.sahifasi}
        </p>

        <p className='mb-5'>
          <span className='font-bold'>Janr:</span> {book.janr}
        </p>

        <button
          onClick={() => removeBook(book._id)}
          className='bg-red-500 text-white px-4 py-2 rounded-lg'>
          Delete
        </button>
      </div>
    </>
  );
}
