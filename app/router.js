import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('map');
  this.route('twitter');
  this.route('overview', function() {
    this.route('mech');
    this.route('aero');
    this.route('petro');
});
  this.route('classes');
  this.route('orgs');
});

export default Router;
