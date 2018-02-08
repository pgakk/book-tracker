import React from 'react';

const Book = ({name, author}) => {
	return (
	  <div className="tc bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5">
	    <img alt="random" src='https://source.unsplash.com/random/200x200'/>
	    <h2>{name}</h2>
	    <h3>{author}</h3>
	  </div>
	);
};

export default Book;