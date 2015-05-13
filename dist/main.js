function* guessingGame() {

var complete = false;
var answer = parseInt(null);
var numRandom = Math.floor(Math.random() * 100);

yield game.say('Welcome to the number guessing game!');

var myName = yield game.ask('What\'s your name?');

yield game.say("Let's begin, "+myName)+"!";

console.log(numRandom);

do {
	answer = yield game.ask('Choose your answer!');
	console.log(answer);
	if(answer === numRandom) {
		complete = true;
	}
} 

while(!complete)
//while(complete === false)

if(answer === numRandom) {
	yield game.say('Sorry, incorrect! Let\'s play again!');
}
else {
	yield game.say('Congratulations! You guessed correctly!');
}

}


