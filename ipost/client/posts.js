Meteor.Router.add({
	'/': 'index',
	'/posts': 'posts',
	'/post/:id': function(id){
		Session.set('currentPostId',id);
		return 'post';
	}
});
Template.PostsCollection.helpers({
	posts: function(){ return Post.find(); },
});
Template.post.helpers({
	post: function(){ return Post.findOne(Session.get('currentPostId'));}
})