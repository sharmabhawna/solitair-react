import React, { Component } from "react";
import { DefaultCard, EmptyCard, RefreshCard } from "./data/cards";

class RegularCard extends Component {
	render() {
		const { card, id, onClick, className } = this.props;
		return (
			<div className={"card " + className} id={id} onClick={onClick}>
				{card.unicode}
			</div>
		);
	}
}

class OpenCard extends Component {
	render() {
		const { card, id, className, drag } = this.props;
		return (
			<div
				key={card.id}
				id={id}
				className={"card " + card.color + " " + className}
				draggable="true"
				onDragStart={drag}
			>
				{card.unicode}
			</div>
		);
	}
}

class FaceDownCard extends Component {
	render() {
		const { id, className, onClick } = this.props;
		return (
			<div
				id={id}
				className={"card " + DefaultCard.color + className}
				onClick={onClick}
			>
				{DefaultCard.unicode}
			</div>
		);
	}
}

class Stack extends Component {
	constructor(props) {
		super(props);
		this.state = {
			stack: props.stack
		};
		this.openCard = this.openCard.bind(this);
		this.refillStack = this.refillStack.bind(this);
	}

	openCard() {
		this.state.stack.openCard();
		this.updateStack();
	}

	refillStack() {
		this.state.stack.refill();
		this.updateStack();
	}

	updateStack() {
		this.setState({ stack: this.state.stack });
	}

	renderFaceDownCard(drawer, refiller) {
		if (this.state.stack.faceDownCards.length === 0) {
			return (
				<RegularCard
					card={RefreshCard}
					className="smaller-font"
					onClick={refiller}
				/>
			);
		}
		return <FaceDownCard className=" clickable" onClick={drawer} />;
	}

	renderOpenCard(drag) {
		if (this.state.stack.openCards.length === 0) {
			return <RegularCard card={EmptyCard} className="transparent" />;
		}
		const topCardIndex = this.state.stack.openCards.length - 1;
		return (
			<OpenCard
				card={this.state.stack.openCards[topCardIndex]}
				id="stack"
				drag={drag}
			/>
		);
	}

	render() {
		const { drag } = this.props;
		return (
			<div className="stack">
				{this.renderFaceDownCard(this.openCard, this.refillStack)}
				{this.renderOpenCard(drag)}
			</div>
		);
	}
}

class Foundation extends Component {
	constructor(props) {
		super(props);
		this.state = { foundation: props.foundation };
	}

	renderCard(id, drag) {
		if (this.state.foundation.cards.length === 0) {
			return <RegularCard card={EmptyCard} id={id} className="transparent" />;
		}
		const topCardIndex = this.state.foundation.cards.length - 1;
		return (
			<OpenCard
				card={this.state.foundation.cards[topCardIndex]}
				id={id + "_1"}
				drag={drag}
			/>
		);
	}

	render() {
		const { drag, allowDrop, drop, id } = this.props;
		return (
			<div id={id} className="foundation" onDragOver={allowDrop} onDrop={drop}>
				{this.renderCard(id, drag)}
			</div>
		);
	}
}

class Foundations extends Component {
	constructor(props) {
		super(props);
		this.foundations = props.foundations;
	}
	render() {
		const { drag, allowDrop, drop } = this.props;
		return (
			<div className="foundations">
				{this.foundations.map((foundation, index) => (
					<Foundation
						key={"foundation" + index}
						id={"foundation_" + index}
						foundation={foundation}
						drag={drag}
						allowDrop={allowDrop}
						drop={drop}
					/>
				))}
			</div>
		);
	}
}

class WastePile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			wastePile: props.wastePile
		};
	}

	renderCards(id, drag) {
		const numberOfOpenCards = this.state.wastePile.openCards.length;
		const faceDownCards = this.state.wastePile.faceDownCards.map(
			(faceDownCard, index) => (
				<FaceDownCard
					key={"wastepile_facedown" + index}
					className=" adjustable"
				/>
			)
		);
		const openCards = this.state.wastePile.openCards.map((openCard, index) => (
			<OpenCard
				key={"wastepile_open" + index}
				id={id + "_" + (numberOfOpenCards - index)}
				card={openCard}
				className="adjustable"
				drag={drag}
			/>
		));
		const allCards = faceDownCards.concat(openCards);
		if (allCards.length === 0) {
			return (
				<RegularCard
					card={EmptyCard}
					id={id}
					className="adjustable transparent"
				/>
			);
		}
		return allCards;
	}

	render() {
		const { drag, allowDrop, drop, id } = this.props;
		return (
			<div id={id} className="waste-pile" onDragOver={allowDrop} onDrop={drop}>
				{this.renderCards(id, drag)}
			</div>
		);
	}
}

class WastePiles extends Component {
	constructor(props) {
		super(props);
		this.wastePiles = props.wastePiles;
	}

	render() {
		const { drag, allowDrop, drop } = this.props;
		return (
			<div className="waste-piles">
				{this.wastePiles.map((wastePile, index) => (
					<WastePile
						key={"wastepile" + index}
						id={"wastepile_" + index}
						wastePile={wastePile}
						drag={drag}
						allowDrop={allowDrop}
						drop={drop}
					/>
				))}
			</div>
		);
	}
}

class GameView extends Component {
	constructor(props) {
		super(props);
		this.state = { game: props.game };
		this.drag = this.drag.bind(this);
		this.drop = this.drop.bind(this);
		this.allowDrop = this.allowDrop.bind(this);
	}

	allowDrop(event) {
		event.preventDefault();
	}

	drag(event) {
		event.dataTransfer.setData("text", event.target.id);
	}

	drop(event) {
		event.preventDefault();
		const data = event.dataTransfer.getData("text");
		this.moveCards(data, event.target.parentNode.id);
		this.setState({ game: this.state.game });
	}

	getSource(sourceDetails) {
		if (sourceDetails === "stack") {
			return this.state.game.stack;
		}
		const [destination, id] = sourceDetails.split("_");
		if (destination === "wastepile") {
			return this.state.game.wastePiles[id];
		}
		return this.state.game.foundations[id];
	}

	getNumberOfCardsToDraw(destinationDetails) {
		return destinationDetails.split("_")[2];
	}

	moveCards(sourceDetails, destinationDetails) {
		const source = this.getSource(sourceDetails);
		const destination = this.getSource(destinationDetails);
		if (!destination) {
			return;
		}
		const numberOfCards = this.getNumberOfCardsToDraw(sourceDetails);
		let isAdded = false;
		const cards = source.drawCards(numberOfCards);
		isAdded = destination.addCards(cards);
		if (isAdded) {
			source.removeCards(cards.length);
		}
	}

	render() {
		return (
			<main>
				<nav>
					<Stack stack={this.state.game.stack} drag={this.drag} />
					<Foundations
						foundations={this.state.game.foundations}
						drag={this.drag}
						allowDrop={this.allowDrop}
						drop={this.drop}
					/>
				</nav>
				<section>
					<WastePiles
						wastePiles={this.state.game.wastePiles}
						drag={this.drag}
						allowDrop={this.allowDrop}
						drop={this.drop}
					/>
				</section>
			</main>
		);
	}
}

export { GameView };
