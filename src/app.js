// API Key 0959b7dd2ee575dc2ebb67ad205095e4

function displayTemperature(response) {
  console.log(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#weather-description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind-speed");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "0959b7dd2ee575dc2ebb67ad205095e4";
let units = "imperial";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Dallas&appid=${apiKey}&units=${units}`;

axios.get(apiUrl).then(displayTemperature);
