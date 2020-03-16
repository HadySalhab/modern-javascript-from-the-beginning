const easyHttp = new EasyHttp();
const data = { title: "this is a cutom post", body: "this is a custom body" };

// easyHttp
//   .get("https://jsonplaceholder.typicode.com/posts")
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// easyHttp
//   .put("https://jsonplaceholder.typicode.com/posts/1", data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

easyHttp
  .post("https://jsonplaceholder.typicode.com/posts", data)
  .then(data => console.log(data))
  .catch(err => console.log(err));

// easyHttp
//   .delete("https://jsonplaceholder.typicode.com/posts/1")
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// // easyHttp.delete("https://jsonplaceholder.typicode.com/posts/1", function(
// //   err,
// //   updatedPost
// // ) {
// //   if (err) {
// //     console.log(err);
// //   } else {
// //     console.log(updatedPost);
// //   }
// // });
