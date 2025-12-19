import CurrentWeatherCard from "../weather/CurrentWeatherCard";
import ForecastDayCard from "../weather/ForecastDayCard";
import ForecastList from "../weather/ForecastList";
import Header from "./Header";
import LocationBadge from "../weather/LocationBadge";
import LanguageToggler from "./LanguageToggler";

function AppShell() {
    return (
        <div className="application bg-gradient-to-br from-[var(--color-bg-100)] to-[var(--color-bg-300)] flex justify-center flex-col items-center w-full p-[63px] themed relative">
            <Header />
            <content className="sized grid grid-cols-[auto_1fr] gap-[55px] gap-y-[51px]">
                <LocationBadge />
                <CurrentWeatherCard />
                <ForecastList />
                <ForecastDayCard />
            </content>
            <LanguageToggler />
        </div>
    );
}

export default AppShell;