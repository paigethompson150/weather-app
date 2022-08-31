//target DOM elements and populate weather data into DOM
function populateData(data){
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


  console.log(data);

  //appending items to DOM
  temp.innerHTML = data.temp;
  city.innerHTML = data.name;
  country.innerHTML = data.country;
  description.innerHTML = data.description;
  feelsLike.innerHTML = data.feelsLike;
  maxTemp.innerHTML = data.tempMax; 
  minTemp.innerHTML = data.tempMin; 
  humidity.innerHTML = data.humidity; 
  wind.innerHTML = data.wind;

}




export default populateData;