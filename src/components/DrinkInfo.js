import React from 'react';
import { Container } from 'react-bootstrap';
import DrinkColumns from './DrinkColumns';
function DrinkInfo(props) {
	return (
		<Container className="pt-1">
			{props.drink && (
				<DrinkColumns measure={props.measure} ingredients={props.ingredients} drink={props.drink} />
			)}
		</Container>
	);
}

export default DrinkInfo;
