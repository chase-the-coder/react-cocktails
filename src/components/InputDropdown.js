import Dropdown from 'react-bootstrap/Dropdown';

export default function InputDropdown({ drinks, onDrinkClick }) {
	return (
		<Dropdown.Menu show>
			<Dropdown.Header />
			{drinks.map((drink) => {
				return (
					<Dropdown.Item action key={drink.idDrink} onClick={() => onDrinkClick(drink)}>
						{drink.strDrink}
					</Dropdown.Item>
				);
			})}
		</Dropdown.Menu>
	);
}
