
var get = function (url, callback) {

  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState != xhr.DONE) return;

    var status = xhr.status;
    var headers = xhr.getAllResponseHeaders();
    var text = xhr.responseText;

    callback(status, headers, text);
  }

  xhr.send();
}

var appendImage = function (url) {
  var imgEl = document.createElement('img');
  // <img />

  imgEl.src = url;
  // <img src="{url}" />

  imgEl.onerror = function () {
    imgEl.classList.add('hidden')
    //alert(1);
  }

  document.getElementById('noise').appendChild(imgEl);
}

// getImages({limit: 5})
// getImages({})
// getImages() -- by default should take 100 images

// getImages({limit: 5, category: "cats"})
// getImages({category: "cats"})
// getImages()

// "S"OLID, S -> Single Responsibility

var getImages = function (params = {}) {
   var url = 'https://www.reddit.com/r/pics/search.json?q='

 if (params.length > 0) {
    params.limit = params.limit
    params.category = params.category
} else {
    params.limit = 100
    params.category = 'cats'
}
    url += params.category;
    url += '/&limit=' + params.limit;

  get(url, function (status, headers, body) {
    var response = JSON.parse(body);

    _.each(response.data.children, function (child) {
      var url = child.data.url;

      appendImage(url);

      console.log('ITEM!', child.data.url);
    });

  });
}
