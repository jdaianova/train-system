export const buildUrlRoutes = (filtersParams) => {
  const queryParams = [];
  const excludeKeys = [
    'fromCityName',
    'toCityName',
    'sortOrder',
    'currentPage',
    'ticketsPerPage',
    'totalPages',
    'priceInterval'
  ]; // исключаемые поля

  for (const key in filtersParams) {
    const value = filtersParams[key];
    if (value && !excludeKeys.includes(key)) {
      const apiParamName = key.replace(/([A-Z])/g, '_$1').toLowerCase();
      queryParams.push(`${apiParamName}=${value}`);
    }
  }

  return `/routes?${queryParams.join('&')}`;
};


export function capitalizeLettersInCityName(str) {
  return str.replace(/(?:^|\s|-)\S/g, function (match) {
    return match.toUpperCase();
  });
}

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

export function extractNameAndNumber(str) {
  const parts = str.split(' - ');

  if (parts.length === 2) {
    return { name: parts[0].trim(), number: parseInt(parts[1], 10) };
  } else if (parts.length === 1) {
    const isNumber = !isNaN(parseInt(parts[0], 10));
    return isNumber 
      ? { name: null, number: parseInt(parts[0], 10) } 
      : { name: parts[0].trim(), number: null };
  } else {
    return { name: null, number: null };
  }
}
