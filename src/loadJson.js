async function loadJson(search, unit) {
  const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q='+`${search}`+'&units='+`${unit}`+'&APPID=b0861edf97f03a6a99ea8bc6531f4315', {mode: 'cors'})
  try{
    const weatherData = await response.json();
    console.log(weatherData);
  }
  catch{
    console.log('could not find that location');
  }
  
}


export default loadJson;