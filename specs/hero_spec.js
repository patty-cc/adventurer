var assert = require('assert');
var Hero = require('../hero.js');
var Enemy = require('../enemy.js');

describe('Hero', function() {

  var hero;
  var enemyRat;
  var enemyLion;

  beforeEach( function() {
    hero = new Hero('Link', 100, 15, 'Apple');
    enemyRat = new Enemy('Rat', 10, 50);
    enemyLion = new Enemy('Lion', 25, 100);
  })

  it('should have a name', function() {
    assert.strictEqual(hero.name, 'Link');
  });

  it('should have a health bar of 100', function() {
    assert.strictEqual(hero.health, 100);
  });

  it('should have a favourite food', function() {
    assert.strictEqual(hero.faveFood, 'Apple');
  });

  it('should have an attack value of 15', function() {
    assert.strictEqual(hero.attack, 15);
  });

  it('should have an empty task array', function() {
    assert.strictEqual(hero.tasks.length, 0);
  });

  it('should lose 10 health after being attacked from rat', function() {
    enemyRat.attack(hero);
    assert.strictEqual(hero.health, 90);
  });

  it('should lose 25 health after being attacked by lion', function() {
    enemyLion.attack(hero);
    assert.strictEqual(hero.health, 75);
  });

});
