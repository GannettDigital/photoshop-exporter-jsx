var iOSLaunchImage = function() {
  var config = {
    "sizes":[
      {"x":600,"y":600,"name":"LaunchImage.png"},
      {"x":1200,"y":1200,"name":"LaunchImage@2x.png"},
      {"x":1800,"y":1800,"name":"LaunchImage@3x.png"}
    ],
    "confirm":false,
    "outputFolder":"iOS",
    "traverseLayers":true
  }
  return config;
}
