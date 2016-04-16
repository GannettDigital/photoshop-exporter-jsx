var iOSLaunchImage = function() {
  var config = {
    "sizes":[
      {"x":260,"y":260,"name":"LaunchPhone.png"},
      {"x":520,"y":520,"name":"LaunchPhone@2x.png"},
      {"x":1000,"y":1000,"name":"LaunchPhone@3x.png"},
      {"x":600,"y":600,"name":"LaunchPad.png"},
      {"x":1200,"y":1200,"name":"LaunchPad@2x.png"}
    ],
    "confirm":false,
    "outputFolder":"iOS",
    "traverseLayers":true
  }
  return config;
}
