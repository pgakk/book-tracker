import React from 'react';
import Book from './Book';

const BookArray = ({books}) => {
	return (
		<div>
		  {
		  	books.map((data, i) => {
		  		return (
		  			<Book
		  			  key ={books[i].id}
		  			  name={books[i].username}
		  			  author={books[i].name}
		  			/>
		  			);
		  	})
		  }
	  </div>
	);
};

export default BookArray;
