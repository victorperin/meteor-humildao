Template.postList.helpers({
  posts: function(){
    return Posts.find({}, {sort: {data: -1}});
  }
});
