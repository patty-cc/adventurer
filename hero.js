var Hero = function(name, health, attack, faveFood) {
  this.name = name;
  this.health = health;
  this.attack = attack;
  this.faveFood = faveFood;
  this.tasks = [];
};

Hero.prototype.attacking = function( enemy ) {
  return enemy.healthValue -= this.attack;
};

// Enemy.prototype.attack = function( hero ) {
//   return hero.health -= this.attackValue;
// };



module.exports = Hero;
