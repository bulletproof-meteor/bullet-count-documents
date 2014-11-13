Posts = new Mongo.Collection('posts');
Comments = new Mongo.Collection('comments');

if(Meteor.isClient) {
  var author = "Author-" + Math.floor(Math.random() * 10);
  Meteor.subscribe("posts", author);

  Template.dashboard.helpers({
    counter: function() {
      return {
        postCount: Posts.find({author: author}).count(),
        author: author
      }; 
    }
  });
}

if(Meteor.isServer) {
  Meteor.publish('posts', function(author) {
    return Posts.find({author: author});
  });
}