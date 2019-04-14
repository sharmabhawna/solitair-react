import Stack from "./stack";
import Foundation from "./foundation";
import WastePile from "./wastePile";

class Game {
	constructor(deck) {
		this.deck = deck;
		this.startGame();
	}

	createStack() {
		return new Stack(this.deck.splice(0, 24));
	}

	createFoundations() {
		const foundations = [];
		const numberOfFoundations = 4;
		let counter = 1;
		while (counter <= numberOfFoundations) {
			foundations.push(new Foundation(counter));
			counter++;
		}
		return foundations;
	}

	createWastepiles() {
		const wastePiles = [];
		const numberOfWastePiles = 7;
		let counter = 1;
		while (counter <= numberOfWastePiles) {
			wastePiles.push(new WastePile(this.deck.splice(0, counter), counter));
			counter++;
		}
		return wastePiles;
	}

	startGame() {
		this.stack = this.createStack();
		this.wastePiles = this.createWastepiles();
		this.foundations = this.createFoundations();
	}
}

export default Game;
