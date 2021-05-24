// assign global variables ////////////////////////////////////
// apiKey

///////hTML IDS start here
// city
// temperature
// wind
// humidity
// uv index - set class
//five day container
//cities history
let cities




function getSevenDay(lat, lon) {
  
}


// functions //////////////////only two in whole thing/////////
    // init
function init() {
    // check local storage for the key (cities) if present
    let citiesStorage = localStorage.getItem("cities");
    if (citiesStorage) {
    // loop through local storage and create buttons with the button label as the city
    cities = JSON.parse(citiesStorage);
    console.log(cities);
    cities.forEach((city) => {
      // make and append a button to the left panel
    });
  }
  console.log("no data");
}



// getWeather (this is that first box)
    // parm: value of search box (city name)
    // call the weather API with the city name to get the coordinates (lat, lon)
    // in the then function of the call above, use the lat and lon
    // in the then function of the call above, i find the data i need for the top card on the right (city, date temp, wind, humidity, et al)
    //RENDER FUNCTION if uv index greater than xx, set the class to somethign with colors
    //RENDER FUNCTION for the 5 day forecast I want to loop through array of daily data and
    //each card will have date, icon for conditon, temp wind, humidity
    //save to local storage the city the user just searched, 
    //check locaslstorage for that city, don't add if already there 

// sr devs would use get coordinates as function too
//From TA Sesh ///////////////////////////////////////////////////////////
function getWeather(city) {
  var getWeatherUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=0a32d54954103d47b3868eb1392ed325";
  console.log(getWeatherUrl)
  fetch(getWeatherUrl)
    .then((response) => response.json())
    .then(function (getWeatherObj) {
      console.log(getWeatherObj)
      //lat
      let lat= getWeatherObj.coord.lat
      //lon
      let lon = getWeatherObj.coord.lon;
      //icon
      let iconurl =
        "http://openweathermap.org/img/w/" + getWeatherObj.weather[0].icon + ".png";
      
      var uvURL =
        "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=0a32d54954103d47b3868eb1392ed325";
      console.log(uvURL)
//////////////////////////////////////////
      
      function getSevenDay(lat, lon) {
  


}

      fetch(uvURL)
        .then((response2) => 
          response2.json()
        )
        .then(function (uvObj) {
          //uvdata
          console.log(uvObj.current.uvi)
         
      })
       
    })
}



// events ///////////////////////////////////////////////////////
    // init - check local storage
//init();
    // search button - calls the API and gets the info
    //click on past city button - just call the getWeather function siwht the label of
    
getWeather("Reno");

// event listeners //////////////////////////////////////////////////////
//button.addEventListener('click', getWeather);
//textInput.addEventListener('keypress', function (events) {
//   if (event.key === 'Enter') {
//     getWeather();
//   }
// })

init();