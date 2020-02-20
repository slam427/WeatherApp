$("header").css({
    fontSize: 30
});

$("#forecast").css({
    fontSize:20
});


// var forecastAPIKEY ="f4591ef79b3933364d561e75edeb28da"
var todayPlusOne = moment().add(1, "days");
var cityName = "Miami";
var apiKEY = "f4591ef79b3933364d561e75edeb28da"
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" +cityName+ "&appid="+ apiKEY;
var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + apiKEY;


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




// after I was able to pull data from the main section

$.ajax({
url: forecastURL,
method: "GET"
})
.then(function(response) {
console.log("forecast query",response)
});

