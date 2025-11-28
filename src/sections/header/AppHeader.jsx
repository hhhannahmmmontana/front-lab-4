import search from "/src/img/icons/search.png";
import currentLocation from "/src/img/icons/current-location.png";

function AppHeader() {
    return (
        <header className="flex justify-between sized mb-[47px]">
            <div className="flex flex-col items-center min-w-fit">
                <div className="theme-toggler dark"></div>
                <span className="theme-title font-extrabold text-[18px]">Dark Mode</span>
            </div>
            <div className="search flex justify-between items-center pl-[33px] pr-[40px] rounded-[40px] max-w-[803px] w-full max-h-[62px]">
                <img className="search-icon w-[40px] h-[46px] mr-[30px]" src={search} alt="Search"/>
                <input id="searchInput" className="bg-transparent w-full border-none outline-none placeholder-placeholder-color" type="text" placeholder="Search for your preffered city..." />
            </div>
            <button className="current-location-button flex items-center">
                <img className="current-location-icon w-[35px] h-[35px] mr-[8px]" src={currentLocation} alt="Location"/>
                <span className="current-location-title font-extrabold text-[22px]">Current Location</span>
            </button>
        </header>
    );
}

export default AppHeader;