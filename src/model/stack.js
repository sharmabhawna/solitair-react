class Stack {
	constructor(cards) {
		this.faceDownCards = cards;
		this.openCards = [];
	}

	openCard() {
		const topCard = this.faceDownCards.splice(-1);
		this.openCards = this.openCards.concat(topCard);
	}

	drawCards() {
		return this.openCards.slice(-1);
	}

	removeCards(numberOfCards) {
		this.openCards.splice(-numberOfCards);
	}

	isEmpty() {
		return this.faceDownCards.length === 0;
	}

	refill() {
		const cards = this.openCards.splice(0).reverse();
		this.faceDownCards = this.faceDownCards.concat(cards);
	}
}

export default Stack;
