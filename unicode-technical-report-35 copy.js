const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const extendedMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const extendedDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
function format(date, format) {
    const match =  format.match(/[yGMdEhmsHa]{1,4}/g)
    match.forEach( element => {
        const rep = (str) => format = format.replace(element, str);
        switch (element) {
            case 'y' : rep(Math.abs(date.getFullYear())); break;
            case 'yyyy': 
                let tmp = "";
                for (let i = 0; i<4-Math.abs(date.getFullYear()).toString().length; i++) {tmp += "0"}
                rep(tmp+Math.abs(date.getFullYear()).toString()); break;
            case 'G' :  rep(date.getFullYear() < 0 ? "BC" : "AD"); break;
            case 'GGGG' :  rep(date.getFullYear() < 0 ? "Before Christ" : "Anno Domini"); break;
            case 'M' : rep(date.getMonth()+1); break;
            case 'MM' : rep(date.getMonth() < 10 ? "0"+( date.getMonth()+1) : (date.getMonth()+1)); break;
            case 'MMM' : rep(month[date.getMonth()]); break;
            case 'MMMM' : rep(extendedMonth[date.getMonth()]); break;
            case 'd' : rep(date.getDate()); break;
            case 'dd' : rep(date.getDate() < 10 ? "0"+( date.getDate()) : (date.getDate())); break;
            case 'E' : rep(day[date.getDay()]); break;
            case 'EEEE' : rep(extendedDay[date.getDay()]); break;
            case 'H' : rep(date.getHours()); break;
            case 'HH' : rep(date.getHours()<10 ? "0"+ date.getHours() : date.getHours()); break;
            case 'h' : rep(date.getHours()%12); break;
            case 'hh' : rep(date.getHours()%12<10 ? "0"+ date.getHours()%12 : date.getHours()%12); break;
            case 'm' : rep(date.getMinutes()); break;
            case 'mm' : rep(date.getMinutes()<10 ? "0"+ date.getMinutes() : date.getMinutes()); break;
            case 's' : rep(date.getSeconds()); break;
            case 'ss' : rep(date.getSeconds()<10 ? "0"+ date.getSeconds() : date.getSeconds()); break;
            case 'a' : rep(date.getHours()<12 ? "AM" : "PM"); break;
        }
    })
    return format;
    }
