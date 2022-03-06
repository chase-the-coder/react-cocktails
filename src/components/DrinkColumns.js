import React from 'react';
import { Row, Col, ListGroup, Card } from 'react-bootstrap';
function DrinkColumns(props) {
	return (
		<Row className="border border-5">
			<Col className="p-4 d-flex align-items-center justify-content-center">
				{props.drink && (
					<img
						className="rounded fluid"
						src={props.drink.strDrinkThumb}
						alt="drink"
						width="300"
						height="300"
					/>
				)}
			</Col>
			<Col className="p-4">
                <Card.Title>{props.drink.strDrink}</Card.Title>
                    <Card.Text>
                    {props.drink.strInstructions}
                    </Card.Text>
				{props.ingredients.map((ingredient, index) => {
					if (ingredient) {
						return (<>
                           
							<div className="d-flex justify-content-center p-0 m-0">
								<ListGroup.Item className="w-50 d-flex justify-content-around" key={props.drink.idDrink} as="li">
									<span className=''>{props.measure[index]}</span>
									<span className='text-start'>{ingredient}</span>
								</ListGroup.Item>
							</div>
                            </>
						);
					}
				})}
			</Col>
		</Row>
	);
}

export default DrinkColumns;
