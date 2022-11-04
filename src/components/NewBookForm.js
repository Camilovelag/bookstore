import React from 'react';

const NewBookForm = () => (
  <div>
    <h2>Add a new book</h2>
    <form>
      <input type="text" placeholder="Book title" />
      <input type="text" placeholder="Book author" />
      <button type="submit">ADD BOOK</button>
    </form>
  </div>
);

export default NewBookForm;
