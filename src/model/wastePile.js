class WastePile {
	constructor(cards) {
		this.openCards = cards.slice(-1);
		this.faceDownCards = cards.slice(0, cards.length - 1);
	}

	openCard() {
		const topCard = this.faceDownCards.splice(-1);
		this.openCards = this.openCards.concat(topCard);
	}

	addCards(cards) {
		if (this.canBeAdded(cards[0])) {
			this.openCards = this.openCards.concat(cards);
			return true;
		}
		return false;
	}

	drawCards(numberOfCards) {
		return this.openCards.slice(-numberOfCards);
	}

	removeCards(numberOfCards) {
		this.openCards.splice(-numberOfCards);
		if (this.openCards.length === 0) {
			this.openCard();
		}
	}

	getTopCard() {
		return this.openCards[this.openCards.length - 1];
	}

	canBeAdded(card) {
		if (this.faceDownCards.length === 0 && this.openCards.length === 0) {
			return +card.range === 13;
		}
		const topCard = this.getTopCard();
		return card.color !== topCard.color && +card.range + 1 === +topCard.range;
	}
}

export default WastePile;
