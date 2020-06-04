//Blog
function Blog() {
  this.comments = [];
  this.posts = [];
}

Blog.prototype.fetchPosts = function (cb) {
  var self = this;
  $.ajax({
    url: 'https://jsonplaceholder.typicode.com/posts',
    type: 'GET',
  })
    .done(function (posts) {
      self.posts = posts;
      cb();
    });
};

Blog.prototype.fetchComments = function (cb) {
  $.ajax({
    url: 'https://jsonplaceholder.typicode.com/comments',
    type: 'GET',
    context: this
  })
    .done(function (comments) {
      this.comments = comments;
      cb();
    })
};

Blog.prototype.filterCommentsByPostId = function(id) {
  var matchComments = [];

  this.comments.forEach(function (item) {
    if (item.postId == id) {
      matchComments.push(item)
    }
  });

  return matchComments;
}

Blog.prototype.addComment = function (text, postId) {
  $.ajax({
    url: 'https://jsonplaceholder.typicode.com/comments',
    type: 'POST',
    context: this,
    data: {
      body: text,
      name: '123',
      email: 'qwwe@ru',
      postId: postId
    }
  })
    .done(function (newComments) {
      this.comments.push(newComments);
      this.renderPosts();
    });
}

Blog.prototype.filterPostsByPostId = function(id) {
	var matchPosts = [];
	
	this.posts.forEach(function (item) {
		if (item.postId == id) {
			matchPosts.push(item)
		}
	});
	
	return matchPosts;
}

Blog.prototype.addPost = function (text, postId) {
	$.ajax({
		url: 'https://jsonplaceholder.typicode.com/posts',
		type: 'POST',
		context: this,
		data: {
			body: text,
			name: '123',
			email: 'qwwe@ru',
			postId: postId
		}
	})
		.done(function (newPosts) {
			this.posts.push(newPosts);
			this.renderPosts();
		});
}

Blog.prototype.renderPosts = function () {
  var self = this;
  $('.posts').html('');
  this.posts.forEach(function (item) {
    var filteredCommentsByPostId = self.filterCommentsByPostId(item.id);
    var filteredPostsByPostId = self.filterPostsByPostId(item.id);
	  var post = new Post(item.id, item.userId, item.title, item.body, filteredCommentsByPostId, filteredPostsByPostId);
    var element = post.render();
    $('.posts').append(element);
  });

  $('.comment-input').on('keyup', function (e) {
    var keyCode = e.keyCode;

    if (keyCode == 13) {
      var data = $(this).data();
      var postId = data.id;
      var value = e.target.value;
      self.addComment(value, postId);
    }
  });
  
  $('.post-input').on('keyup', function (e) {
	  var keyCode = e.keyCode;
	
	  if (keyCode == 13) {
		  var data = $(this).data();
		  var postId = data.id;
		  var value = e.target.value;
		  self.addPost(value, postId);
	  }
  })

  $('button').click(function (e) {
    $(this).parent().find('p').toggle('slow');
  })
}

// Post
function Post(id, userId, title, body, comments) {
  this.id = id;
  this.userId = userId;
  this.title = title;
  this.body = body;
  this.comments = comments;
}

Post.prototype.render = function () {
	var postsHtml = '';
	
	this.posts.forEach(function (item) {
		postsHtml += '<p class="post-item">' + item.body + '</p>';
	})
	
	return '<div class="addPost">\
			<div class="posts-box">'+ postsHtml +'</div>\
			<input class="post-input" type="text" data-id="' + this.id +'"/>\
		</div>';
}

Post.prototype.render = function () {
  var commentsHtml = '';
  
  this.comments.forEach(function (item) {
    commentsHtml += '<p class="comment-item">' + item.body + '</p>';
  })
	
  return '<div class="post-item">\
    <h3>' + this.title + '</h3>\
    <p>' + this.body + '</p>\
    <div class="comments-box">'+ commentsHtml +'</div>\
    <input class="comment-input" type="text" data-id="' + this.id +'"/>\
    <button class="post-submit-collapse" type="submit">Свернуть<div/>\
    <button class="post-submit-expand" type="submit">Развернуть<div/>\
  </div>';
}

var blog = new Blog();

blog.fetchPosts(function () {
  blog.fetchComments(function () {
    blog.renderPosts();
  });
});