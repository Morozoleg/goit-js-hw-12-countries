import refs from './refs';
import countriesListTpl from '../templates/countries.hbs';
import countryTpl from '../templates/country.hbs';


function updateMarkup(name) {
    name.length > 1
      ? refs.content.insertAdjacentHTML('beforeend', countriesListTpl(name))
      : refs.content.insertAdjacentHTML('beforeend', countryTpl(name));
  }
  
  export default updateMarkup;
