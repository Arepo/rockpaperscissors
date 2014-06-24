describe("Rock-Paper-Scissors", function() {
  var player1, player2, game;

  beforeEach(function() {
    player1 = new Player('Alex');
    player2 = new Player('Bob');
    game = new Game(player1, player2);
  });

  describe('winning and losing', function() {

    describe('rock', function() {

      beforeEach(function() {

        player1.picks('rock');

      });

      it('rock should beat scissors', function() {

        player2.picks('scissors');
        expect(game.winner()).toBe(player1);
      });

      it('rock should beat lizard', function() {
        
        player2.picks('lizard');
        expect(game.winner()).toBe(player1);
      });

      it('rock should lose to paper', function() {

        player2.picks('paper');
        expect(game.winner()).toBe(player2);

      });

        it('rock should lose to Spock', function() {

        player2.picks('Spock');
        expect(game.winner()).toBe(player2);

      });

    });

    describe('paper', function() {

      beforeEach(function() {

        player1.picks('paper');

      });

      it('should beat rock', function() {

        player2.picks('rock');
        expect(game.winner()).toBe(player1);

      });

      it('should beat Spock', function() {

        player2.picks('Spock');
        expect(game.winner()).toBe(player1);

      });

      it('should lose to scissors', function() {

        player2.picks('scissors');
        expect(game.winner()).toBe(player2);

      });

      it('should lose to lizard', function() {

        player2.picks('lizard');
        expect(game.winner()).toBe(player2);

      });

    });

    describe('scissors', function() {

      beforeEach(function() {

        player1.picks('scissors');

      });

      it('should beat paper', function() {

        player2.picks('paper');
        expect(game.winner()).toBe(player1);

      });

      it('should beat lizard', function() {

        player2.picks('lizard');
        expect(game.winner()).toBe(player1);

      });

      it('should lose to rock', function() {

        player2.picks('rock');
        expect(game.winner()).toBe(player2);

      });

      it('should lose to Spock', function() {

        player2.picks('Spock');
        expect(game.winner()).toBe(player2);

      });

    });

    describe('Spock', function() {

      beforeEach(function() {

        player1.picks('Spock');

      });

      it('should beat rock', function() {

        player2.picks('rock');
        expect(game.winner()).toBe(player1);

      });

      it('should beat scissors', function() {

        player2.picks('scissors');
        expect(game.winner()).toBe(player1);

      });

      it('should lose to lizard', function() {

        player2.picks('lizard');
        expect(game.winner()).toBe(player2);

      });

      it('should lose to paper', function() {

        player2.picks('paper');
        expect(game.winner()).toBe(player2);

      });

    });

    describe('lizard', function() {

      beforeEach(function() {

        player1.picks('lizard');

      });

      it('should beat Spock', function() {

        player2.picks('Spock');
        expect(game.winner()).toBe(player1);

      });

      it('should beat paper', function() {

        player2.picks('paper');
        expect(game.winner()).toBe(player1);

      });

      it('should lose to rock', function() {

        player2.picks('rock');
        expect(game.winner()).toBe(player2);

      });

      it('should lose to scissors', function() {

        player2.picks('scissors');
        expect(game.winner()).toBe(player2);

      });

    });

  });

  describe('draws', function() {

    describe('any identical picks', function() {

      it('should result in no winner', function() {

        var drawGameResults = ['rock', 'paper', 'scissors'].map(function(x) {
          player1.picks(x);
          player2.picks(x);
          return game.winner();
        });

        expect(drawGameResults).toEqual([null, null, null]);

      });

    });

  });

  describe('victory messages', function() {

    describe('for Spock and Alex', function() {

      it("should return Alex's Spock vaporises Bob's rock", function() {

        player1.picks('Spock');
        player2.picks('rock');
        expect(game.outcome()).toBe("Alex's Spock death grips Bob's rock");

      })

      it("should return Alex's Spock reverses the polarity of Bob's scissors", function() {

        player1.picks('Spock');
        player2.picks('scissors');
        expect(game.outcome()).toBe("Alex's Spock reverses the polarity of Bob's scissors");

      });

    });

    describe('for Spock and Bob', function() {

      it("should return Bob's lizard devours [player1]'s paper", function() {

        player1.picks('rock');
        player2.picks('Spock');
        expect(game.outcome()).toBe("Bob's Spock death grips Alex's rock");

      })

      it("should return [player2]'s lizard devours [player1]'s paper", function() {

        player1.picks('scissors');
        player2.picks('Spock');
        expect(game.outcome()).toBe("Bob's Spock reverses the polarity of Alex's scissors");

      })

      // it("should return [player1]'s Spock reverses the polarity of [player2]'s scissors", function() {

      //   player1.picks('Spock');
      //   player2.picks('scissors');
      //   expect(game.spockOutcome(player2.pick)).toBe("Alex's Spock reverses the polarity of Bob's scissors");

      // });

    });

  });

});