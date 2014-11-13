Posts = new Mongo.Collection('posts');
Comments = new Mongo.Collection('comments');

if(Meteor.isClient) {
  var author = "Author-" + Math.floor(Math.random() * 10);
  Meteor.subscribe("posts", author, function() {
    if(location.href.match(/loadtest/)) {
      location.reload();
    }
  });

  Template.dashboard.helpers({
    counter: function() {
      return {
        postCount: Counts.get('post-count'),
        author: author
      }; 
    }
  });
}

if(Meteor.isServer) {
  Meteor.publish('posts', function(author) {
    var cursor = Posts.find({author: author});
    Counts.publish(this, 'post-count', cursor, {nonReactive: true});
  });
}