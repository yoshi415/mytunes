// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params){
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.songQueueView = new SongQueueView({collection: this.model.get('songQueue')})

    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model){
      this.playerView.setSong(model.get('currentSong'));
    }, this);

    this.model.get('songQueue').on('add', function(model){
      var entry = new SongQueueEntryView({model: model});
      this.$el.find('.queue').append(entry.render());
      if (this.model.get('songQueue').length === 1) {
        this.model.get('songQueue').models[0].play();
      }
    }, this);

    this.model.get('songQueue').on('dequeue', function(model){
      this.$el.find('.entry').first().remove();
      if (this.model.get('songQueue').length > 0) {
        this.model.get('songQueue').models[0].play();
      }
    }, this);

    this.model.get('songQueue').on('dequeueClicked', function(model){
      console.log(this.$el.find('.entry'));
      // model.removeEntry();
      // model.remove();

      // this.$el.find('.entry').first().remove();
      // if (this.model.get('songQueue').length > 0) {
      //   this.model.get('songQueue').models[0].play();
      // }
    }, this);
  },

  render: function(){
    return this.$el.html([
      this.playerView.$el,
      this.libraryView.$el,
      this.songQueueView.$el
    ]);
  }

});