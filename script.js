//llamamos los elementos por medio del ID
const a = document.getElementById('title-temp');
const b = document.getElementById('description-temp');
const c = document.getElementById('ubication');
const d = document.getElementById('feels-like');
const e = document.getElementById('humidity');
const f = document.getElementById('wind-speed');
const searchBtn = document.querySelector('button');
const inputSearch = document.querySelector('input');
const imgTemp = document.querySelector('img');

//funcion para llamar datos del API

function getData(city) {
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=dd97ebc8d05a6824a7b9140f111a609b`
    
    fetch(url)  
      .then( response => { return response.json() }) //traemos los datos a javascript
      .then( data => {
          
        console.log(data)
        
        //pasamos los datos a las variables
        
        a.textContent = `${Math.round(data.main.temp)}°C`;
        b.textContent = data.weather[0].description;
        
        c.textContent = data.name;
        
        d.textContent = `Feels like: ${Math.round(data.main.feels_like)}°C`;
        
        e.textContent = `Humidity: ${data.main.humidity}%`;
        
        f.textContent = `Wind speed: ${data.wind.speed} km/h`;

        imgTemp.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

    }) 
    .catch( error => {
        alert('La localización no existe');
    })

}

getData('London');

//eventos

searchBtn.addEventListener('click', () => {
    getData(inputSearch.value)
});

inputSearch.addEventListener('keyup', (event) => {
    if(event.keyCode === 13) {
        event.preventDefault();
        searchBtn.click();
    }
});

