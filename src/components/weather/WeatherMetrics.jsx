import humidty from "/src/img/icons/humidity.png"
import wind from "/src/img/icons/wind.png"
import pressure from "/src/img/icons/pressure.png"
import uv from "/src/img/icons/uv.png"

function WeatherMetrics() {
    return (
        <div className="weather-metrics">
            <div className="weather-metric humidity">
                <img className="icon icon-filled" src={humidty} alt="Humidity" />
                <h3 className="value">41%</h3>
                <p className="name">Humidity</p>
            </div>
            <div className="weather-metric wind-speed">
                <img className="icon icon-filled" src={wind} alt="Wind Speed" />
                <h3 className="value">2km/h</h3>
                <p className="name">Wind Speed</p>
            </div>
            <div className="weather-metric pressure">
                <img className="icon icon-filled" src={pressure} alt="Pressure" />
                <h3 className="value">997hPa</h3>
                <p className="name">Pressure</p>
            </div>
            <div className="weather-metric uv">
                <img className="icon icon-filled" src={uv} alt="UV" />
                <h3 className="value">8</h3>
                <p className="name">UV</p>
            </div>
        </div>
    );
}

export default WeatherMetrics;