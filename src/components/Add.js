import React, {Component} from 'react';

const Add = ({childcallback}) => {
  	console.log("in add");
  	console.log({childcallback});
  	
		return (
		<div className="ma4" style={{display:'flex', justifyContent:'center'}}>
			<div className="secondary pa3">
				<form onSubmit={childcallback}>
		  		<input className="mb2" type="text" placeholder="Book Name" required/><br/>
		  		<input className="mb2" type="text" placeholder="Author Name" required /><br/>
		  		<button type="submit" className="b f3 ph3 pv2 input-reset ba b--black bg-transparent grow pointer dib">Add Book</button>
		  	</form>
			</div>
		</div>
	)
	}
// }

export default Add;