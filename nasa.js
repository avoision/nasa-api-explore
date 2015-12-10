var Client        = require('node-rest-client').Client;

var api_key = process.env.NASA_KEY;

// Earth Imagery
// https://api.nasa.gov/planetary/earth/imagery?lon=100.75&lat=1.5&date=2014-02-01&cloud_score=True&api_key=DEMO_KEY

var earthImageryURL = 'https://api.nasa.gov/planetary/earth/imagery?lon=100.75&lat=1.5&date=2014-02-01&cloud_score=True&api_key=' + api_key;


// Earth Assets
// https://api.nasa.gov/planetary/earth/assets?lon=100.75&lat=1.5&begin=2014-02-01&api_key=DEMO_KEY

var earthAssetsURL = 'https://api.nasa.gov/planetary/earth/assets?lon=100.75&lat=1.5&begin=2014-02-01&api_key=' + api_key;


// Sounds
// https://api.nasa.gov/planetary/sounds?q=apollo&api_key=DEMO_KEY

var soundsURL = 'https://api.nasa.gov/planetary/sounds?api_key=' + api_key;

var client = new Client();
// client.get(earthImageryURL, args, function (data, response) {

client.get(earthImageryURL, function (data, response) {  
  if (response.statusCode === 200) {
    console.log(data);

  } else {
    console.log(response);
  }


});


