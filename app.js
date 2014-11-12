Posts = new Mongo.Collection('posts');
Comments = new Mongo.Collection('comments');

if(Meteor.isClient) {
  Template.dashboard.helpers({
    postCount: function() {
      return 512;
    }
  });
}