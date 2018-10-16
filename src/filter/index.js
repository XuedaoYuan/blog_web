import moment from "moment";

export function parseDate(val, format = "YYYY-MM-DD HH:mm:ss") {

    if (!val) {
        return '';
    }

    return moment(val).format(format);
}
