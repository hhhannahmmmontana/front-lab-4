import windArrow from "/src/img/icons/wind-arrow.png";

function windClassFromAlt(windAlt) {
    switch (windAlt) {
        case "North": return "wind-north";
        case "North West": return "wind-north-west";
        case "North East": return "wind-north-east";
        default: return "";
    }
}

const ForecastDayCard = ({translation, temperatureSymbol, speedSymbol, data}) => {
    return (
        <div className="forecast-day-card block flex flex-col items-center py-[13px]">
            <h2 className="title text-[32px] font-bold">{translation.hourlyForecast}</h2>
            <div className="flex w-fit gap-[15px] h-full">
                {data.map((it, index) => {
                    return (
                        <div className={"forecast-day-card bg-[var(--color-bg-200)] h-full rounded-[40px] flex flex-col justify-between w-[130px] items-center py-[15px] " + it.timeOfDay} key={index}>
                            <p className="time text-[24px] font-bold">{it.time}</p>
                            <img className="weather-icon icon w-[80px] h-[80px]" src={it.img} alt={it.weatherAlt} />
                            <p className="temperature text-[20px] font-bold">{it.temperature}{temperatureSymbol}</p>
                            <div className="wind-arrow-scontainer w-fit flex justify-center items-center">
                                <img className={"wind-icon icon " + windClassFromAlt(it.windAlt)} src={windArrow} alt={it.windAlt} />
                            </div>
                            <p className="wind-speed text-[20px] font-bold">{it.windSpeed}{speedSymbol}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default ForecastDayCard;