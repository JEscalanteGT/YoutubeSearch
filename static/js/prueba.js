var Backbone = require('backbone'),
	HeaderView = require('./backbone/views/header'),
	$ = require('jquery');
	Backbone.$ = $;

$(function(){
	var header = new HeaderView();
	header.render();
	$('body').prepend(header.$el);
});