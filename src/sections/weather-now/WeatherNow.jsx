import SunTimesBlock from "./blocks/SunTimesBlock";
import TemperatureBlock from "./blocks/TemperatureBlock";
import WeatherBigBlock from "./blocks/WeatherBigBlock";
import WeatherSpecInfoBlock from "./blocks/WeatherSpecInfoBlock";

function WeatherNow() {
    return (
        <section className="weather-now block w-full flex justify-between items-center px-[26px] py-[40px]">
            <div className="first-block flex flex-col items-center">
                <TemperatureBlock />
                <SunTimesBlock />
            </div>
            <WeatherBigBlock />
            <WeatherSpecInfoBlock />
        </section>
    );
}

export default WeatherNow;