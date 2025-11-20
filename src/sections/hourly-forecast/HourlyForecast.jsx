
function HourlyForecast() {
    const forecastData = [
        { time: "12:00", weatherAlt: "Sunny", temperature: "26°C", windAlt: "North", windSpeed: "3km/h" },
        { time: "15:00", weatherAlt: "Sunny", temperature: "27°C", windAlt: "North West", windSpeed: "3km/h" },
        { time: "18:00", weatherAlt: "Cloudy", temperature: "27°C", windAlt: "North", windSpeed: "3km/h" },
        { time: "21:00", weatherAlt: "Cloudy", temperature: "25°C", windAlt: "North East", windSpeed: "3km/h" },
        { time: "00:00", weatherAlt: "Sunny", temperature: "22°C", windAlt: "North", windSpeed: "3km/h" },
    ]

    return (
        <div className="hourly-forecast">
            {forecastData.map((it, index) => {
                return (
                    <div className="item" key={index}>
                        <p className="time">{it.time}</p>
                        <img className="weather-icon" alt={it.weatherAlt} />
                        <p className="temperature">{it.temperature}</p>
                        <img className="wind-icon" alt={it.windAlt} />
                        <p className="wind-speed">{it.windSpeed}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default HourlyForecast;