import React, {useEffect, useState} from 'react'
import {InputGroup, FormControl} from 'react-bootstrap';
export default function Input(props) {

	return (<>
<InputGroup className="">
    <FormControl
      placeholder="Margarita"
      aria-label="Cocktail"
      aria-describedby="basic-addon1"
	  onChange={(e) => props.onInputChange(e.target.value)}
	  value={props.userInput}
    />
	 </InputGroup>

 

	
	</>)
}
