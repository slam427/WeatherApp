$("header").css({
    fontSize: 30
});

// var apiKEY = "f4591ef79b3933364d561e75edeb28da"
// var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" +userInput+ "&appid="+ apiKEY;

// $.ajax({
// url: queryURL,
// method: "GET"
// });

var apiKey = "f4591ef79b3933364d561e75edeb28da"
var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
"q=Bujumbura,Burundi&units=imperial&appid=" + apiKey;

$.ajax({
url: queryURL,
method: "GET"
});
// .then(function(response) {
console.log("MY api query",response);

// });



/* <div class="list-group">
  <a href="#" class="list-group-item list-group-item-action active">
    Cras justo odio
  </a>
  <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
  <a href="#" class="list-group-item list-group-item-action">Morbi leo risus</a>
  <a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
  <a href="#" class="list-group-item list-group-item-action disabled">Vestibulum at eros</a>
</div>


<div class="list-group">
  <button type="button" class="list-group-item list-group-item-action active">
    Cras justo odio
  </button>
  <button type="button" class="list-group-item list-group-item-action">Dapibus ac facilisis in</button>
  <button type="button" class="list-group-item list-group-item-action">Morbi leo risus</button>
  <button type="button" class="list-group-item list-group-item-action">Porta ac consectetur ac</button>
  <button type="button" class="list-group-item list-group-item-action" disabled>Vestibulum at eros</button>
</div> */