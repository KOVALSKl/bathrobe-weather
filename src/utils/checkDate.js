export function checkDate(date) {
    const currentDate = new Date();
    const tomorrowDate = new Date(date * 1000);

    return currentDate.toLocaleDateString() === tomorrowDate.toLocaleDateString();
}