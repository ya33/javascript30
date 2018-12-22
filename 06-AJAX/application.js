const url = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];
const promise = fetch(url)
                  .then(response => response.json())
                  .then(data => cities.push(...data));

const searchInput = document.querySelector('.search-form input');
const suggestionsList = document.querySelector('.suggestions');

const filterCities = (word) => {
  const search = new RegExp(word, 'gi');
  return cities.filter(place => place.city.match(search) || place.state.match(search));
};

const displayCities = () => {
  const suggestions = filterCities(searchInput.value);
  const list = suggestions.map((place) => {
    const search = new RegExp(searchInput.value, 'gi');
    const cityName = place.city.replace(search, `<span class='h7'>${searchInput.value}</span>`);
    const stateName = place.state.replace(search, `<span class='h7'>${searchInput.value}</span>`);
    return `<li>
              <span class='name'>${cityName}, ${stateName}</span>
              <span class='population'>${place.population} inhab.</span>
            </li>`;
  }).join('');
  suggestionsList.innerHTML = list;
};

searchInput.addEventListener('keyup',displayCities)
searchInput.addEventListener('change',displayCities)
