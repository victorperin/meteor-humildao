if (Posts.find().count() === 0) {
  console.log("Populando banco de dados...");

  Categorias.insert({
    nome: "humildade"
  });
  Categorias.insert({
    nome: "blog"
  });
  Categorias.insert({
    nome: "Mussum"
  });
  Categorias.insert({
    nome: "Silvio Santos"
  });



 Posts.insert({
   titulo: "Silvio Santos Origins",
   data: new Date("2014-01-18T14:56:59.301Z"),
   categorias: Categorias.find({nome:"Silvio Santos"}, {_id:1}).map(function(item){ return item._id.valueOf(); }),
   conteudo: "Mah roda a roduamm. Ma o Silvio Santos Ipsum é muitoam interesanteam. Com ele ma você vai gerar textuans ha haae. Ha hai. Bem boladoam, bem boladoam. Bem gozadoam. É por sua conta e riscoamm? O Raul Gil é gayam! ... Maa O Ah Ae! Ih Ih! O Raul Gil é gayamm! Mah ooooee vem pra cá. Vem pra cá. Mah ooooee vem pra cá. Vem pra cá. Mah ooooee vem pra cá. Vem pra cá. Eu não queria perguntar isso publicamente, ma vou perguntar. Carla, você tem o ensino fundamentauam? Eu só acreditoammmm.... Vendoammmm. Mah você não consegue né Moisés? Você não consegueam. Ma vale dérreaisam? Ma vale dérreaisam? O prêmio é em barras de ouro, que vale mais que dinheiroam.<br/>É com você Lombardiam. O Raul Gil é gayam! ... Maa O Ah Ae! Ih Ih! O Raul Gil é gayamm! Mah ooooee vem pra cá. Vem pra cá. Eu não queria perguntar isso publicamente, ma vou perguntar. Carla, você tem o ensino fundamentauam? Mah roda a roduamm. O prêmio é em barras de ouro, que vale mais que dinheiroam. Mah é a porta da esperançaam. Patríciaaammmm... Luiz Ricardouaaammmmmm. Um, dois três, quatro, PIM, entendeuam? É bom ou não éam? Ma! Ao adquirir o carnê do Baú, você estará concorrendo a um prêmio de cem mil reaisam. Mah você não consegue né Moisés? Você não consegueam."
 });

 Posts.insert({
   titulo: "Silvio Santos Imortal",
   data: new Date("2014-01-19T14:56:59.301Z"),
   categorias: Categorias.find({nome:"Silvio Santos"}, {_id:1}).map(function(item){ return item._id.valueOf(); }),
   conteudo: "Eu só acreditoammmm.... Vendoammmm. Ma você está certo dissoam? Mah você mora com o papai ou com a mamãem? Ha hai. Bem boladoam, bem boladoam. Bem gozadoam. O Raul Gil é gayam! ... Maa O Ah Ae! Ih Ih! O Raul Gil é gayamm! Mah ooooee vem pra cá. Vem pra cá. É com você Lombardiam. Ma vale dérreaisam? É dinheiro ou não éam? Você veio da caravana de ondeammm? Ma tem ou não tem o celular do milhãouamm? Você veio da caravana de ondeammm?<br/>Ma tem ou não tem o celular do milhãouamm? Ma vai pra lá. É bom ou não éam? Wellintaaammmmmmmmm. Mah roda a roduamm. O arriscam tuduam, valendo um milhão de reaisuam. É fácil ou não éam? Eu só acreditoammmm.... Vendoammmm. Ha haeeee. Hi hi. O arriscam tuduam, valendo um milhão de reaisuam. Ma vale dérreaisam? Ma! Ao adquirir o carnê do Baú, você estará concorrendo a um prêmio de cem mil reaisam."
 });


  Posts.insert({
    titulo: "Mussum",
    data: new Date("2014-01-20T14:56:59.301Z"),
    categorias: Categorias.find({nome:'Mussum'}, {_id:1}).map(function(item){ return item._id.valueOf(); }),
    conteudo: "Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.<br/>Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Interagi no mé, cursus quis, vehicula ac nisi. Aenean vel dui dui. Nullam leo erat, aliquet quis tempus a, posuere ut mi. Ut scelerisque neque et turpis posuere pulvinar pellentesque nibh ullamcorper. Pharetra in mattis molestie, volutpat elementum justo. Aenean ut ante turpis. Pellentesque laoreet mé vel lectus scelerisque interdum cursus velit auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac mauris lectus, non scelerisque augue. Aenean justo massa."
  });

  Posts.insert({
    titulo: "Mussum (parte 2)",
    data: new Date("2014-01-21T14:56:59.301Z"),
    categorias: Categorias.find({nome:'Mussum'}, {_id:1}).map(function(item){ return item._id.valueOf(); }),
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
