const rp = require('request-promise');

const Forecast = async (place, callback) => {
   const forecast_url = 'https://api.darksky.net/forecast/ba1aa6ebcfbed1639cc4f8e087d362aa/' + place.latitude + ',' + place.longitude + '?units=ca';
   const result = await rp({ url: forecast_url, json: true });
   // console.log(result)
   return new Promise((resolve, reject) => {
      // console.log(result)
      const data = {
         place: place.place,
         temperature: result.currently.temperature,
         rainProb: result.currently.precipProbability + '%'
      }
      resolve(data);
   })
}

module.exports = Forecast;