Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/',{
  name: 'postList',
  template: 'postList'
});
Router.route('/post/:_id',{
  name: 'postPagina',
  template:'postPagina',
  data: function() { return Posts.findOne(this.params._id); }
});
