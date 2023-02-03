// console.log('js');
const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
}
loadCountries();

const displayCountries = (countries) => {
    // console.log(countries);
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('country');
        // one way
        // const h3 = document.createElement('h3');
        // h3.innerText = country.name;
        // const p = document.createElement('p');
        // p.innerText = `Capital: ${country.capital}`;
        // div.appendChild(h3);
        // div.appendChild(p);
        // other way
        div.innerHTML = `
            <h3>${country.name}</h3>
            <p>${country.capital}</p>
            <button onclick="loadCountryByName('${country.name}')">Details</button>
        `;
        countriesDiv.appendChild(div);
    });
}

const loadCountryByName = (name) => {
    const url = `https://restcountries.com/v2/name/${name}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountriesDetail(data[0]));
    
}

const displayCountriesDetail = country => {
    const countryDiv = document.getElementById('country-details');
    countryDiv.innerHTML = `
        <h3>${country.name}</h3>
        <p>Capital: ${country.capital}</p>
        <p>Population: ${country.population}</p>
        <img width="200px" src="${country.flag}">
    `;
}