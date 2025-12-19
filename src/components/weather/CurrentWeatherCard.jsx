import SunCycle from "./SunCycle";
import WeatherMetrics from "./WeatherMetrics";
import sun from '/src/img/icons/sun.png';

function CurrentWeatherCard() {
    return (
        <section className="current-weather-card block w-full flex justify-between items-center px-[26px] py-[40px]">
            <div className="first-block flex flex-col items-center">
                <div className="temperature-block mb-[41px]">
                    <h2 className="temperature-now text-[80px] font-bold bg-gradient-to-r from-[var(--color-text)] to-transparent bg-clip-text text-transparent w-fit leading-none">24°C</h2>
                    <div className="temperature-feels pl-[3px] flex items-center leading-none">
                        <span className="text text-[20px] mr-[10px] font-semibold text-[var(--color-text)/0.8]">Feels like:</span>
                        <span className="value text-[32px] font-semibold text-[var(--color-text)/0.8]">22<span className="font-bold">°C</span></span>
                    </div>
                </div>
                <SunCycle />
            </div>
            <div className="weater-big-block flex flex-col items-center justify-between h-[260px]">
                <img className="icon w-[178px] h-[178px]" alt="sun" src={sun} />
                <h2 className="text font-semibold text-[32px]">Sunny</h2>
            </div>
            <WeatherMetrics />
        </section>
    );
}

export default CurrentWeatherCard;