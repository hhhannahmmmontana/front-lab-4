
import sun from '/src/img/icons/sun.png';
import clouds from '/src/img/icons/clouds.png';
import drizzle from '/src/img/icons/drizzle.png';
import rain from '/src/img/icons/rain.png';
import mist from '/src/img/icons/mist.png';

const icons = {
    '01d': sun, '01n': sun,
    '02d': clouds, '02n': clouds,
    '03d': clouds, '03n': clouds,
    '04d': clouds, '04n': clouds,
    '09d': drizzle, '09n': drizzle,
    '10d': rain, '10n': rain,
    '50d': mist, '50n': mist
};

export const getIconSource = (code) => {
    return icons[code] || sun;
};