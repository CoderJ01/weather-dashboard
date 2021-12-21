async function infoChicago () {
    var weather = 'https://api.openweathermap.org/data/2.5/onecall?lat=33.44&&units=imperial&lon=-94.04&exclude=hourly&appid=3f2e409528a52056b62087fa623591ee';

    var response = await fetch(weather);
    var data = await response.json();
    console.log(data);
    var temp  = data;

    document.getElementById('city').textContent = "Chicago";
    document.getElementById('c-temp').textContent = data.current.temp;
    document.getElementById('c-wind').textContent = data.current.wind_speed + " ";
    document.getElementById('c-humidity').textContent = data.current.humidity;
    document.getElementById('c-uv').textContent = data.current.uvi;

    console.log();

    document.getElementById('f-temp').textContent = data.daily[1].temp.day
    document.getElementById('f-wind').textContent = data.daily[1].wind_speed + " ";
    document.getElementById('f-humidity').textContent = data.daily[1].humidity;

    document.getElementById('s-temp').textContent = data.daily[2].temp.day
    document.getElementById('s-wind').textContent = data.daily[2].wind_speed + " ";
    document.getElementById('s-humidity').textContent = data.daily[2].humidity;

    document.getElementById('t-temp').textContent = data.daily[3].temp.day
    document.getElementById('t-wind').textContent = data.daily[3].wind_speed + " ";
    document.getElementById('t-humidity').textContent = data.daily[3].humidity;

    document.getElementById('o-temp').textContent = data.daily[4].temp.day
    document.getElementById('o-wind').textContent = data.daily[4].wind_speed + " ";
    document.getElementById('o-humidity').textContent = data.daily[4].humidity;

    document.getElementById('i-temp').textContent = data.daily[5].temp.day
    document.getElementById('i-wind').textContent = data.daily[5].wind_speed + " ";
    document.getElementById('i-humidity').textContent = data.daily[5].humidity;

}

async function infoAustin () {

}

async function infoNewYork () {
    
}

async function infoOrlando () {
    
}

async function infoSanFrancisco () {
    
}

async function infoSeattle () {
    
}

async function infoDenver () {
    
}

async function infoAtlanta () {
    
}


