let xhrget = document.querySelector("#xhrget");
let xhrpost = document.querySelector("#xhrpost");
let xhrupdate = document.querySelector("#xhrupdate");
let xhrdelete = document.querySelector("#xhrdelete");


// XML request

// xhrget.addEventListener("click", function() {
//     let XHR = new XMLHttpRequest();
//     XHR.onreadystatechange = function() {
//         if(this.readyState == 4 && this.status ==200) {
//             let xhrQuote = JSON.parse(XHR.responseText);
//             console.log(xhrQuote);
//         }
//     }
//     XHR.open("GET", "http://localhost/blog_backend_php/api/post/read.php");
//     XHR.send();
// });

// xhrpost.addEventListener("click", function() {
//     let params = {
//         "title": "New Post",
//         "body": "This is new post from javascript ajax",
//         "author": "LALALA"
//     }
//     let XHR = new XMLHttpRequest();
//     XHR.onreadystatechange = function() {
//         if(this.readyState == 4 && this.status == 200) {
//             console.log("posted");
//         }
//     }
//     XHR.open("POST", "http://localhost/blog_backend_php/api/post/create.php", true);
//     XHR.send(JSON.stringify(params));
// });

// xhrupdate.addEventListener("click", function() {
//     let params = {
//         "title": "New Post",
//         "body": "This is new post from javascript ajax",
//         "author": "LALALAA",
//         "id": "2"
//     }
//     let XHR = new XMLHttpRequest();
//     XHR.onreadystatechange = function() {
//         if(this.readyState == 4 && this.status == 200) {
//             console.log("updated");
//         }
//     }
//     XHR.open("PUT", "http://localhost/blog_backend_php/api/post/update.php", true);
//     XHR.send(JSON.stringify(params));
// });

// xhrdelete.addEventListener("click", function() {
//     let params = {
//         "id": "1"
//     }
//     let XHR = new XMLHttpRequest();
//     XHR.onreadystatechange = function() {
//         if(this.readyState == 4 && this.status == 200) {
//             console.log("deleted");
//         }
//     }
//     XHR.open("DELETE", "http://localhost/blog_backend_php/api/post/delete.php", true);
//     XHR.send(JSON.stringify(params));
// })


// fetch

// xhrget.addEventListener("click", function() {
//     fetch("http://localhost/blog_backend_php/api/post/read.php")
//     .then(res => res.json())
//     .then(data => console.log(data));
// });

// xhrpost.addEventListener("click", function() {
//     let params = {
//         "title": "New Post",
//         "body": "This is new post from javascript ajax",
//         "author": "LALALA"
//     }
//     fetch("http://localhost/blog_backend_php/api/post/create.php", {
//         // CORS issue
//         // headers: { "Content-Type": "application/json; charset=utf-8" },
//         method: 'POST', 
//         body: JSON.stringify(params)
//     }).then(res => console.log("posted"));
// });

// xhrupdate.addEventListener("click", function() {
//     let params = {
//         "title": "New Post",
//         "body": "This is new post from javascript ajax",
//         "author": "LALALA",
//         "id": "7"
//     }
//     fetch("http://localhost/blog_backend_php/api/post/update.php", {
//         // CORS issue
//         // headers: { "Content-Type": "application/json; charset=utf-8" },
//         method: 'PUT', 
//         body: JSON.stringify(params)
//     }).then(res => console.log("updated"));
// });

// xhrdelete.addEventListener("click", function() {
//     let params = {
//         "id": "6"
//     }
//     fetch("http://localhost/blog_backend_php/api/post/delete.php", {
//         // CORS issue
//         // headers: { "Content-Type": "application/json; charset=utf-8" },
//         method: 'DELETE', 
//         body: JSON.stringify(params)
//     }).then(res => console.log("deleted"));
// })

