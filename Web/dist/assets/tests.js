'use strict';

define("web/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'adapters/application.js should pass ESLint\n\n2:8 - \'Ember\' is defined but never used. (no-unused-vars)');
  });
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
  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint\n\n');
  });
  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });
  QUnit.test('routes/subreddits/edit.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/subreddits/edit.js should pass ESLint\n\n');
  });
  QUnit.test('routes/subreddits/list.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/subreddits/list.js should pass ESLint\n\n');
  });
  QUnit.test('routes/tweets/timeline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/tweets/timeline.js should pass ESLint\n\n');
  });
  QUnit.test('serializers/subreddit.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'serializers/subreddit.js should pass ESLint\n\n7:5 - Unexpected console statement. (no-console)\n13:7 - Unexpected console statement. (no-console)');
  });
  QUnit.test('serializers/tweet.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'serializers/tweet.js should pass ESLint\n\n7:5 - Unexpected console statement. (no-console)\n13:7 - Unexpected console statement. (no-console)');
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
  QUnit.test('web/templates/subreddits/edit.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'web/templates/subreddits/edit.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('web/templates/subreddits/list.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'web/templates/subreddits/list.hbs should pass TemplateLint.\n\nweb/templates/subreddits/list.hbs\n  5:8  error  Incorrect indentation for `{{#each}}` beginning at L5:C8. Expected `{{#each}}` to be at an indentation of 6 but was found at 8.  block-indentation\n  6:8  error  Incorrect indentation for `<tr>` beginning at L6:C8. Expected `<tr>` to be at an indentation of 10 but was found at 8.  block-indentation\n');
  });
  QUnit.test('web/templates/tweets/timeline.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'web/templates/tweets/timeline.hbs should pass TemplateLint.\n\nweb/templates/tweets/timeline.hbs\n  11:6  error  Incorrect indentation for `div` beginning at L2:C2. Expected `</div>` ending at L11:C6 to be at an indentation of 2 but was found at 0.  block-indentation\n  3:0  error  Incorrect indentation for `{{#each}}` beginning at L3:C0. Expected `{{#each}}` to be at an indentation of 4 but was found at 0.  block-indentation\n  5:13  error  Unnecessary string concatenation. Use {{tweet.url}} instead of "{{tweet.url}}".  no-unnecessary-concat\n');
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
  QUnit.test('unit/models/subreddit-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/subreddit-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/tweet-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/tweet-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/application-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/subreddits/edit-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/subreddits/edit-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/subreddits/list-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/subreddits/list-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/tweets/timeline-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/tweets/timeline-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/serializers/subreddit-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/subreddit-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/serializers/tweet-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/tweet-test.js should pass ESLint\n\n');
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
define("web/tests/unit/routes/application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:application');
      assert.ok(route);
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
define("web/tests/unit/routes/subreddits/edit-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | subreddits/edit', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:subreddits/edit');
      assert.ok(route);
    });
  });
});
define("web/tests/unit/routes/subreddits/list-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | subreddits/list', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:subreddits/list');
      assert.ok(route);
    });
  });
});
define("web/tests/unit/routes/tweets/timeline-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | tweets/timeline', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:tweets/timeline');
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
define("web/tests/unit/serializers/tweet-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Serializer | tweet', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let serializer = store.serializerFor('tweet');
      assert.ok(serializer);
    });
    (0, _qunit.test)('it serializes records', function (assert) {
      let store = this.owner.lookup('service:store');
      let record = store.createRecord('tweet', {});
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
