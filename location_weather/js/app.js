window.onload = function coordinates() {    //find our coordinates using "ip-api"

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://ip-api.com/json')
    var coords = '';
    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) return;
        if (xhr.status != 200) {
            alert('Error ' + xhr.status + ':' + xhr.statusText)
            return;
        }
        console.log(xhr.response);
        document.getElementById('header').innerText = JSON.parse(xhr.responseText).country + '/' + JSON.parse(xhr.responseText).city;
        var lon = JSON.parse(xhr.responseText).lon
        console.log(lon)
        var lat = JSON.parse(xhr.responseText).lat
        console.log(lat)
        coords = lat + ',' + lon
        return coords
    }

    xhr.send();
}

var currentDay;
var unixTime;

jQuery(document).ready(function() {                    // find weather information for today with making CORS requests using proxy server
    var proxy = 'https://cors-anywhere.herokuapp.com/';
    var link = "https://api.darksky.net/forecast/d407554e29ad2fe7013dc4a60a1d1682/49.8454,24.0054";

    jQuery.ajax({
        url: proxy + link,
        success: function(data) {
            console.log(data);
            currentDay = new Date();
            jQuery('#date').text(currentDay.toLocaleDateString())
            jQuery('#summary').text(data.currently.summary)
            jQuery('#temperature').text('Max temperature: ' + Math.round((data.currently.temperature - 32) * 5 / 9) + '°C')
            jQuery('#wind').text('Wind speed: ' + data.currently.windSpeed + ' kph');
            jQuery('#pressure').text('Pressure: ' + data.currently.pressure + ' hPa')

        }
    });
    weatherBackground()
});

function getPrevWeather() {  //get weather information for the day before
    var proxy = 'https://cors-anywhere.herokuapp.com/';
    var link = "https://api.darksky.net/forecast/d407554e29ad2fe7013dc4a60a1d1682/49.8454,24.0054";

    var prevDay = new Date(currentDay.getFullYear(), currentDay.getMonth(), currentDay.getDate() - 1);
    var prevDayTime = prevDay.getTime() / 1000;
    unixTime = prevDayTime;
    currentDay = new Date(unixTime * 1000);

    jQuery.ajax({
        url: proxy + link + ',' + unixTime,
        success: function(data) {
            console.log(data);
            jQuery('#date').text(currentDay.toLocaleDateString())
            jQuery('#summary').text(data.currently.summary)
            jQuery('#temperature').text('Max temperature: ' + Math.round((data.currently.temperature - 32) * 5 / 9) + '°C')
            jQuery('#wind').text('Wind speed: ' + data.currently.windSpeed + ' kph');
            jQuery('#pressure').text('Pressure: ' + data.currently.pressure + ' hPa')
            weatherBackground()
        }
    })

}

function getNextWeather() { //get weather information for the naext day, but not for tomorrow
    var proxy = 'https://cors-anywhere.herokuapp.com/';
    var link = "https://api.darksky.net/forecast/d407554e29ad2fe7013dc4a60a1d1682/49.8454,24.0054";

    var nextDay = new Date(currentDay.getFullYear(), currentDay.getMonth(), currentDay.getDate() + 1);
    var nextDayTime = nextDay.getTime() / 1000;
    unixTime = nextDayTime;
    currentDay = new Date(unixTime * 1000);

    if (nextDay.getDate() > new Date().getDate()) { //fail reqest if asking for date that not happened yet
        unixTime = null;
        currentDay = new Date()
    }

    jQuery.ajax({
        url: proxy + link + ',' + unixTime,
        success: function(data) {
            console.log(data);
            jQuery('#date').text(currentDay.toLocaleDateString())
            jQuery('#summary').text(data.currently.summary)
            jQuery('#temperature').text('Max temperature: ' + Math.round((data.currently.temperature - 32) * 5 / 9) + '°C')
            jQuery('#wind').text('Wind speed: ' + data.currently.windSpeed + ' kph');
            jQuery('#pressure').text('Pressure: ' + data.currently.pressure + ' hPa')
            weatherBackground()
        }
    })
}

function weatherBackground() {  //change images due to the weather summary
    if (jQuery('#summary').text() === "Mostly Cloudy") {
        jQuery('body').css("background-image", "url('clouds.jpg')");
    } else if (jQuery('#summary').text() === "Clear") {
        jQuery('body').css("background-image", "url('clear.jpg')");
    } else if (jQuery('#summary').text() === "Partly Cloudy") {
        jQuery('body').css("background-image", "url('partly.jpg')");
    } else if (jQuery('#summary').text() === "Rain") {
        jQuery('body').css("background-image", "url('rain.jpg')");
    } else if (jQuery('#summary').text() === "Light Rain") {
        jQuery('body').css("background-image", "url('light.jpg')");
    } else {
        jQuery('body').css("background-image", "url('lviv.jpg')");
    }
}
