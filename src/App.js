import React, { Component } from "react";
import lodash from "lodash";
import { Cards } from "./data/cards";
import Card from "./model/card";
import Game from "./model/game";
import { GameView } from "./GameView";

const deck = lodash.shuffle(Cards).map(card => new Card(card));

const game = new Game(deck);

class App extends Component {
	render() {
		return <GameView game={game} />;
	}
}

export default App;
