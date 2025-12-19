import clear from "/src/img/icons/clear.png";
import cloudy from "/src/img/icons/cloudy.png";
import drizzly from "/src/img/icons/drizzly.png";
import misty from "/src/img/icons/misty.png";
import rainy from "/src/img/icons/rainy.png";

function ForecastList() {
    const forecastData = [
        { img: cloudy, alt: "Cloudy", temp: "20°C", date: "Friday, 1 Sep" },
        { img: misty, alt: "Misty", temp: "22°C", date: "Saturday, 2 Sep" },
        { img: clear, alt: "Clear", temp: "27°C", date: "Sunday, 3 Sep" },
        { img: drizzly, alt: "Drizzly", temp: "18°C", date: "Monday, 4 Sep" },
        { img: rainy, alt: "Rainy", temp: "16°C", date: "Tuesday, 5 Sep" },
    ];

    return (
        <div className="forecast-list block flex flex-col items-center h-fit py-[20px] pl-[30px] pr-[14px]">
            <h2 className="title font-bold text-[32px] py-[20px] px-[14px]">5 Days Forecast:</h2>
            {forecastData.map((it, index) => {
                return (
                    <div className="item flex gap-[35px] w-full items-center" key={index}>
                        <img className="icon flex-0" alt={it.alt} src={it.img} />
                        <span className="temperature flex-0 text-[24px] font-semibold">{it.temp}</span>
                        <div className="span-container flex-1 flex justify-center">
                            <span className="date text-[24px] font-semibold">{it.date}</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default ForecastList;