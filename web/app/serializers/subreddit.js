import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeSingleResponse(store, type, payload){
    var newPayload = {};
    newPayload[type.modelName] = payload;
    console.log(newPayload);
    return this._super(store, type, newPayload);
  },
  normalizeArrayResponse(store, type, payload) {
      var newPayload = {};
      newPayload[type.modelName] = payload;
      console.log(newPayload);
      return this._super(store, type, newPayload);
    }
 });
