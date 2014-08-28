var Backbone = require('backbone'),
	$ = require('jquery'),
    _ = require('underscore');
    

module.exports = Backbone.View.extend({

  tagName: 'header',
  className: 'header',

  events: {
    
  },

  template: '<p>Hola mundo </p>',

  initialize: function () {
    //this.listenTo(this.model, "change", this.render, this);
  	console.log('Inicio');
  },

  render: function () {
    //var album = this.model.toJSON()
    //var html = this.template(album);
    //this.$el.html(html);
    console.log('Rendereo!!');
    return this;
  }
});