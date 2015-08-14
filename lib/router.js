Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('postList', {path: '/'});
  this.route('postPagina', {
    path: '/post/:_id',
    data: function() { return Posts.findOne(this.params._id); }
  });
});
