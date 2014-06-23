function Player(name) {
  this.name = name;
};

Player.prototype.picks = function(pick) {
  this.pick = pick;
};

Player.prototype.pick = function() {
  this.pick
}

function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
};

Game.prototype.winner = function() {

  if(this.player1.pick === "rock" && this.player2.pick === "paper") {
    return this.player2;
  
  } else if(this.player1.pick === "rock" && this.player2.pick === "scissors") {
    return this.player1;
  
  } else if(this.player1.pick === "scissors" && this.player2.pick === "paper") {
    return this.player1;
  
  } else if(this.player1.pick === "scissors" && this.player2.pick === "rock") {
    return this.player2;
  
  } else if(this.player1.pick === "paper" && this.player2.pick === "scissors") {
    return this.player2;
  
  } else if(this.player1.pick === "paper" && this.player2.pick === "rock") {
    return this.player1;
  
  } else {
  	return null
  };
};

// class Player
// 	def initialize(name) 
// 		@name = name
//  	end

//  	def picks(pick)
//  		@pick = pick
//  	end

//  	def pick
//  		@pick
//  	end
// end

// class Game
// 	def initialize(player1, player2)
// 		@player1 = player1
// 		@player2 = player2
// 	end

// 	def winner
// 		return @player1 if 1 == 1
// 	end

// end

