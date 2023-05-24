import { useEffect, useState } from 'react';

const BookDetails = ({bookId}) => {
  const [book, setBook] = useState(null);
  useEffect(() => {
		fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}`)
			.then((response) => response.json())
			.then((data) => {
        console.log(data);
				setBook(data);
			})
			.catch((error) => console.error(error));
	}, [bookId]);

    if (!book) {
        return <div>Loading...</div>
    }

	return (
		<div className="book">
			<h1>{book.volumeInfo.title}</h1>
			<h2>{book.volumeInfo.authors.join(', ')}</h2>
    	<div>
        <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
        <ul>
          <li>Language: {book.volumeInfo.language}</li>
          <li>{book.volumeInfo.categories.join(', ')}</li>
          <li>{book.saleInfo.country}</li>
          <li>{book.volumeInfo.pageCount} pages</li>
        </ul>
      </div>
      <p>{book.volumeInfo.description}</p>
		</div>
	);
}

export default BookDetails