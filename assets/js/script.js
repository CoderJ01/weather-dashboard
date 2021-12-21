async function infoChicago () {
    var chicagoWeather = 'https://api.openweathermap.org/data/2.5/onecall?lat=33.44&&units=imperial&lon=-94.04&exclude=hourly&appid=3f2e409528a52056b62087fa623591ee';

    var response = await fetch(chicagoWeather);
    var data = await response.json();
    console.log(data);
}

infoChicago();

