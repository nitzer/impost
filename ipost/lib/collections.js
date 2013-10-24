Post = new Meteor.Collection('Post');
if (Meteor.isServer && Post.find().count() == 0) {
	var posts = [
		{
			title:'Test',
			content:"this is my content<br> <a class='oembed' href='http://www.youtube.com/watch?v=9jPXPLEgAHc&feature=youtu.be'>bjjscout</a>",
			comments: [
				{
					user:'test',
					comment:'Lies can always be lies.',
					replys:[
						{user:'test',reply:'this is not true!'},
						{user:'test',reply:'obviously not :]'},
					]
				},
				{user:'test',comment:'o0o0o00o0o0o'},
				{user:'test',comment:'o0o0o00o0o0o'}
			]
		}
	];
	_.each(posts, function(post){
		Post.insert(post);
	});
}
