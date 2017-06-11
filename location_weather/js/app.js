function coordinates(){
 debugger
  var xhr = new XMLHttpRequest();
  xhr.open('GET' ,'http://ip-api.com/json')
 

  xhr.onreadystatechange = function(){
   if (xhr.readyState !=4) return;
    if (xhr.status != 200) {
      alert('Error '+ xhr.status + ':' +xhr.statusText)
      return;
  
   }
    console.log(xhr.response);
    document.getElementById('header').innerText = JSON.parse(xhr.responseText).country + '/' + JSON.parse(xhr.responseText).city;
    var lon = JSON.parse(xhr.responseText).lon
    console.log(lon)
    var lat = JSON.parse(xhr.responseText).lat
    console.log(lat)
    var coords = lat+','+lon
    return coords
  }
  //outputElem.innerText = xhr;
  xhr.send();
}



var outputElem = document.getElementById('content')


function getWeather(coords){
  var date = new Date;
  var xhr = new XMLHttpRequest();
  var time = date.getFullYear() +'-'+ date.getMonth()+'-' + date.getDate()+'T'+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()
  xhr.open('GET' ,'https://api.darksky.net/forecast/d407554e29ad2fe7013dc4a60a1d1682/'+ coords + ',' + date.getTime())
  //xhr.open('GET' ,'https://api.darksky.net/forecast/d407554e29ad2fe7013dc4a60a1d1682/49.839683,24.029717,' + `${time}` +'Europe/Kyiv')
 // xhr.open('GET', 'https://api.darksky.net/')

  xhr.onreadystatechange = function(){
   if (xhr.readyState !=4) return;
    if (xhr.status != 200) {
      alert('Error '+ xhr.status + ':' +xhr.statusText)
      return;
  
   }
    console.log(xhr.response);
    document.getElementById('header').innerText = JSON.parse(xhr.responseText).timezone;
  }
  //outputElem.innerText = xhr;
  xhr.send();
}



//2000-04-06T12:20:05 -time example


//var previous = document.getElementById('previous')
//previous.addEventListener('click', getPrevWeather)

function getPrevWeather() {
    var date = new Date;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://darksky.net/details/49.8454,24.0054/' +  date.getFullYear() +'-'+ date.getMonth()+'-' + date.getDate()-1 + '/si24/en')

    xhr.onreadystatechange = function(){
     if (xhr.readyState !=4) return;
      if (xhr.status != 200) {
        alert('Error '+ xhr.status + ':' +xhr.statusText)
        return;
         
     }
      console.log(xhr.response);
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
        var defaultDate = 'https://darksky.net/details/49.8454,24.0054/' +  date.getFullYear() +'-'+ date.getMonth()+'-' + date.getDate() + '/si24/en'
       

        xhr.open('GET', 'https://darksky.net/details/49.8454,24.0054/' +  date.getFullYear() +'-'+ date.getMonth()+'-' + date.getDate()+1 + '/si24/en')

        xhr.onreadystatechange = function(){
         if (xhr.readyState !=4) return;
          if (xhr.status != 200) {
            alert('Error '+ xhr.status + ':' +xhr.statusText)
            return;
              
         }
          console.log(xhr.response);
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
