export const buildUrlRoutes = (filtersParams) => {
  const queryParams = [];
  const excludeKeys = [
    'fromCityName',
    'toCityName',
    'currentPage',
    'offset',
    'limit'
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

export const getAdultEnding = (n) => {
  if (n % 10 === 1 && n % 100 !== 11) {
    return 'Взрослый'; // 1 взрослый
  } else if (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) {
    return 'Взрослых'; // 2 взрослых, 3 взрослых, 4 взрослых
  } else {
    return 'Взрослых'; // 5 взрослых, 11 взрослых и т.д.
  }
}

export const getChildEnding = (n) => {
  if (n % 10 === 1 && n % 100 !== 11) {
    return 'Ребенок'; // 1 ребенок
  } else if (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) {
    return 'Ребенка'; // 2 ребенка, 3 ребенка, 4 ребенка
  } else {
    return 'Детей'; // 5 детей, 11 детей и т.д.
  }
}
