import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	host: 'localhost:8080',
	pathForType(){
		return 'subreddit'
	}
});
