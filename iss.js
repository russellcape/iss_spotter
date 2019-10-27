const request = require('request');

// const fetchMyIP = function(callback) {
//   const url = 'https://api.ipify.org?format=json';
//   request(url, (error, resp, body) => {
//     const data = JSON.parse(body);
//     // console.log("error:" ,error)
//     // console.log("data:", data)
//     // console.log("data.ip:" ,data.ip)
//     // console.log("typeof data:", typeof data)
//     // console.log("typeof data.ip:", typeof data.ip)
//     // console.log("typeof data.ip.toString():", typeof data.ip.toString())
//     if (error) {
//       callback(error, null);
//       return;
//     }
//     if (resp.statusCode !== 200) {
//       const msg = `Status Code ${resp.statusCode} when fetching IP. Response: ${data}`;
//       callback(Error(msg), null);
//       return;
//     }
//     if (data.length === 0) {
//       callback(`Failed to find IP Address`, null);
//     }
//       callback(null, data.ip.toString());
//   });
// };

const fetchCoordsByIP = function(ip, callback) {
  const url = `https://ipvigilante.com/json/1.1${ip}`;
  request(url, (error, resp, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (resp.statusCode !== 200) {
      callback(`Status Code ${resp.statusCode} when fetching IP. Response: ${body}`, null);
      return;
    }
    const { latitude, longitude } = JSON.parse(body).data;

    callback(null, { latitude, longitude });
  });
};



module.exports = {
  //fetchMyIP,
  fetchCoordsByIP
};
