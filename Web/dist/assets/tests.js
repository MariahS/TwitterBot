'use strict';

define("web/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('models/subreddit.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/subreddit.js should pass ESLint\n\n');
  });
  QUnit.test('models/tweet.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/tweet.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });
  QUnit.test('routes/twitter.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/twitter.js should pass ESLint\n\n');
  });
});
define("web/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('web/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'web/templates/application.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('web/templates/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'web/templates/index.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('web/templates/twitter.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'web/templates/twitter.hbs should pass TemplateLint.\n\n');
  });
});
define("web/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/subreddit-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/subreddit-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/tweet-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/tweet-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/twitter-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/twitter-test.js should pass ESLint\n\n');
  });
});
define("web/tests/test-helper", ["web/app", "web/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("web/tests/unit/models/subreddit-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | subreddit', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('subreddit', {});
      assert.ok(model);
    });
  });
});
define("web/tests/unit/models/tweet-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | tweet', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('tweet', {});
      assert.ok(model);
    });
  });
});
define("web/tests/unit/routes/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define("web/tests/unit/routes/twitter-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | twitter', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:twitter');
      assert.ok(route);
    });
  });
});
define('web/config/environment', [], function() {
  var prefix = 'web';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('web/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
