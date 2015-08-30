Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/',{
  name: 'postList',
  template: 'postList',
  data: function (){
    var data = {
      posts: Posts.find({}, {sort: {data: -1}})
    }
    return data;
  }
});
Router.route('/post/:_id',{
  name: 'postPagina',
  template:'postPagina',
  data: function() { return Posts.findOne(this.params._id); }
});
Router.route('/categoria/:nomeCategoria',{
  name: 'Categoria',
  template: 'postList',
  data: function(){
    var idCategoria = Categorias.findOne({nome: this.params.nomeCategoria})._id;
    var data = {
      posts: Posts.find({categorias:idCategoria}, {sort: {data: -1}})
    }
    return data;
  }
});
