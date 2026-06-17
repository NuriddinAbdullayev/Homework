import React from "react";

export default function BookForm({
  nomi,
  setNomi,
  muallif,
  setMuallif,
  sahifa,
  setSahifa,
  janr,
  setJanr,
  handleSubmit,
}) {
  return (
    <form
      onSubmit={handleSubmit}
      className='bg-gray-600 p-6 rounded-2xl shadow-lg flex flex-col gap-4 mb-10'>
      <input
        type='text'
        placeholder='Book name'
        value={nomi}
        onChange={(e) => setNomi(e.target.value)}
        className='border p-3 rounded-lg'
      />

      <input
        type='text'
        placeholder='Author'
        value={muallif}
        onChange={(e) => setMuallif(e.target.value)}
        className='border p-3 rounded-lg'
      />

      <input
        type='number'
        placeholder='Pages'
        value={sahifa}
        onChange={(e) => setSahifa(e.target.value)}
        className='border p-3 rounded-lg'
      />

      <input
        type='text'
        placeholder='Genre'
        value={janr}
        onChange={(e) => setJanr(e.target.value)}
        className='border p-3 rounded-lg'
      />

      <button className="bg-black text-white py-3 rounded-lg sm:bg-amber-300 md:bg-amber-700 sm:text-4xl">Add Book</button>
    </form>
  );
}
