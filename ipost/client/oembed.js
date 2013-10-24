Template.PostsCollection.rendered = function(){
	$(".oembed").oembed(null,
	{
		embedMethod: "replace",
		maxWidth: 1024,
		maxHeight: 768,
		vimeo: { autoplay: false, maxWidth: 200, maxHeight: 200},
		youtube: { autoplay: false, maxWidth: 500 },
		wikipedia: { autoplay: true, maxWidth: 200, maxHeight: 200},
		flickr: { autoplay: false, maxWidth: 200, maxHeight: 200},
		twitpic: { autoplay: false, maxWidth: 200, maxHeight: 200},
		imdb: { autoplay: false, maxWidth: 200, maxHeight: 200}
	});
}