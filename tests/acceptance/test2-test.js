import { test } from 'qunit';
import moduleForAcceptance from 'final-project/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | test2');

test('loading organizations', function(assert) {
  visit('/orgs');

  andThen(function() {
    assert.equal(find('.organizations').length, 15);
  });
});
