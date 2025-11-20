import DaysForecast from "./sections/daily-forecast/DailyForecast";
import AppHeader from "./sections/header/AppHeader";
import HourlyForecast from "./sections/hourly-forecast/HourlyForecast";
import MainInfo from "./sections/main-info/MainInfo";
import WeatherNow from "./sections/weather-now/WeatherNow";

function App() {
    return (
        <div className="application">
            <AppHeader />
            <content>
                <MainInfo />
                <WeatherNow />
                <DaysForecast />
                <HourlyForecast />
            </content>
        </div>
    );
}

export default App;
