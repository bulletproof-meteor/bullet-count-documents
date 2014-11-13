Meteor.startup(function() {
  if(!Posts.findOne()) {
    for(var lc=0; lc<10000; lc++) {
      Posts.insert({
        title: "Title-" + lc,
        author: "Author-" + (lc % 10)
      }); 
    }
  }
});