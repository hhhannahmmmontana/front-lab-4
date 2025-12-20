
import sun from '/src/img/icons/sun.png';
import cloud from '/src/img/icons/cloud.png';
import drizzle from '/src/img/icons/drizzle.png';
import rain from '/src/img/icons/rain.png';
import snow from '/src/img/icons/snow.png';
import storm from '/src/img/icons/storm.png';
import mist from '/src/img/icons/mist.png';

const icons = {
    '01d': sun, '01n': sun,
    '02d': cloud, '02n': cloud,
    '03d': cloud, '03n': cloud,
    '04d': cloud, '04n': cloud,
    '09d': drizzle, '09n': drizzle,
    '10d': rain, '10n': rain,
    '11d': storm, '11n': storm,
    '13d': snow, '13n': snow,
    '50d': mist, '50n': mist
};

export const getIconSource = (code) => {
    return icons[code] || sun;
};