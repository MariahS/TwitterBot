import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  namespace: 'subreddit',
	host: 'http://localhost:8080',
	headers: {
		'X-Requested-With': 'XMLHttpRequest'
	}
});
