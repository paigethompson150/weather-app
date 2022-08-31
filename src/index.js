import loadJson from './loadJson.js';
import populateData from './populateData.js';

let search = 'London';
let unit = 'imperial';


//retrieve array of data from weather API
loadJson(search, unit).then(function(response) {
  populateData(response);
}, function(error) {
  console.log('failed', error);
});



