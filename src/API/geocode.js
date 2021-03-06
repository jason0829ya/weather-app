const rp = require('request-promise');

const getGeoCode = async (place) => {
   const geo_url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + place + '.json?access_token=pk.eyJ1IjoicjA2OTQzMDY0IiwiYSI6ImNqdWpzNDBpejBhMmo0M3M2NDYyYnNwaXcifQ.tEnhfxu8t5Z_Ggn87s_NkA';
   const result = await rp({ url: geo_url, json: true });
   if (result.features.length === 0) {
      throw new Error(`unable to find location: ${ place }`)
   }

   const data = {
      place: result.features[0].place_name,
      longitude: result.features[0].center[0],
      latitude: result.features[0].center[1]
   };
   return data;   
}

module.exports = getGeoCode;