import React from 'react'
import randomizedFruits from '../fruits'
import Card from './Card'

function Gameboard() {

	const [theCard, setTheCard] = React.useState(randomizedFruits);
	function flipCard(name, id) {
		// Set the 'flip target' to 'fruit', change its state to 1 and update theCard.
		let fruit = {};
		for (let i = 0; i < theCard.length; i++) {
			if (theCard[i].name == name && theCard[i].id == id) {
				fruit = theCard[i];
				fruit.state = 1;
			}
		}
		setTheCard(theCard.map(card => 
			card.id == fruit.id ? {...card, state: fruit.state} : card
		));

	 checkResult();
	}

	function checkResult() {
		// If two cards are faced up, filter them and check if they match.
		let res = theCard.map(card => card.state).reduce((a,b) => a += b)
		if (res == 2) setTimeout(() => {
			let filteredCards = theCard.filter(card => {
				if (card.state == 1) {
					return true;
				}
			});
			// If the name matches => set the 'show' to 'false' and update theCard.
			if (filteredCards[0].name == filteredCards[1].name) {
				setTheCard(theCard.map(card => {
					if (card.id == filteredCards[0].id) {
						return {...card, show: false, state: 0};
					} else if (card.id == filteredCards[1].id) {
						return {...card, show: false, state: 0};
					} else return card;
				}));
			// If not, set the 'state' back to 0 and update theCard.
			} else {
				setTheCard(theCard.map(card => {
					if (card.id == filteredCards[0].id || filteredCards[1].id) {
						return {...card, state: 0}
					} else return card;
				}))
			}
		}, 1000) // 1s delay to show the cards.
	}

	// stateCheck to ensure no more clicking when 2 cards are faced up.
 	let stateCheck = theCard.map(card => card.state).reduce((a,b) => a += b);
    let results = theCard.map(result => <Card 
		id={result.id}
		onFlip={() => stateCheck <= 1 && flipCard(result.name, result.id)} // Get the Card name and id onFlip.
		{...result}
		/>)
		
	return (
		<div className='container'>
			{results}
		</div>
	)
}

export default Gameboard