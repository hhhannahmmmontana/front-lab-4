
function SunTimesBlock() {
    return (
        <div className="sun-times-block">
            <div className="sun-time sunrise">
                <img className="icon" />
                <div className="text-block">
                    <h3 className="name" alt="sunrise">Sunrise</h3>
                    <p className="time">06:37 AM</p>
                </div>
            </div>
            <div className="sun-time sunset">
                <img className="icon" alt="sunset" />
                <div className="text-block">
                    <h3 className="name">Sunset</h3>
                    <p className="time">08:37 PM</p>
                </div>
            </div>
        </div>
    );
}

export default SunTimesBlock;