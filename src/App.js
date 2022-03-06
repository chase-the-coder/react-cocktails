import { useState, useEffect } from 'react';
import './App.css';
import { Container, Button } from 'react-bootstrap';
import Input from './components/Input';
import InputDropdown from './components/InputDropdown.js';
import DrinkInfo from './components/DrinkInfo';
import DrinkCard from './components/DrinkCard';

function App() {
	const [ drink, setDrink ] = useState('');
	const [ userInput, setUserInput ] = useState([]);
	const [ drinks, setDrinks ] = useState([]);
	const [ ingredients, setIngredients ] = useState([]);
	const [ measure, setMeasure ] = useState([]);
	const [ random, setRandom ] = useState([ 1, 2, 3 ]);
	useEffect(
		() => {
			const inputString = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userInput}`;
			fetch(inputString).then((result) => result.json()).then((data) => {
				// console.log(data.drinks);
				const drinkList = [];
				data.drinks.forEach((drink) => drinkList.push(drink));
				drinkList[0].strDrink === 'GG' ? setDrinks([]) : setDrinks([ ...drinkList ]);
				// console.log(drinks);
				console.log(drink);
				console.log(measure);
			});
			// console.log(userInput);

			// console.log(ingredients);
		},
		[ userInput ]
	);

	const genRandom = () => {
		return Math.floor(Math.random() * 26);
	};

	const handleDrinkClick = (drink) => {
		setDrink(drink);
		setUserInput('');
		setDrinks([]);
		const ingredients = [];
		const measurements = [];
		for (let i = 1; i <= 20; i++) {
			if (drink) {
				ingredients.push(drink[`strIngredient${i}`]);
				measurements.push(drink[`strMeasure${i}`]);
			}
		}
		setIngredients(ingredients);
		setMeasure(measurements);
	};
	const handleInputChange = (e) => {
		setUserInput(e);
	};
	return (
		<div className="">
			<Container>
				<div className="">
					<Input
						drinks={drinks}
						userInput={userInput}
						onInputChange={handleInputChange}
						onDrinkClick={handleDrinkClick}
					/>

					{drinks.length !== 0 && <InputDropdown onDrinkClick={handleDrinkClick} drinks={drinks} />}
					<DrinkInfo measure={measure} ingredients={ingredients} drink={drink} />
					<div className="d-flex justify-content-around">
						<DrinkCard onDrinkClick={handleDrinkClick} random={random[0]} />
						<DrinkCard onDrinkClick={handleDrinkClick} random={random[1]} />
						<DrinkCard onDrinkClick={handleDrinkClick} random={random[2]} />
					</div>
					<div className="d-flex justify-content-center align-items-center pb-4">
						<Button variant="primary" onClick={() => setRandom([ genRandom(), genRandom(), genRandom() ])}>
							Randomize
						</Button>
					</div>
				</div>
			</Container>
		</div>
	);
}

export default App;
