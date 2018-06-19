var Enemy = function( description, attackValue, healthValue ) {
  this.description = description;
  this.attackValue = attackValue;
  this.healthValue = healthValue;
};

Enemy.prototype.attack = function( hero ) {
  return hero.health -= this.attackValue;
};

module.exports = Enemy;
