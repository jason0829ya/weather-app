const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;
const getGeoCode = require('./src/API/geocode');
const getForecastdata = require('./src/API/forecast');
app.use(express.static(path.join(__dirname, 'build')));

// app.get('/ping', function (req, res) {
//  return res.send('pong');
// });

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/weather', async(req, res) => {
   if (!req.query.search) {
      return res.send({ error: 'please provide an address !!!' })
   }

   const place = req.query.search;
   try {
      const geo_data = await getGeoCode(place); // get longitude and latitude from mapbox API
      const forecast_data = await getForecastdata(geo_data); // get weather information from darksky.net API
      res.send(forecast_data);
   }
   catch(e) {
      res.send({ error: e.message });
   }
})

app.listen(port, ()=>{
   console.log('server has been established on port ' + port);
});