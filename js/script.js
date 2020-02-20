$("header").css({
    fontSize: 30
});

$("#forecast").css({
    fontSize:20
});

var todayPlusOne = moment().add(1, "days");

var cityName = "Philadelphia";
var forecastURL = "https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + forecastAPIKEY;
var queryURL = "https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=" +cityName+ "&appid="+ apiKEY;
var apiKEY = "f4591ef79b3933364d561e75edeb28da"
var forecastAPIKEY ="7d11de971aee0dcc11aad0586e901657"


$.ajax({
url: queryURL,
method: "GET"
})

.then(function(response) {
    console.log("MY api query", response);
    $("#cityName").text(response.name + " " +moment().format("MMM Do, YYYY"));
    $("#windSpeed").text("Wind Speed: " + response.wind.speed + "MPH");
    $("#humidity").text("Humidity: " + response.main.humidity + "%");
    var tempF = (response.main.temp - 273.15) * 1.80 + 32;
    $("#temp").text("Temperature" + " " + "°F");

});

$.ajax({
url: forecastURL,
method: "GET"
})
    
.then(function(response) {
console.log("forecast query",response)
});

