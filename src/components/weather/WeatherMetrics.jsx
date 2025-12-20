import humidty from "/src/img/icons/humidity.png"
import wind from "/src/img/icons/wind.png"
import pressure from "/src/img/icons/pressure.png"
import uv from "/src/img/icons/uv.png"
import { useUnits } from "../../hooks/useUnits";

const WeatherMetrics = ({translation}) => {
    const { speedSymbol } = useUnits();

    return (
        <div className="weather-metrics">
            <div className="weather-metric humidity">
                <img className="icon icon-filled" src={humidty} alt={translation.humidity} />
                <h3 className="value">41%</h3>
                <p className="name">{translation.humidity}</p>
            </div>
            <div className="weather-metric wind-speed">
                <img className="icon icon-filled" src={wind} alt={translation.windSpeed} />
                <h3 className="value">2{speedSymbol(translation.language)}</h3>
                <p className="name">{translation.windSpeed}</p>
            </div>
            <div className="weather-metric pressure">
                <img className="icon icon-filled" src={pressure} alt={translation.pressure} />
                <h3 className="value">997hPa</h3>
                <p className="name">{translation.pressure}</p>
            </div>
            <div className="weather-metric uv">
                <img className="icon icon-filled" src={uv} alt={translation.uv} />
                <h3 className="value">8</h3>
                <p className="name">{translation.uv}</p>
            </div>
        </div>
    );
}

export default WeatherMetrics;