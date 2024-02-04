const { v2 } = require("cloudinary");

v2.config({
  cloud_name: "lcobackend",
  api_key: "887834286126384",
  api_secret: "oOQfAUM6WCJ5QwUJCTbaew-1yMU",
});

module.exports = v2;
