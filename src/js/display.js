import { getById } from './utils';

const playerImages = [
	getById('player0Image'),
	getById('player1Image')
];

const playerScores = [
	getById('player0Score'),
	getById('player1Score')
];

const resultText = getById('result');

function displayImage(player, idx) {
	playerImages[idx].src = player.moveImage;
}

function displayScore(player, idx) {
	playerScores[idx].innerHTML = player.score;
}

export function display(game) {
	game.players.forEach(displayImage)
	game.players.forEach(displayScore);

	resultText.innerHTML = game.summary;
}

export function displayStartingImages(game) {
	game.players.forEach(displayImage); 
}
