import SunTimesBlock from "./blocks/SunTimesBlock";
import TemperatureBlock from "./blocks/TemperatureBlock";
import WeatherBigBlock from "./blocks/WeatherBigBlock";
import WeatherSpecInfoBlock from "./blocks/WeatherSpecInfoBlock";

function WeatherNow() {
    return (
        <section className="weather-now">
            <div className="first-block">
                <TemperatureBlock />
                <SunTimesBlock />
            </div>
            <WeatherBigBlock />
            <WeatherSpecInfoBlock />
        </section>
    );
}

export default WeatherNow;