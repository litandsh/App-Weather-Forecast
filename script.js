const param = {
    "url": "https://api.openweathermap.org/data/2.5/",
    "appid" : "a495189585a821e018d7f6f2e9e3ab77"
}

function getWeather() {
    const cityId = document.querySelector('#city').value;
    fetch(`${param.url}weather?id=${cityId}&appid=${param.appid}`)
        .then(weather => weather.json())
        .then(showWeather)
    
    //London, Uk
    if (cityId == 2643743) {
        document.querySelector('.app-back').classList.remove('app-back_LA', 'app-back_Shp', 'app-back_SPdP')
        document.querySelector('.app-back').className += " app-back_London";
    }

    //Los Angeles, US
    if (cityId == 5368361) {
        document.querySelector('.app-back').classList.remove('app-back_London', 'app-back_Shp', 'app-back_SPdP')
        document.querySelector('.app-back').className += " app-back_LA";
    }

    //Shepetivka, UA (UA - brave country)
    if (cityId == 694216) {
        document.querySelector('.app-back').classList.remove('app-back_London', 'app-back_LA', 'app-back_SPdP')
        document.querySelector('.app-back').className += " app-back_Shp";
    }

    if (cityId == 6359540) {
        document.querySelector('.app-back').classList.remove('app-back_London', 'app-back_LA', 'app-back_Shp')
        document.querySelector('.app-back').className += " app-back_SPdP";
    }
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