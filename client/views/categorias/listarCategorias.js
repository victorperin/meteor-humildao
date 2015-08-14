Template.listarCategorias.helpers({
  categorias: function(){
    var categorias = Categorias.find();
    var categoriasArray = [];
    categorias.forEach(function(categoria) {

      categoria.url = "/categoria/" + encodeURIComponent(categoria.nome);
      categoriasArray.push(categoria);
    });
    return categoriasArray;
  }
});
