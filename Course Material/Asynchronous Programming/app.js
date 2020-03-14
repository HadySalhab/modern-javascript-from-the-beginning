// document.getElementById('button').addEventListener('click', loadData);

// function loadData() {
//   // Create an XHR Object
//   const xhr = new XMLHttpRequest();

//   // OPEN
//   xhr.open('GET', 'data.txt', true);

//   // console.log('READYSTATE', xhr.readyState);

//   // Optional - Used for spinners/loaders
//   xhr.onprogress = function(){
//     console.log('READYSTATE', xhr.readyState);
//   }

//   xhr.onload = function(){
//     console.log('READYSTATE', xhr.readyState);
//     if(this.status === 200) {
//       // console.log(this.responseText);
//       document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
//     }
//   }

//   // xhr.onreadystatechange = function() {
//   //   console.log('READYSTATE', xhr.readyState);
//   //   if(this.status === 200 && this.readyState === 4){
//   //     console.log(this.responseText);
//   //   }
//   // }

//   xhr.onerror = function() {
//     console.log('Request error...');
//   }

//   xhr.send();


//     // readyState Values
//     // 0: request not initialized 
//     // 1: server connection established
//     // 2: request received 
//     // 3: processing request 
//     // 4: request finished and response is ready


//   // HTTP Statuses
//   // 200: "OK"
//   // 403: "Forbidden"
//   // 404: "Not Found"
// }

document.getElementById("button").addEventListener('click', loadData);

function loadData() {
  //Create an XHR object.
  const xhr = new XMLHttpRequest();

  //Open - fire the request
  xhr.open('GET', 'data.txt', 'true');
  console.log('READYSTATE', xhr.readyState);  //readystate at this point is 1 ( server connection established)

  //OPTIONAL - Used for spinners/loaders
  // - onProgress callback
  xhr.onprogress = function () {
    console.log('READYSTATE', xhr.readyState);  //3: processing request , we can add spinners or loaders at this point
  }

  //  newer way
  // on load callback
  xhr.onload = function () {
    console.log('READYSTATE', xhr.readyState) //by the time onLoad runs, we are already at stage 4. (request finished and response is ready)
    if (this.status === 200) {
      console.log(this.responseText);
    }
  }

  //Older way
  //on readystate callback
  xhr.onreadystatechange = function () {
    console.log('READYSTATE', xhr.readyState); // 1,2,3,4 (goes into all states, thats why we had to check if its ===4 manually)
    if (this.status === 200 && this.readyState === 4) {
      // console.log(this.responseText);
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
    }
  }

  xhr.onerror = function () {
    console.log('Request error...');
  }

  xhr.send();
}