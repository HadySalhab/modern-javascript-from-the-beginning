class EasyHttp {
  async get(url) {
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
  }

  async put(url, data) {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const resData = await response.json();
    return resData;
  }

  async post(url, data) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const resData = await response.json();
    return resData;
  }

  async delete(url) {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      }
    });
    const resData = await "Resource deleted...";
    return resData;
  }
}

// //Delete request
// EasyHttp.prototype.delete = function(url, callback) {
//   let self = this;
//   this.http.open("DELETE", url, true);
//   this.http.onload = function() {
//     if (self.http.status === 200 || self.http.status === 201) {
//       callback(null, "Post Deleted");
//     } else {
//       callback("Error:" + self.http.status);
//     }
//   };
//   this.http.send();
// };
