function fetchBooks(searchTerm){
  const apiKey = 'AIzaSyDAK51tNF3uhZYLUmUPJMQdt2n8oaEAifc';
  const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${apiKey}`;

  return fetch(url)
    .then(res => res.json())
    .then(data => data.items);
}

const form = document.getElementById('bookSearch');

function renderBooks(e) {
  e.preventDefault();
  
  const ul = document.createElement('ul');
  const books = document.getElementById('books');
  books.appendChild(ul);

  function createLi(title) {
    const li = document.createElement('li');
    li.innerText = title;
    return li;
  }

  const searchTerm = form.searchTerm.value;
  fetchBooks(searchTerm)
    .then(function(books) {
      books.forEach(book => {
        let title = book.volumeInfo.title;
        ul.appendChild(createLi(title));
      })
    })
}
form.addEventListener('submit', renderBooks); 
