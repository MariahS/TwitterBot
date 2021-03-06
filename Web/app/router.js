import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('subreddit', function(){});

  this.route('subreddits', function() {
    this.route('edit', {path: '/edit/:id'});
    this.route('list'), {path: '/list'};
  });

  this.route('tweets', function() {
    this.route('timeline'), {path: '/timeline'};
  });
});

export default Router;
