import { useUnits } from "../../hooks/useUnits";

const ForecastList = ({translation, data}) => {
    const { temperatureSymbol } = useUnits();

    return (
        <div className="forecast-list block flex flex-col items-center h-fit py-[20px] pl-[30px] pr-[14px]">
            <h2 className="title font-bold text-[32px] py-[20px] px-[14px]">{translation.forecastList}</h2>
            {data.list.map((it, index) => {
                return (
                    <div className="item flex gap-[35px] w-full items-center" key={index}>
                        <img className="icon flex-0" alt={it.alt} src={it.img} />
                        <span className="temperature flex-0 text-[24px] font-semibold w-[55px]">{it.temp}{temperatureSymbol}</span>
                        <div className="span-container flex-1 flex justify-center">
                            <span className="date text-[24px] font-semibold">{it.date}</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default ForecastList;