// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  tagName: 'tr class="entry"',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),
  
  events: {
    'click': function() {
      this.model.dequeueClicked();
      // this.model.play();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
    // ourElement =  this.$el.html(this.template(this.model.attributes));
    // $(ourElement).attr('id',this.model.attributes.title);
    // console.log(ourElement)
  },

  // removeEntry: function() {
  //   this.$el.html('');
  //   console.log('REMOVE EN')
  // }


  //   events: {
  //   'click': function() {
  //     this.model.play();
  //     //replace this with adding to the queue
  //   }
  // }

});
