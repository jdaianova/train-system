export const buildUrlRoutes = (filersParams) => {
    let currentUrl = `/routes?`;
    if (filersParams.fromCityId) { currentUrl += `from_city_id=${filersParams.fromCityId}` };
    if (filersParams.toCityId) { currentUrl += `&to_city_id=${filersParams.toCityId}` };
    if (filersParams.dateStart) { currentUrl += `&date_start=${filersParams.dateStart}` };
    if (filersParams.dateEnd) { currentUrl += `&date_end=${filersParams.dateEnd}` };
    // if (filersParams.haveWifi) { currentUrl += `&have_wifi=${filersParams.haveWifi}` };
    // if (filersParams.isExpress) { currentUrl += `&have_express=${filersParams.isExpress}` };
    // if (filersParams.haveFirstClass) { currentUrl += `&have_first_class=${filersParams.haveFirstClass}` };
    return currentUrl;
}

export function capitalizeLettersInCityName(str) {
    return str.replace(/(?:^|\s|-)\S/g, function (match) {
        return match.toUpperCase();
    });
}

export const dateChecker = (date1, date2) => {
    const isValidDate = (date) => {
        const currentDate = new Date();
        return date instanceof Date && date > currentDate;
    };
    // Проверяем, являются ли date1 и date2 датами и date2 позже date1
    return isValidDate(date1) && isValidDate(date2) && date2 > date1;
};

export function secondsToHoursMinutes(seconds) { 
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
  
    const hoursString = hours > 0 ? `${hours} ${getHourSuffix(hours)}` : '';
    const minutesString = minutes > 0 ? `${minutes} ${getMinuteSuffix(minutes)}` : '';
  
    return `${hoursString} ${minutesString}`.trim();
  }
  
  function getHourSuffix(hours) {
    if (hours === 1 || (hours > 20 && hours % 10 === 1)) {
      return 'час';
    } else if ((hours >= 2 && hours <= 4) || (hours > 20 && (hours % 10 >= 2 && hours % 10 <= 4))) {
      return 'часа';
    } else {
      return 'часов';
    }
  }
  
  function getMinuteSuffix(minutes) {
    if (minutes === 1 || (minutes > 20 && minutes % 10 === 1)) {
      return 'минута';
    } else if ((minutes >= 2 && minutes <= 4) || (minutes > 20 && (minutes % 10 >= 2 && minutes % 10 <= 4))) {
      return 'минуты';
    } else {
      return 'минут';
    }
  }