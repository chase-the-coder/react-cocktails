import { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../App.css';

export default function DrinkCard(props) {
	const alphabet = [
		'A',
		'B',
		'C',
		'D',
		'E',
		'F',
		'G',
		'H',
		'I',
		'J',
		'K',
		'L',
		'M',
		'N',
		'O',
		'P',
		'Q',
		'R',
		'S',
		'T',
		'U',
		'V',
		'W',
		'X',
		'Y',
		'Z'
	];

	const [ drink, SetDrink ] = useState('');

	useEffect(
		() => {
			const inputString = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${alphabet[props.random]}`;
			fetch(inputString).then((result) => result.json()).then((data) => {
				SetDrink(data.drinks[Math.floor(Math.random() * data.drinks.length)]);
			});
			// console.log(userInput);

			// console.log(ingredients);
		},
		[ props.random ]
	);
	return (
		<Card className="m-4" style={{ width: '18rem' }}>
			<Card.Img variant="top" src={drink.strDrinkThumb} />
			<FontAwesomeIcon icon="fa-heart" className="color-red-blue" />
			<Card.Body>
				<Card.Title onClick={() => props.onDrinkClick(drink)}>
					<a href="#">{drink.strDrink}</a>
				</Card.Title>
				{drink.strInstructions && <Card.Text>{drink.strInstructions.substring(0, 75) + '...'}</Card.Text>}
			</Card.Body>
		</Card>
	);
}
