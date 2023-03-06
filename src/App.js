import Descriptions from "./components/Descriptions";
import { useEffect } from "react";
import "./index.css"
import { getFormattedWeatherData } from "./weatherService";

function App() {

  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData("Cape Town")
      setWeather = (data)
    }

    fetchWeatherData()
  }, [])





  return (
    <div className="App" style={{ backgroundImage:`url(https://i.postimg.cc/Y9vvnt4w/rainy-skies.jpg)` }}>
      <div className="overlay">
        {
          weather && (
            <div className="container">
          <div className="section section__Inputs">
            <input type="text" name="city" placeholder="Enter City..."/>
            <button>*f</button>
          </div>

          <div className="section section__temperature">
            <div className="icon">
              <h3> { `${weather.name},${weather.country}` } </h3>
              <img src={weather.iconURL} alt="weather icon" style={{ width:"200px", height:"200px" }} />
              <h3>{weather.desccription}</h3>
            </div>
            <div className="temperature">
              <h2>34 *C</h2>
            </div>
          </div>

          {/* bottom description */}
          <Descriptions />
        </div>

          )
        }
            </div>
    </div>
  );
}



export default App;
