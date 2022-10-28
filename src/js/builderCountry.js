export function buildListCountry(country) { 
   let templatesCountry = "";
      for (let key of country) {
         templatesCountry += `<li class="styleForCoutryList"><img src="${key.flags.svg}" width
="36px" height="30px">${key.name.official}</li>`
      }
      return templatesCountry
}

export function buildCountryTempl(country) {
   let templatesCountry = "";
      templatesCountry = `<li class="styleForCoutryList"><img src="${country[0].flags.svg}" width
="36px" height="30px">${country[0].name.official}</li>
<p>Capital: ${country[0].capital}</p>
<p>Population: ${country[0].population}</p>
<p>Languages: ${Object.values(country[0].languages).join(', ')}</p>`
   return templatesCountry
}