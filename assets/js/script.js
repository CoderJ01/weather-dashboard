function infoChicago () {
    // fetch('https://api.openweathermap.org/data/2.5/onecall?lat=33.44&&units=imperial&lon=-94.04&exclude=hourly&appid=3f2e409528a52056b62087fa623591ee')
    // .then(response => response.json())
    // .then(data => console.log(data));

    var chicagoWeather = 'https://api.openweathermap.org/data/2.5/onecall?lat=33.44&&units=imperial&lon=-94.04&exclude=hourly&appid=3f2e409528a52056b62087fa623591ee';

    fetch(chicagoWeather)
    .then(function(response) {
    // request was successful
    if (response.ok) {
        console.log(response);
        response.json().then(function(data) {
        console.log(data);
        });
    } else {
        alert("Error: " + response.statusText);
    }
    })
    .catch(function(error) {
    alert("Unable to connect to OpenWeather");
    });
}

infoChicago();


