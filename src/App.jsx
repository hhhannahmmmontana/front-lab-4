import DaysForecast from "./sections/daily-forecast/DailyForecast";
import AppHeader from "./sections/header/AppHeader";
import HourlyForecast from "./sections/hourly-forecast/HourlyForecast";
import MainInfo from "./sections/main-info/MainInfo";
import WeatherNow from "./sections/weather-now/WeatherNow";

function App() {
    return (
        <div className="application bg-gradient-to-br from-bg-50 to-bg-100 flex justify-center flex-col items-center w-full p-[63px]">
            <AppHeader />
            <content className="sized grid grid-cols-[auto_1fr] gap-[55px] gap-y-[51px]">
                <MainInfo />
                <WeatherNow />
                <DaysForecast />
                <HourlyForecast />
            </content>
        </div>
    );
}

export default App;
