var Backbone = require('backbone'),
	$ = require('jquery'),
    _ = require('underscore');

module.exports = Backbone.View.extend({
  tagName: 'header',
  className: 'Header',

  events: {
    'click #Header-menuButton': 'displayMenu'
  },

  template: _.template($('#Template-header').html()),

  initialize: function () {
    //this.listenTo(this.model, "change", this.render, this);
  },

  render: function () {
    //var album = this.model.toJSON()
    var html = this.template();
    this.$el.html(html);
    return this;
  },
  displayMenu: function (){
  	this.$('#Header-nav').toggleClass('Header-nav--displayMenu');
  }
});