
$.ajax({
         url: 'https://www.where-am-i.net/',
         type: "GET",
         beforeSend: function(xhr){xhr.setRequestHeader('Origin', 'http://127.0.0.1:8080/');},
         success: function() { alert('Success!'); }
      });




/*
var outputElem = document.body

function coordinates(){
  var xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://www.where-am-i.net/')
  xhr.setRequestHeader('Origin', 'http://127.0.0.1:8080/');
  xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
  xhr.setRequestHeader('Access-Control-Allow-Credentials', true);
  xhr.setRequestHeader ('Access-Control-Allow-Headers', 'Content-Length')
  xhr.setRequestHeader ('Access-Control-Expose-Headers', 'Content-Length');

  xhr.timeout = 0
  xhr.onreadyststechange = function(){
   if (xhr.readyState !=4) return;
    if (xhr.status != 200) {
      alert('Error '+ xhr.status + ':' +xhr.statusText)
      return;
  console.log(xhr.response)
    }
    outputElem.innerHTML = xhr.responseText;
  }
  outputElem.innerHTML = xhr.responseText
  xhr.send();
}
*/
