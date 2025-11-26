import search from "/src/img/icons/search.png";

function AppHeader() {
    return (
        <header className="flex justify-between sized">
            <div className="flex flex-col items-center">
                <div className="theme-toggler dark"></div>
                <span className="theme-title font-bold">Dark Mode</span>
            </div>
            <div className="search flex justify-between items-center pl-[33px] pr-[40px] rounded-[40px] max-w-[803px] w-full max-h-[62px]">
                <img className="search-icon w-[40px] h-[46px] mr-[30px]" src={search} alt="Search"/>
                <input id="searchInput" className="bg-transparent w-full border-none outline-none placeholder-placeholder-color" type="text" placeholder="Search for your preffered city..." />
            </div>
            <button className="current-location-button">
                <i className="current-location-icon"></i>
                <span className="current-location-title">Current Location</span>
            </button>
        </header>
    );
}

export default AppHeader;