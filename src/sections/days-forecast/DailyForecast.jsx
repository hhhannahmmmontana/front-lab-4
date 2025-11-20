
function DaysForecast() {
    const forecastData = [
        { alt: "Cloudy", temp: "20°C", date: "Friday, 1 Sep" },
        { alt: "Cloudy", temp: "22°C", date: "Saturday, 2 Sep" },
        { alt: "Sunny", temp: "27°C", date: "Sunday, 3 Sep" },
        { alt: "Rainy", temp: "18°C", date: "Monday, 4 Sep" },
        { alt: "Rainy", temp: "16°C", date: "Tuesday, 5 Sep" },
    ];

    return (
        <div className="days-forecast">
            <h2 className="title">5 Days Forecast:</h2>
            {forecastData.map((it, index) => {
                return (
                    <div className="item" key={index}>
                        <img className="icon" alt={it.alt} />
                        <span className="temperature">{it.temp}</span>
                        <span className="date">{it.date}</span>
                    </div>
                );
            })}
        </div>
    );
}

export default DaysForecast;