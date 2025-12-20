
function SearchSuggestions({ suggestions, isLoading, onSelect, translation }) {
    const items = [
        "что делать?",
        "где искать?",
        "как найти?",
        "че за реакт ваще?"
    ];

    return (
        <div className="absolute top-0 w-full bg-white rounded-[40px] z-10 pt-[70px] pb-[10px] overflow-hidden h-fit">
            {!suggestions && (
                <div className="pl-[80px] py-2 text-gray-400">
                    { translation.waitingForInput }
                </div>
            )}

            {!isLoading && suggestions && suggestions.length === 0 && (
                <div className="pl-[80px] py-2 text-gray-400">
                    { translation.nothingFound }
                </div>
            )}

            {suggestions && isLoading && (
                <div className="pl-[80px] py-2 text-gray-400">
                    { translation.searching }
                </div>
            )}

            {!isLoading && suggestions && suggestions.length > 0 && (
                <ul>
                    {suggestions.map((city, index) => (
                        <li 
                            key={`${city.lat}-${city.lon}-${index}`} 
                            onClick={() => onSelect(city)}
                            className="pl-[80px] pr-[40px] py-2 hover:bg-gray-100 cursor-pointer text-black text-lg transition-colors flex justify-between items-center"
                        >
                            <span className="flex items-center gap-2">
                                {city.local_names?.[translation.localNameKey] || city.name}
                            </span>
                            <span>
                                {city.state && (
                                    <span className="text-gray-400 text-sm me-2">{city.state}</span>
                                )}
                                <span className="font-bold text-gray-500 text-sm bg-gray-200 px-[10px] rounded">
                                    {city.country}
                                </span>
                            </span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default SearchSuggestions;