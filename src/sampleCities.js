
import loadJson from './loadJson.js';
import populateData from './populateData.js';
import updateSearch from './index.js';

export default function findElements() {
  let ny = document.getElementById('ny');
  let lon = document.getElementById('lon');
  let mum = document.getElementById('mum');
  let berl = document.getElementById('berl');

  //adding event listeners
  ny.addEventListener('click', function(){
    pushSearch('New York', 'imperial');
  });

  lon.addEventListener('click', function(){
    pushSearch('London', 'imperial');
  });

  mum.addEventListener('click', function(){
    pushSearch('Mumbai', 'imperial')
  });

  berl.addEventListener('click', function(){
    pushSearch('Berlin', 'imperial')
  });
}

//make new search
const pushSearch = (search, unit) => {
  try{
    loadJson(search, unit).then(function(response) {
    populateData(response);
    updateSearch(search);
    });
  }
  catch{
    console.log('failed');
  }
};