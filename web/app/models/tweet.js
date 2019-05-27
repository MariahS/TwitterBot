import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  message: DS.attr(),
  url: DS.attr(),
  isPosted: DS.attr()
});
