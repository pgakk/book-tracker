import React from 'react';

const ScrollBar = (props) => {
	return (
		<div style={{border: '1px solid black', overflow:'scroll', height: '400px'}}>
		{props.children}
		</div>
		);
};

export default ScrollBar;