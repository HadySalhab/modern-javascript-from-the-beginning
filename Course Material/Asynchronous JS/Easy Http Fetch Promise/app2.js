const http = new EasyHTTP();

//GetUsers

// http
//   .get("https://jsonplaceholder.typicode.com/posts")
//   .then(data => console.log(data))
//   .catch(error => console.log(eroor));

//User Data
const data = {
  name: "John Doe",
  userName: "JohnDoe",
  email: "jdoe@gmail.com"
};

// http
//   .post("https://jsonplaceholder.typicode.com/posts", data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

//Update post
// http
//   .put("https://jsonplaceholder.typicode.com/posts/1", data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

//delete
http
  .delete("https://jsonplaceholder.typicode.com/posts/1")
  .then(data => console.log(data))
  .catch(err => console.log(err));
