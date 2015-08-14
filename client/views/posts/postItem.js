Template.postItem.helpers({
  url: function(){
    return "/post/"+encodeURIComponent(this._id);
  }
});
