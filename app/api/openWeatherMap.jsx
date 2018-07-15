let axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'https://api.openweathermap.org/data/2.5/weather?appid=b3da2080c19178c15b4dca939b0d1a0b&units=metric';
// b3da2080c19178c15b4dca939b0d1a0b


module.exports = {
    getTemp: function(location){
        var encodeLocation = encodeURIComponent(location);
        // We use backtick: ` `  to run variables in string literals ${}
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodeLocation}`;


        return axios.get(requestUrl).then( (res) => {
            //Success case
            if (res.data.cod && res.data.message){
                throw new Error(res.data.message);
            }
            else {
                return res.data.main.temp;
            }
        },
            (res) => {
            //Error case
            throw new Error(res.data.message);
        })
    }
}