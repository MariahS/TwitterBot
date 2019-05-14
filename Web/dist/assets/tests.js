'use strict';

define("web/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'adapters/application.js should pass ESLint\n\n6:2 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)');
  });
  QUnit.test('adapters/subreddit.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/subreddit.js should pass ESLint\n\n');
  });
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('models/subreddit.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/subreddit.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/subreddit/list.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/subreddit/list.js should pass ESLint\n\n');
  });
  QUnit.test('routes/subreddits.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/subreddits.js should pass ESLint\n\n');
  });
  QUnit.test('serializers/subreddit.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/subreddit.js should pass ESLint\n\n');
  });
});
define("web/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('web/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'web/templates/application.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('web/templates/subreddit/list.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'web/templates/subreddit/list.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('web/templates/subreddits.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'web/templates/subreddits.hbs should pass TemplateLint.\n\n');
  });
});
define("web/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/adapters/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/adapters/subreddit-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/subreddit-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/subreddit-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/subreddit-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/subreddit/list-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/subreddit/list-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/subreddits-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/subreddits-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/serializers/subreddit-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/subreddit-test.js should pass ESLint\n\n');
  });
});
define("web/tests/test-helper", ["web/app", "web/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("web/tests/unit/adapters/application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Adapter | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let adapter = this.owner.lookup('adapter:application');
      assert.ok(adapter);
    });
  });
});
define("web/tests/unit/adapters/subreddit-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Adapter | subreddit', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let adapter = this.owner.lookup('adapter:subreddit');
      assert.ok(adapter);
    });
  });
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
define("web/tests/unit/routes/subreddit/list-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | subreddit/list', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:subreddit/list');
      assert.ok(route);
    });
  });
});
define("web/tests/unit/routes/subreddits-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | subreddits', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:subreddits');
      assert.ok(route);
    });
  });
});
define("web/tests/unit/serializers/subreddit-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Serializer | subreddit', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let serializer = store.serializerFor('subreddit');
      assert.ok(serializer);
    });
    (0, _qunit.test)('it serializes records', function (assert) {
      let store = this.owner.lookup('service:store');
      let record = store.createRecord('subreddit', {});
      let serializedRecord = record.serialize();
      assert.ok(serializedRecord);
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
