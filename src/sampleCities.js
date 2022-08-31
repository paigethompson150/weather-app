
import loadJson from './loadJson.js';
import populateData from './populateData.js';
import updateSearch from './index.js';
import {search} from './index.js';
import {unit} from './index.js';

export default function findElements() {
  let ny = document.getElementById('ny');
  let lon = document.getElementById('lon');
  let mum = document.getElementById('mum');
  let berl = document.getElementById('berl');

  //adding event listeners
  ny.addEventListener('click', function(){
    pushSearch('New York', unit);
  });

  lon.addEventListener('click', function(){
    pushSearch('London', unit);
  });

  mum.addEventListener('click', function(){
    pushSearch('Mumbai', unit)
  });

  berl.addEventListener('click', function(){
    pushSearch('Berlin', unit)
  });
}

//make new search
const pushSearch = (newSearch, unit) => {
  try{
    loadJson(newSearch, unit).then(function(response) {
    populateData(response);
    search = newSearch;
    });
  }
  catch{
    console.log('failed');
  }
};