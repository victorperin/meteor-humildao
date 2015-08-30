if (Posts.find().count() === 0) {
  console.log("Populando banco de dados...");

  Categorias.insert({
    nome: "humildade"
  });
  Categorias.insert({
    nome: "blog"
  });

  Posts.insert({
    titulo: 'First Post',
    data: new Date('2014-01-22T14:56:59.301Z'),
    conteudo: '<p>teste</p><br/><code>qwertyuiop</code>',
    categorias: Categorias.find({nome:'humildade'}, {_id:1}).map(function(item){ return item._id.valueOf(); })
  });

  Posts.insert({
    titulo: 'Second Post',
    data: new Date('2014-01-23T14:56:59.301Z'),
    conteudo: '<p>teste</p><br/><b>qwertyuiop</b>',
    categorias: Categorias.find({nome:'blog'}, {_id:1}).map(function(item){ return item._id.valueOf(); })
  });
}else{
  console.log("Banco de dados já está populado, por favor, execute 'meteor reset' no terminal.")
}
