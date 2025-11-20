
function AppHeader() {
    return (
        <header>
            <div>
                <div className="theme-toggler"></div>
                <span className="theme-title">Dark Mode</span>
            </div>
            <div className="search">
                <i className="search-icon"></i>
                <input id="searchInput" type="text" placeholder="Search for your preffered city..." />
            </div>
            <button className="current-location-button">
                <i className="current-location-icon"></i>
                <span className="current-location-title">Current Location</span>
            </button>
        </header>
    );
}

export default AppHeader;