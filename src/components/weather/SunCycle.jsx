import sunrise from "/src/img/icons/sunrise.png";
import sunset from "/src/img/icons/sunset.png";

function SunCycle() {
    return (
        <div className="sun-cycle grid grid-cols-1 gap-y-[13px] w-full">
            <div className="sun-time sunrise">
                <img className="icon icon-filled" alt="Sunrise" src={sunrise} />
                <div className="text-block">
                    <h3 className="name">Sunrise</h3>
                    <p className="time">06:37 AM</p>
                </div>
            </div>
            <div className="sun-time sunset">
                <img className="icon icon-filled" alt="Sunset" src={sunset} />
                <div className="text-block">
                    <h3 className="name">Sunset</h3>
                    <p className="time">08:37 PM</p>
                </div>
            </div>
        </div>
    );
}

export default SunCycle;