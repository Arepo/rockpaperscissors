
function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
};

Game.prototype.PAIRS = { // creates property attached to the class, as eg @@variable in Ruby
	
	Spock: 		{scissors: 'reverses the polarity of', rock: 'disputes the logic of'},
	lizard: 	{Spock: 'eats', paper: 'origamates'},
	rock: 		{scissors: "runs with", lizard: "bites the head off" },
	scissors: 	{paper: "tastefully edit", lizard: 'prune' },
	paper: 		{rock: "exposes the perversions of the third eye of", Spock: "features bikini photos of" }

};

Game.prototype.winner = function() {
    
    if (this.isSamePick()) return null

	if (this._victoryVerbFor(this.player1.pick, this.player2.pick)) {
    	return this.player1

    }

    else {
    	return this.player2
    }
}

Game.prototype._victoryVerbFor = function(pick, opponentPick) {
  return this.PAIRS[pick][opponentPick];
};

Game.prototype.isSamePick = function() {
	return this.player1.pick === this.player2.pick
};

Game.prototype.loser = function() {
	
	if(this.winner() === null ) {
		return null
	} else if(this.winner() === this.player1){
		return this.player2
	} else {
		return this.player1
	}

}

Game.prototype.outcome = function() {
	if (this.winner() === null) return "Draw"
	return [(this.winner().name + "'s"), this.winner().pick,
	(this._victoryVerbFor(this.winner().pick, this.loser().pick)), 
	(this.loser().name + "'s"), this.loser().pick].join(' ')
}

function Player(name) {
  this.name = name;
};

Player.prototype.picks = function(pick) {
  this.pick = pick;
};

