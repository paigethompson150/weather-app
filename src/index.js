import loadJson from './loadJson.js';
import populateData from './populateData.js';

let search = 'Boston';
let unit = 'imperial';


//retrieve array of data from weather API
let weather = loadJson(search, unit).then(function(response) {
  console.log(response);
}, function(error) {
  console.log('failed', error);
});

populateData(weather);

