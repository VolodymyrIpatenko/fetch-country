import '../css/styles.css';
import { fetchCountries } from "./fetchCountries";
import { buildListCountry } from "./builderCountry";
import { buildCountryTempl } from "./builderCountry";
import debounce from "lodash.debounce";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const DEBOUNCE_DELAY = 300;

const refs = {
   inputValue: document.querySelector('#search-box'),
   countryList: document.querySelector('.country-list'),
   countryInfo: document.querySelector('.country-info')
}

refs.inputValue.addEventListener('input', debounce(event => {
   const country = refs.inputValue.value.trim()
   if (country === '') {
      refs.countryList.innerHTML = ""
      return;
   }

   fetchCountries(country).then(country => {
      if(country.length > 1 && country.length <= 10){
         refs.countryList.innerHTML = buildListCountry(country)
      } else if (country.length == 1) {
         refs.countryList.innerHTML = buildCountryTempl(country)
      } else if (country.length > 10) {
         Notify.info("Too many matches found. Please enter a more specific name.")
         refs.countryList.innerHTML = ""
         return
      }

   }).catch(error => {
      Notify.failure("Oops, there is no country with that name")
      refs.countryList.innerHTML = ""
      return
   })
},DEBOUNCE_DELAY))