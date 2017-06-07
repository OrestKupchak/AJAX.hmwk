
var outputElem = document.body
//outputElem.innerText = 'Хз чи воно працює'

function coordinates(){
  var xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://darksky.net/details/49.8454,24.0054/' +  date.getFullYear() +'-'+ date.getMonth()+'-' + date.getDate() + '/si24/en')
  //xhr.open('GET', 'https://darksky.net/forecast/')

  xhr.onreadystatechange = function(){
   if (xhr.readyState !=4) return;
    if (xhr.status != 200) {
      alert('Error '+ xhr.status + ':' +xhr.statusText)
      return;
  console.log(xhr.response)
   }
    console.log(xhr);
    outputElem.innerHTML = xhr;
  }
  outputElem.innerText = xhr;
  xhr.send();
}



var previous = document.getElementById('previous')
previous.addEventListener('click', getPrevWeather)

function getPrevWeather() {
    var date = new Date;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://darksky.net/details/49.8454,24.0054/' +  date.getFullYear() +'-'+ date.getMonth()+'-' + date.getDate()-1 + '/si24/en')

    xhr.onreadystatechange = function(){
     if (xhr.readyState !=4) return;
      if (xhr.status != 200) {
        alert('Error '+ xhr.status + ':' +xhr.statusText)
        return;
          console.log(xhr.response)
     }
      console.log(xhr);
      outputElem.innerHTML = xhr;
    }
    outputElem.innerText = xhr;
    xhr.send();
    }



  //  var next = document.getElementById('next')
  //  next.addEventListener('click', getNextWeather)

    function getNextWeather(e) {
        var date = new Date;
        var xhr = new XMLHttpRequest();
        var default = 'https://darksky.net/details/49.8454,24.0054/' +  date.getFullYear() +'-'+ date.getMonth()+'-' + date.getDate() + '/si24/en'
        if ()

        xhr.open('GET', 'https://darksky.net/details/49.8454,24.0054/' +  date.getFullYear() +'-'+ date.getMonth()+'-' + date.getDate()+1 + '/si24/en')

        xhr.onreadystatechange = function(){
         if (xhr.readyState !=4) return;
          if (xhr.status != 200) {
            alert('Error '+ xhr.status + ':' +xhr.statusText)
            return;
              console.log(xhr.response)
         }
          console.log(xhr);
          outputElem.innerHTML = xhr;
        }
        outputElem.innerText = xhr;
        xhr.send();
        }



/*
var outputElem = document.body

function coordinates(){
  var xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://www.where-am-i.net/')
  xhr.setRequestHeader('Origin', 'http://127.0.0.1:8080/');
  xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
  xhr.setRequestHeader('Access-Control-Allow-Credentials', 'true');
  xhr.setRequestHeader ('Access-Control-Allow-Headers', 'Content-Length')
  xhr.setRequestHeader ('Access-Control-Expose-Headers', 'Content-Length');

  xhr.timeout = 0
  xhr.onreadystatechange = function(){
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
