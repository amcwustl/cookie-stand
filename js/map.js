// I used examples on google api developer site to create this script: https://developers.google.com/maps/documentation/javascript/infowindows

function initMap() {
  // Create a map object centered on a specific location
  const map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 47.609038, lng: -122.337166},
    zoom: 10
  });

  // Create an array of marker locations for the 5 stores
  let locations = [
    {title: 'Flagship Store: Seattle', lat: 47.609038, lng: -122.337166, address: '1423 3rd Ave, Seattle, WA 98101, United States'},
    {title: 'Pats Cookies Paris', lat: 48.868736, lng: 2.329676, address: '6 Rue de la Paix, 75002 Paris, France'},
    {title: 'Pats Cookies Dubai', lat: 25.2048, lng: 55.2708, address: 'Sheikh Zayed Rd - Dubai - United Arab Emirates'},
    {title: 'Pats Cookies Lima', lat: -12.047378, lng: -77.032932, address: 'Jirón de la Unión 104, Cercado de Lima 15001, Peru'},
    {title: 'Pats Cookies Tokyo', lat: 35.680244, lng: 139.764871, address: '1 Chome-9-1 Marunouchi, Chiyoda City, Tokyo 100-0005, Japan'}
  ];

  // Loop through the array and add a marker for each location
  let infowindows =[];

  for (let i = 0; i < locations.length; i++) {
    let marker = new google.maps.Marker({
      position: {lat: locations[i].lat, lng: locations[i].lng},
      map: map,
      title: locations[i].title
    });

    let contentString= '<div><h4>' + locations[i].title + '</h4>' + '<p>' + locations[i].address + '</p></div>';
    let infowindow = new google.maps.InfoWindow({
      content: contentString
    });
    infowindows.push(infowindow);

    marker.addListener('click', function() {
      infowindows[i].open(map,marker);
    });
  }
}

initMap();
