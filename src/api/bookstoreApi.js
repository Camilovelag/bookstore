const api = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const appId = 'A5M1SMeOFloqjitxesLY';
const bookItem = {
  item_id: 'item1',
  title: 'The Great Gatsby',
  author: 'John Smith',
  category: 'Fiction',
};

const createApp = async () => {
  const url = `${api}/apps/`;
  const response = await fetch(url, {
    method: 'POST',
  });
  const data = await response.text();
  console.log(data);
};

const addBooks = async (book) => {
  const url = `${api}/apps/${appId}/books`;
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    cache: 'no-cache',
    credentials: 'same-origin',
  });
  const data = await response.text();
  console.log(data);
};

const getBooks = async () => {
  const url = `${api}/apps/${appId}/books/`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
};

const deleteBooks = async () => {
  const id = bookItem.item_id;

  const url = `${api}/apps/${appId}/books/${id}`;
  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    cache: 'no-cache',
    credentials: 'same-origin',
  });
  const data = await response.text();
  console.log(data);
};

export default createApp;
export { getBooks, addBooks, deleteBooks };
