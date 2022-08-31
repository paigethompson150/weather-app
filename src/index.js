import loadJson from './loadJson.js';
import populateData from './populateData.js';

//set default city and unit
let search = 'London';
let unit = 'imperial';


//retrieve array of data from weather API
let pushSearch = (search, unit) => {
  try{
    loadJson(search, unit).then(function(response) {
    populateData(response);
    });
  }
  catch{
    console.log('failed');
  }
};

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



