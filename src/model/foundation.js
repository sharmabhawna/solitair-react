class Foundation {
	constructor() {
		this.cards = [];
	}

	addCards(cards) {
		if (this.canBeAdded(cards[0])) {
			this.cards = this.cards.concat(cards);
			return true;
		}
		return false;
	}

	drawCards() {
		return this.cards.slice(-1);
	}

	removeCards(numberOfCards) {
		return this.cards.splice(-numberOfCards);
	}

	getTopCard() {
		return this.cards[this.cards.length - 1];
	}

	canBeAdded(card) {
		if (this.cards.length === 0) {
			return +card.range === 1;
		}
		const topCard = this.getTopCard();
		return card.suit === topCard.suit && +card.range - 1 === +topCard.range;
	}
}

export default Foundation;
