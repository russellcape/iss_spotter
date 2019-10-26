/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */


const request = require('request');

const fetchMyIP = function(callback) {
  const url = 'https://api.ipify.org?format=json';
  request(url, (error, resp, body) => {
    const data = JSON.parse(body);
    // console.log("error:" ,error)
    // console.log("data:", data)
    // console.log("data.ip:" ,data.ip)
    // console.log("typeof data:", typeof data)
    // console.log("typeof data.ip:", typeof data.ip)
    // console.log("typeof data.ip.toString():", typeof data.ip.toString())
    if (error) {
      callback(error, null);
      return;
    }
    if (resp.statusCode !== 200) {
      const msg = `Status Code ${resp.statusCode} when fetching IP. Response: ${data}`;
      callback(Error(msg), null);
      return;
    }
    if (data.length === 0) {
      callback(`Failed to find IP Address`, null);
    }  
      callback(null, data.ip.toString());
  });
};

module.exports = { fetchMyIP };
