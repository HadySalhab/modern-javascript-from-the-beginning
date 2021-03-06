const posts = [{
  title: 'post one', body: 'this is post one'
}, {
  title: 'post two', body: 'this is post two'
}]

function createPost(post, callback) {
  setTimeout(function () {
    posts.push(post);
    callback();
  }, 2000);
}

function getPosts() {
  setTimeout(function () {
    let output = '';
    posts.forEach(function (post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000)
}

createPost({ title: 'Post Three', body: 'This is post Three' }, getPosts);
