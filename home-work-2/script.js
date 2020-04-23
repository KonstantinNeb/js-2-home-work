function makeGETRequest(url, callback) {
  var xhr;

  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    xhr = new ActiveXObject('Microsoft.XMLHTTP');
  }

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      callback(xhr.responseText)
    }
  }

  xhr.ontimeout = function () {
    //...
  }

  xhr.open('GET', url, true);
  xhr.send();
}

function Blog() {
  this.users = [];
}

Blog.API_URL = 'https://jsonplaceholder.typicode.com/';

Blog.prototype.fetchUsers = function (callback) {
  var self = this;
  makeGETRequest(Blog.API_URL + '/users', function (res) {
    self.users = res;
    callback();
  });
}

var blog = new Blog();

blog.fetchUsers(function () {
  document.write('<pre>' + blog.users + '</pre>');
});