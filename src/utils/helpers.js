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

export const buildUrlCityId = (city) => {
    const currentUrl = encodeURI(`/routes/cities?name=${city}`);
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
