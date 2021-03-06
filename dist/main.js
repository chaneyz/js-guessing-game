function* guessingGame() {

	var complete = false;
	var answer = null;
	var numRandom = Math.floor(Math.random() * 100);

	yield game.say('Welcome to the number guessing game!');

	var myName = yield game.ask('What\'s your name?');

	yield game.say("Let's begin, "+myName)+"!";

	console.log(numRandom);

	do {
		answer = yield game.ask('Choose your answer!');
		var numAnswer = parseInt(answer, 10);
		console.log(answer);
		if (numAnswer === numRandom) {
			complete = true;
		}
		else if (numAnswer > numRandom) {
		yield game.say('Looks like you\'re a tad high! Let\'s play again!');
		}
		else {
		yield game.say('Looks like you\'re a tad low! Let\'s play again!');
		}
	} while(!complete)
	
	if (numAnswer === numRandom) {
		yield game.say('Congratulations! You guessed correctly!');
	}
}


