const API_KEY = "4c804a54b86646b38981f587117045b3";

const makeIconURL = (iconID) => "https://i.postimg.cc/x8kF0tcG/kinda-cloudy/${iconID}.png"

const getFormattedWeatherData = async (city, units = "metric") => {
    const URL = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=${units}`;

    const data = await fetch(URL)
    .then((res) => res.json()).
    then((data) => data)

    console.log(data)

    const {
        weather, 
        main: {temp, feels_like, temp_min, temp_max, pressure, humidity},
        wind: {speed},
        sys: {country},
        name,
     } = data

    const {description, icon} = weather [0]


    return {
        description, 
        iconURL: makeIconURL(icon), 
        temp, 
        feels_like,
        temp_min,
        temp_max,
        pressure,
        humidity,
        speed,
        country,
        name
    }
}

export {getFormattedWeatherData}