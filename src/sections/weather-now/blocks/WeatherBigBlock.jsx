import sun from "/src/img/icons/sun.png";

function WeatherBigBlock() {
    return (
        <div className="weater-big-block flex flex-col items-center">
            <img className="icon w-[178px] h-[178px]" alt="sun" src={sun} />
            <h2 className="text font-semibold text-[32px]">Sunny</h2>
        </div>
    );
}

export default WeatherBigBlock;