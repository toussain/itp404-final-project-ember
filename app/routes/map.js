import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.A([
      {title: 'Viterbi Hall of Engineering', lat: 34.0205, lng: -118.288, body:'VHE', isInfoWindowVisible: true},
      {title: 'Olin Hall of Engineering', lat: 34.021, lng:  -118.289, body:'OHE',isInfoWindowVisible: true},
      {title: 'Ronald Tutor Hall', lat: 34.0204, lng: -118.289, body:'RTH', isInfoWindowVisible: true},
      {title: 'Rapp Engineering Building', lat: 34.0201, lng: -118.287, body:'RRB', isInfoWindowVisible: true}
    ]);
  }
});
