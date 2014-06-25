
function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
};

Game.prototype.PAIRS = { // creates property attached to the class, as eg @@variable in Ruby
	
	Spock: 		{scissors: 'reverses the polarity of', rock: 'death grips'},
	lizard: 	{Spock: 'eats', paper: 'origamates'},
	rock: 		{scissors: "people's elbows", lizard: "stares down" },
	scissors: 	{paper: "tastefully edit", lizard: 'prune' },
	paper: 		{rock: "has too many words for", Spock: "features revealing holiday photos of" }

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

