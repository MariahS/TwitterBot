import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | subreddits/list', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:subreddits/list');
    assert.ok(route);
  });
});
