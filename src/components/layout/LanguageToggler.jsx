import enIcon from "/src/img/icons/us.png";
import ruIcon from "/src/img/icons/ru.png";

const LanguageToggler = ({ language, setLanguage }) => {
    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'ru' : 'en');
    };

    return (
        <button 
            onClick={toggleLanguage}
            className="absolute right-[40px] bottom-[30px]"
            title="Switch Language"
        >
            <img 
                src={language === 'en' ? enIcon : ruIcon} 
                alt={language}
                className="w-[100px] h-[70px] object-contain rounded-[4px] shadow-sm"
            />
        </button>
    );
}

export default LanguageToggler;