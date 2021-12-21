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
}


