
function TemperatureBlock() {
    return (
        <div className="temperature-block">
            <h2 className="temperature-now">24°C</h2>
            <div className="temperature-feels">
                <span className="text">Feels like:</span>
                <span className="value">22°C</span>
            </div>
        </div>
    )
}

export default TemperatureBlock;