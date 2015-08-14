Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('postsList', {path: '/'});
  this.route('postPagina', {
    path: '/post/:_id',
    data: function() { return Posts.findOne(this.params._id); }
  });
});
