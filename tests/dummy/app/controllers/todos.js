import Ember from 'ember';
import config from '../config/environment';
import Factory from 'ember-cli-pagination/factory';
import pagedArray from 'ember-cli-pagination/computed/paged-array';

export default Ember.ArrayController.extend(Factory.controllerMixin(config), {
  pagedContent: pagedArray("content"),

  actions: {
    save: function() {
      this.forEach(function(t) {
        t.save();
      });
    }
  }
});