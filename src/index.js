import loadJson from './loadJson.js';
import populateData from './populateData.js';
import findElements from './sampleCities.js';

//set default city and unit
let search = 'London';
let unit = 'imperial';

//retrieve array of data from weather API
const pushSearch = (search, unit) => {
  try{
    loadJson(search, unit).then(function(response) {
    populateData(response);
    });
  }
  catch{
    console.log('failed');
  }
};

//fill the page with the default city
pushSearch(search, unit);

//listen for search submit
document.getElementById('btn').addEventListener('click', function(){
  //get user search
  search = document.getElementById('search').value; 
  //set up unit here later
  if (search){
    //if search isn't empty
    pushSearch(search, unit);
  }
  else {
    console.log('no search');
  }
});

//listen for unit change 
document.getElementById('switch').addEventListener('click', function(){
  if (unit === 'imperial'){
    updateUnit('metric');
  }
  else {
    updateUnit('imperial');
  }
});

//update the global search variable 
export function updateSearch(newSearch){
  search = newSearch;
}

//update the global unit variable
function updateUnit(newUnit){
  unit = newUnit;
  pushSearch(search, unit);

  //update DOM
  document.getElementById('unit').innerHTML = `${unit}`+'°';
}

findElements();
export default pushSearch;


