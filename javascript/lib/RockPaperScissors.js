function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
};

Game.prototype.PAIRS = { // creates property attached to the class, as eg @@variable in Ruby
	
	Spock: {beats: ["scissors", "rock"]},
	lizard: {beats: ["Spock", "paper"]},
	rock: {beats: ["scissors", "lizard"] },
	scissors: {beats: ["paper", "lizard"] },
	paper: {beats: ["rock", "Spock"] }

};

Game.prototype.isSamePick = function() {
	return this.player1.pick === this.player2.pick
};

Game.prototype.winner = function() {
    
    if(this.isSamePick()) {
    	return null 

	} else if(this.PAIRS[this.player1.pick]['beats'].indexOf(this.player2.pick) > -1) {
    	return this.player1

    } else {
    	return this.player2
    }
}

Game.prototype.spockOutcome = function(loser) {
	if(loser === "rock") {
		return "Alex's Spock vaporises Bob's rock"
	} else
	return "Alex's Spock reverses the polarity of Bob's scissors"
}

function Player(name) {
  this.name = name;
};

Player.prototype.picks = function(pick) {
  this.pick = pick;
};

