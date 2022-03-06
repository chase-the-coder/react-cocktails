import { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';

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
		<Card className="m-4" style={{ width: '18rem' }} onClick={() => props.onDrinkClick(drink)}>
			<Card.Img variant="top" src={drink.strDrinkThumb} />
			<Card.Body>
				<Card.Title>{drink.strDrink}</Card.Title>
				{drink.strInstructions && <Card.Text>{drink.strInstructions.substring(0, 75) + '...'}</Card.Text>}
			</Card.Body>
		</Card>
	);
}
