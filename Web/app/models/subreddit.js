import DS from 'ember-data';
const {
  Model,
  attr} = DS;

export default Model.extend({
  id: attr('integer'),
  name: attr('string'),
  url: attr('string')
});
