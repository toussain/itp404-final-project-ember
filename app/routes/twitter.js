import Ember from 'ember';

export default Ember.Route.extend({

model: function(){

    return $.ajax({
      url: "http://localhost:3000/api/twitter",
      success: function(tweets){
        return tweets;
    }});
  }
});
