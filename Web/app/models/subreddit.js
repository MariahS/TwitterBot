import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  id: DS.attr('integer'),
  name: DS.attr('string'),
  url: DS.attr('string')
});
