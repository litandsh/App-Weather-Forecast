const param = {
    "url": "https://api.openweathermap.org/data/2.5/",
    "appid" : "a495189585a821e018d7f6f2e9e3ab77"
}

function getWeather() {
    const cityId = document.querySelector('#city').value;
    fetch(`${param.url}weather?id=${cityId}&appid=${param.appid}`)
        .then(weather => weather.json())
    .then(showWeather)
}

function showWeather(data) {
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round((data.main.temp - 273)) + '&deg';
    document.querySelector('.cloud-val').textContent = data.weather[0].main;
    document.querySelector('.wind-val').textContent = data.wind.speed;
    document.querySelector('.pres-val').textContent = data.main.pressure;
    document.querySelector('.hum-val').textContent = data.main.humidity;
}

getWeather();
document.querySelector('#city').onchange = getWeather;