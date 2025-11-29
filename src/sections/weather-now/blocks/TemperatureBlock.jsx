
function TemperatureBlock() {
    return (
        <div className="temperature-block mb-[41px]">
            <h2 className="temperature-now text-[80px] font-bold bg-gradient-to-r from-[var(--color-text)] to-transparent bg-clip-text text-transparent w-fit leading-none">24°C</h2>
            <div className="temperature-feels pl-[3px] flex items-center leading-none">
                <span className="text text-[20px] mr-[10px] font-semibold text-[var(--color-text)/0.8]">Feels like:</span>
                <span className="value text-[32px] font-semibold text-[var(--color-text)/0.8]">22<span className="font-bold">°C</span></span>
            </div>
        </div>
    )
}

export default TemperatureBlock;