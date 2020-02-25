function fetchBook(searchTerm){
  const apiKey = 'AIzaSyDAK51tNF3uhZYLUmUPJMQdt2n8oaEAifc';
  const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${apiKey}`;

  return fetch(url)
    .then(res => res.json())
    .then(data => data.items);
}