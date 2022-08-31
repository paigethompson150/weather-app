import {unit} from './index.js';

//target DOM elements and populate weather data into DOM
function populateData(data){
  //check for unit type
  let unitSymbol = checkUnit(unit);
  //temperature display in DOM
  let temp = document.getElementById('temp');
  //city display in DOM
  let city = document.getElementById('city');
  //country display in DOM
  let country = document.getElementById('country');
  //description display
  let description = document.getElementById('description');
  //feels like display
  let feelsLike = document.getElementById('feelsLike');
  //max temp display
  let maxTemp = document.getElementById('maxTemp');
  //min temp display
  let minTemp = document.getElementById('minTemp');
  //humidity display
  let humidity = document.getElementById('humidity');
  //wind display
  let wind = document.getElementById('wind');

  //appending items to DOM
  temp.innerHTML = data.temp + '<span>'+`${unitSymbol}`+'</span>';
  city.innerHTML = data.name;
  country.innerHTML = data.country;
  description.innerHTML = data.description;
  feelsLike.innerHTML = data.feelsLike + '<span>'+`${unitSymbol}`+'</span>';
  maxTemp.innerHTML = data.tempMax  + '<span>'+`${unitSymbol}`+'</span>'; 
  minTemp.innerHTML = data.tempMin  + '<span>'+`${unitSymbol}`+'</span>'; 
  humidity.innerHTML = data.humidity; 
  wind.innerHTML = data.wind;

}

const checkUnit = (unit) => {
  if (unit === 'imperial'){
    return '°F';
  }
  else {
    return '°C';
  }
}




export default populateData;