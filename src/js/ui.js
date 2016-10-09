import { addListener, getById } from './utils';
import { MOVES } from './consts';

const playerImages = [
	getById('player0Image'),
	getById('player1Image')
];

const playerScores = [
	getById('player0Score'),
	getById('player1Score')
];

const resultText = getById('result');


function bindButtons(game) {
	addListener('computer', 'click', () => display( game.computer() ));
	addListener('reset', 'click', () => display( game.reset() ));

	MOVES.forEach( 
		(move, idx) => addListener(move.name, 'click', () => display( game.manual(idx) ))
	);
}

function createButtons() {
	function createButton(move) {
		const button = document.createElement("button");
		button.id = move.name;
		button.appendChild(document.createTextNode(move.name));
		moveButtonsContainer.appendChild(button);
	}

	const moveButtonsContainer = getById('moves');

	MOVES.forEach(createButton);
}


function displayImage(player, idx) {
	playerImages[idx].src = player.moveImage;
}

function displayScore(player, idx) {
	playerScores[idx].innerHTML = player.score;
}

function display(game) {
	game.players.forEach(displayImage)
	game.players.forEach(displayScore);

	resultText.innerHTML = game.summary.replace(/\-/, '<span>-</span>');
}

function displayStartingImages(game) {
	game.players.forEach(displayImage); 
}


export default function start(game) {
	displayStartingImages(game);
	createButtons();
	bindButtons(game);
}
