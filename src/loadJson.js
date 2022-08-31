
async function loadJson(search, unit) {
  const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q='+`${search}`+'&units='+`${unit}`+'&APPID=b0861edf97f03a6a99ea8bc6531f4315', {mode: 'cors'})
  try{
    const weatherJson = await response.json();

    const weatherData = 
      {
        name: weatherJson.name,
        temp: weatherJson.main.temp,
        humidity: weatherJson.main.humidity,
        wind: weatherJson.wind.speed,
        feelsLike: weatherJson.main.feels_like,
        tempMin: weatherJson.main.temp_min,
        tempMax: weatherJson.main.temp_max,
        description: weatherJson.weather[0].description,
        country: weatherJson.sys.country,
      }

    return weatherData;
  }
  catch {
    console.log('could not find that location');
  }
  
}

export default loadJson;