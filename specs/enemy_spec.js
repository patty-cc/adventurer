var assert = require('assert');
var Enemy = require('../enemy.js');
var Hero = require('../hero.js');

describe('Enemy', function() {

  var enemyRat;
  var enemyLion;
  var hero;


  beforeEach(function() {
    enemyRat = new Enemy('Rat', 10, 50);
    enemyLion = new Enemy('Lion', 20, 100);
    hero = new Hero('Link', 100, 15, 'apple');
  });

  it('should have a description', function() {
    assert.strictEqual(enemyLion.description, 'Lion');
  });

  it('should have an attack value of 10', function() {
    assert.strictEqual(enemyRat.attackValue, 10);
  });

  it('should have a health value of 50', function() {
    assert.strictEqual(enemyRat.healthValue, 50);
  });

  it('should lose health if attacked by hero', function() {
    hero.attacking(enemyLion);
    assert.strictEqual(enemyLion.healthValue, 85);
  });


});
