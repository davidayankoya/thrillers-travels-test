import moment from "moment"


export function prettyDateFormat(date = '', short = false) {
    return date ? moment(date).format(short ? "ll" : "dddd, MMM D, YYYY") : '' 
}
export function prettyDateTimeFormat(date = '') {
    return date ? moment(date).format("MMMM Do YYYY, h:mm a") : '' 
}
export const moneyFormat = (amount, integer) => {
    if (amount === 'NIL') {
        return amount
    } else {
        let newAmount = Number(amount) ? Number(amount) : Number(0)
        return newAmount.toLocaleString(undefined, {minimumFractionDigits: integer ? 0 : 2, maximumFractionDigits: integer ? 0 : 2})
    }
}