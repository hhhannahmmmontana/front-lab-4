
function WeatherSpecInfoBlock() {
    return (
        <div className="weather-spec-info-block">
            <div className="block humidity">
                <img className="icon" alt="Humidity" />
                <h3 className="value">41%</h3>
                <p className="name">Humidity</p>
            </div>
            <div className="block wind-speed">
                <img className="icon" alt="Wind Speed" />
                <h3 className="value">2km/h</h3>
                <p className="name">Wind Speed</p>
            </div>
            <div className="block pressure">
                <img className="icon" alt="Pressure" />
                <h3 className="value">997hPa</h3>
                <p className="name">Pressure</p>
            </div>
            <div className="block uv">
                <img className="icon" alt="UV" />
                <h3 className="value">8</h3>
                <p className="name">UV</p>
            </div>
        </div>
    );
}

export default WeatherSpecInfoBlock;