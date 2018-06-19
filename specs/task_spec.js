var assert = require('assert');
var Task = require('../task.js');

describe('Task', function() {

  var task;

  beforeEach(function() {
    task = new Task('Fight Ganon', 5, 2);
  });

  it('should have a name', function() {
    assert.strictEqual(task.name, 'Fight Ganon');
  });

  it('should have a difficulty of 5', function() {
    assert.strictEqual(task.difficulty, 5);
  });

  it('should have an urgency of 2', function() {
    assert.strictEqual(task.urgency, 2);
  })

});
