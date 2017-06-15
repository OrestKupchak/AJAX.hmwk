
window.onload = function coordinates(){
 //debugger
 var coords = '';

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
    return coords
    //getWeather(coords)
  }
  //outputElem.innerText = xhr;
  xhr.send();

}

var currentDay;
var unixTime;

jQuery(document).ready(function() {
  var proxy = 'https://cors-anywhere.herokuapp.com/';
  var apiLinkDS = "https://api.darksky.net/forecast/d407554e29ad2fe7013dc4a60a1d1682/49.8454,24.0054";

  //var utcDate = Date.UTC(date.getYear(), date.getMonth()+1, date.getDate());

  jQuery.ajax({
    url: proxy + apiLinkDS,
    success:function(data) {
      console.log(data);
       currentDay = new Date();

        document.getElementById('date').innerText = currentDay.toLocaleDateString()
        document.getElementById('summary').innerText = data.currently.summary
        document.getElementById('temperature').innerText = 'Max temperature: ' + Math.round((data.currently.temperature - 32) * 5/9) + '°C'
        document.getElementById('wind').innerText = 'Wind speed: '+ data.currently.windSpeed + ' kph';
        document.getElementById('pressure').innerText = 'Pressure: ' +data.currently.pressure +' hPa'


    }
  });
});



function getPrevWeather() {
  var proxy = 'https://cors-anywhere.herokuapp.com/';
  var apiLinkDS = "https://api.darksky.net/forecast/d407554e29ad2fe7013dc4a60a1d1682/49.8454,24.0054";


  var prevDay = new Date(currentDay.getFullYear(), currentDay.getMonth(), currentDay.getDate() - 1);
  var prevDayTime = prevDay.getTime() / 1000;
  unixTime = prevDayTime;
  currentDay = new Date(unixTime * 1000);


  jQuery.ajax({
    url: proxy + apiLinkDS + ',' + unixTime,
    success:function(data) {
      console.log(data);

         document.getElementById('date').innerText = currentDay.toLocaleDateString()
        document.getElementById('summary').innerText = data.currently.summary
        document.getElementById('temperature').innerText = 'Max temperature: ' + Math.round((data.currently.temperature - 32) * 5/9) + '°C'
          document.getElementById('wind').innerText = 'Wind speed: '+ data.currently.windSpeed + ' kph';
        document.getElementById('pressure').innerText = 'Pressure: ' +data.currently.pressure +' hPa'


    }
  })
}



  function getNextWeather(e) {
  var proxy = 'https://cors-anywhere.herokuapp.com/';
  var apiLinkDS = "https://api.darksky.net/forecast/d407554e29ad2fe7013dc4a60a1d1682/49.8454,24.0054";

   var nextDay = new Date(currentDay.getFullYear(), currentDay.getMonth(), currentDay.getDate() + 1);
  var nextDayTime = nextDay.getTime() / 1000;
  unixTime = nextDayTime;
  currentDay = new Date(unixTime * 1000);

   if(nextDay.getDate() > new Date().getDate()) {
    jQuery('#next').attr('onclick', 'e()'); //TODO
  } else {
     jQuery('#next').attr('onclick', 'getNextWeather()');
  }

  jQuery.ajax({
    url: proxy + apiLinkDS + ',' + unixTime,
    success:function(data) {
      console.log(data);

        
         document.getElementById('date').innerText = currentDay.toLocaleDateString()      
        document.getElementById('summary').innerText = data.currently.summary
        document.getElementById('temperature').innerText = 'Max temperature: ' + Math.round((data.currently.temperature - 32) * 5/9) + '°C'
         document.getElementById('wind').innerText = 'Wind speed: '+ data.currently.windSpeed + ' kph';
        document.getElementById('pressure').innerText = 'Pressure: ' +data.currently.pressure +' hPa'

        
    }
  })
}


document.readyState = function weatherBackground(data) {
  if (data.currently.icon === "cloudy") {
    console.log(data.currently.icon)
    document.body.style.backgroundImage = "url('clouds.gif')";
  } else if (data.currently.icon === "clear") {
     document.body.style.backgroundImage = ".jpg";
  } else if (data.currently.icon === "partly-cloudy") {
     document.body.style.backgroundImage = "url('clouds2.gif')";
  } else if (data.currently.icon === "rain") {
     document.body.style.backgroundImage = "url('rain.jpg')";
  } else if (data.currently.icon === "light-rain") {
     document.body.style.backgroundImage = "url('rain.jpg')";
  } else {
    document.body.style.backgroundImage = "lviv.jpg";
  }
}
