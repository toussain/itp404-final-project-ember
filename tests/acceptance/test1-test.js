import { test } from 'qunit';
import moduleForAcceptance from 'final-project/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | test1');

test('visiting /overview ', function(assert) {
  visit('/overview');

  andThen(function() {
    assert.equal(currentURL(), '/overview');
  });
});
