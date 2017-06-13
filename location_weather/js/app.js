
var coords = '';

window.onload = function coordinates(){
 //debugger
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
    coords = lat+','+lon
    //getWeather(coords)
  }
  //outputElem.innerText = xhr;
  xhr.send();

}

//var myDate = new Date( data.daily.data[0].time *1000);
//document.write(myDate.toGMTString()+"<br>"+myDate.toLocaleString());
//var outputElem = document.getElementById('content')

jQuery(document).ready(function() {
  var proxy = 'https://cors-anywhere.herokuapp.com/';
  var apiLinkDS = "https://api.darksky.net/forecast/d407554e29ad2fe7013dc4a60a1d1682/49.8454,24.0054,1497360590";

  jQuery.ajax({
    url: proxy + apiLinkDS,
    success:function(data) {
      console.log(data);

      var time = data.currently.time
      var myDate = new Date(time *1000);
      console.log('current time', myDate.toGMTString()+"<br>"+myDate.toLocaleString());
      apiLinkDS += time
        document.getElementById('date').innerText = myDate.toGMTString()
        document.getElementById('summary').innerText = data.currently.summary
        document.getElementById('temperature').innerText = 'Max temperature: ' + data.currently.apparentTemperatureMax
        document.getElementById('wind').innerText = 'Wind speed: '+ data.currently.windSpeed + ' m/s';
        document.getElementById('pressure').innerText = 'Pressure:' +data.currently.pressure

        if (data.currently.icon === 'rain') {
          document.body.style.backgroundImage = "url('rain.jpg')"
      }
    }
  });
});


function getPrevWeather() {
  var proxy = 'https://cors-anywhere.herokuapp.com/';
  var apiLinkDS = "https://api.darksky.net/forecast/d407554e29ad2fe7013dc4a60a1d1682/49.8454,24.0054,1497274190";

  jQuery.ajax({
    url: proxy + apiLinkDS,
    success:function(data) {
      console.log(data);

      var time = data.currently.time - 86400
      var myDate = new Date(time * 1000);
      console.log('prev time', myDate.toGMTString()+"<br>"+myDate.toLocaleString());
  //apiLinkDS += time
        document.getElementById('summary').innerText = data.currently.summary
        document.getElementById('temperature').innerText = 'Max temperature: ' + data.currently.apparentTemperatureMax
        document.getElementById('wind').innerText = 'Wind speed: '+ data.currently.windSpeed + ' m/s';
        document.getElementById('pressure').innerText = 'Pressure:' +data.currently.pressure

        if (data.currently.icon === 'rain') {
          document.body.style.backgroundImage = "url('rain.jpg')"
      }
    }
  })
}
/*
 function getWeather(coords){
  var date = new Date;
  var xhr = new XMLHttpRequest();
  var time = date.getFullYear() +'-'+ date.getMonth()+'-' + date.getDate()+'T'+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()
  //xhr.open('GET' ,'https://api.darksky.net/forecast/d407554e29ad2fe7013dc4a60a1d1682/'+ coords + ',' + date.getTime())
  //xhr.open('GET' ,'https://api.darksky.net/forecast/d407554e29ad2fe7013dc4a60a1d1682/49.839683,24.029717,' + `${time}` +'Europe/Kyiv')
  xhr.open('GET', 'https://api.darksky.net/forecast/d407554e29ad2fe7013dc4a60a1d1682/'+ coords)

  xhr.onreadystatechange = function(){
   if (xhr.readyState !=4) return;
    if (xhr.status != 200) {
    //  alert('Error '+ xhr.status + ':' +xhr.statusText)
      return;

   }
    console.log(xhr.response);
    document.getElementById('summary').innerText = 'Summary:'+ JSON.parse(xhr.responseText).daily.summary;
    document.getElementById('temperature').innerText = 'Temperature:' + JSON.parse(xhr.responseText).daily.temperature;
    document.getElementById('wind').innerText = 'Wind speed:'+ JSON.parse(xhr.responseText).hourly.windSpeed;
    document.getElementById('pressure').innerText = 'Pressure:' + JSON.parse(xhr.responseText).hourly.pressure;
  }
  //outputElem.innerText = xhr;
  xhr.send();
}




/*----------------------------------------------------------------------------------------------------------------------------------*/



/*
window.onload = function coordinates(){
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


window,onload = function getWeather(coords){
  var date = new Date;
  var xhr = new XMLHttpRequest();
  var time = date.getFullYear() +'-'+ date.getMonth()+'-' + date.getDate()+'T'+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()
  //xhr.open('GET' ,'https://api.darksky.net/forecast/d407554e29ad2fe7013dc4a60a1d1682/'+ coords + ',' + date.getTime())
  //xhr.open('GET' ,'https://api.darksky.net/forecast/d407554e29ad2fe7013dc4a60a1d1682/49.839683,24.029717,' + `${time}` +'Europe/Kyiv')
  xhr.open('GET', 'https://api.darksky.net/forecast/d407554e29ad2fe7013dc4a60a1d1682/' + coords)

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
