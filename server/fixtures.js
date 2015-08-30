if (Posts.find().count() === 0) {
  console.log("Populando banco de dados...");

  Categorias.insert({
    nome: "humildade"
  });
  Categorias.insert({
    nome: "blog"
  });
  Categorias.insert({
    nome: "mussum"
  });


  Posts.insert({
    titulo: "Mussum",
    data: new Date("2014-01-20T14:56:59.301Z"),
    categorias: Categorias.find({nome:'mussum'}, {_id:1}).map(function(item){ return item._id.valueOf(); }),
    conteudo: "Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.<br/>Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Interagi no mé, cursus quis, vehicula ac nisi. Aenean vel dui dui. Nullam leo erat, aliquet quis tempus a, posuere ut mi. Ut scelerisque neque et turpis posuere pulvinar pellentesque nibh ullamcorper. Pharetra in mattis molestie, volutpat elementum justo. Aenean ut ante turpis. Pellentesque laoreet mé vel lectus scelerisque interdum cursus velit auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac mauris lectus, non scelerisque augue. Aenean justo massa."
  });

  Posts.insert({
    titulo: "Mussum (parte 2)",
    data: new Date("2014-01-21T14:56:59.301Z"),
    categorias: Categorias.find({nome:'mussum'}, {_id:1}).map(function(item){ return item._id.valueOf(); }),
    conteudo: "Casamentiss faiz malandris se pirulitá, Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer Ispecialista im mé intende tudis nuam golada, vinho, uiski, carirí, rum da jamaikis, só num pode ser mijis. Adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.<br/>Cevadis im ampola pa arma uma pindureta. Nam varius eleifend orci, sed viverra nisl condimentum ut. Donec eget justis enim. Atirei o pau no gatis. Viva Forevis aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Copo furadis é disculpa de babadis, arcu quam euismod magna, bibendum egestas augue arcu ut est. Delegadis gente finis. In sit amet mattis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis. Pellentesque viverra accumsan ipsum elementum gravidis."
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
