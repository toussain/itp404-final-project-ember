import { test } from 'qunit';
import moduleForAcceptance from 'final-project/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | test3');

test('loading classes', function(assert) {
  visit('/classes');

  andThen(function() {
    assert.equal(find('.organizations').length, 51);
  });
});
