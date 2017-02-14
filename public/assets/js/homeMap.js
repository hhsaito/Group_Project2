  var getLocations = (function () {
    $.get("/api/businesses", function(data) {
    businesses = data;
    
    for (var i = 0; i <businesses.length; i++) {

      marker = new google.maps.Marker({
        position: new google.maps.LatLng(businesses[i].biz_lat, businesses[i].biz_long),
        map: map
      });
    }

    });
  })();

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: new google.maps.LatLng(41.8640997, -87.6699331),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });