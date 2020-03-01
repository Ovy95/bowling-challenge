describe('Bowling Game', function () {

    var game;

    beforeEach(function() {
      game = new BowlingGame();
    });


    it('can score one pin', function() {
      game.roll(1);
      frame(0, 20);
      expect(game.score()).toBe(1);

    });

    it('can roll gutter game', function () {
        frame(0, 20);
        expect(game.score()).toBe(0);
    });

    it('can roll all ones', function() {
      frame(1, 20);
      expect(game.score()).toBe(20);
    });

    it('Can roll a spare', function(){
      game.roll(5);
      game.roll(5);
      game.roll(3);
      frame(0, 17);
      expect(game.score()).toBe(16);
    })



    var frame = function (pins, rolls) {
      for (var i = 0; i < rolls; i++) {
        game.roll(pins);
      }
  };

});