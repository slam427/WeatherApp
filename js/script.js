$("header").css({
    fontSize: 30
});

$("#forecast").css({
    fontSize:20
});


var todayPlusOne = moment().add(1, "days");
var cityName = "Philadelphia";
var apiKEY = "f4591ef79b3933364d561e75edeb28da"
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" +cityName+ "&appid="+ apiKEY;
var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + apiKEY;
var tempArray = [];
var humidityArray = [];


$.ajax({
    url: queryURL,
    method: "GET"
})

.then(function(response) {
    console.log("MY api query", response);
    $("#cityName").text(response.name + " " +moment().format("MMM Do, YYYY"));
    $("#windSpeed").text("Wind Speed: " + response.wind.speed + "MPH");
    $("#humidity").text("Humidity: " + response.main.humidity + "%");
    let tempF = (response.main.temp - 273.15) * 1.80 + 32;
    
    $("#temp").text("Temperature" + tempF + "°F");
});




$.ajax({
    url: forecastURL,
    method: "GET"
})
.then(function(response) {
    // for(var i=4; i<36; i+8) {
humidityArray.push(response.list[4].main.humidity);
humidityArray.push(response.list[12].main.humidity);
humidityArray.push(response.list[20].main.humidity);
humidityArray.push(response.list[28].main.humidity);
humidityArray.push(response.list[36].main.humidity);

let tempF1 = (response.list[4].main.temp - 273.15) * 1.80 + 32;
let tempF2 = (response.list[12].main.temp - 273.15) * 1.80 + 32;
let tempF3 = (response.list[20].main.temp - 273.15) * 1.80 + 32;
let tempF4 = (response.list[28].main.temp - 273.15) * 1.80 + 32;
let tempF5 = (response.list[28].main.temp - 273.15) * 1.80 + 32;

tempArray.push(tempF1);
tempArray.push(tempF2);
tempArray.push(tempF3);
tempArray.push(tempF4);
tempArray.push(tempF5);
// }

$("#fiveDayTemp1").text("Temp:" + " " + Math.floor(tempArray[0]) + "°F");
$("#fiveDayTemp2").text("Temp:" + " " + Math.floor(tempArray[1]) + "°F");
$("#fiveDayTemp3").text("Temp:" + " " + Math.floor(tempArray[2]) + "°F");
$("#fiveDayTemp4").text("Temp:" + " " + Math.floor(tempArray[3]) + "°F");
$("#fiveDayTemp5").text("Temp:" + " " + Math.floor(tempArray[4]) + "°F");

$("#fiveDayHumidity1").text("Humidity" + " " +humidityArray[0] + "%");
$("#fiveDayHumidity2").text("Humidity" + " " +humidityArray[1] + "%");
$("#fiveDayHumidity3").text("Humidity" + " " +humidityArray[2] + "%");
$("#fiveDayHumidity4").text("Humidity" + " " +humidityArray[3] + "%");
$("#fiveDayHumidity5").text("Humidity" + " " +humidityArray[4] + "%");
console.log("forecast query",response)
});

