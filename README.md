# Leaflet.DynamicMarker
Plugin for Leaflet to add dynamic color and text to map markers

L.DynamicMarker is a simple html marker icon with no external library or file dependencies. 
By default, up to 3 characters of text or about 3 numerals can fit inside the icon's inner circle.

Also L.DynamicMarker, a small Marker class for DivIcons with a setStyle implementation that handles marker color changes options.

## Requirements
- Leaflet 0.7+ (earlier versions may work, but are untested) 

## Screenshots
![LeafletDynamicMarker screenshot](https://raw.githubusercontent.com/bautroibaola/Leaflet.DynamicMarker/master/screenshots/leaflet_dynamic_marker.png "Screenshot of Leaflet.DynamicMarker")



## Demo
The following example is centered on the Hanoi with random number and "named" color for each icon. The default options are shown as placeholder text. The icon can also be changed randomly by refreshing your browser or clicking populate button.

[Example](http://bautroibaola.github.io/Leaflet.DynamicMarker/)


## Usage
- Include Leaflet first
````xml
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.2/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet@1.0.2/dist/leaflet.js"></script>
````

- Include the Leaflet.DynamicMarker source file
````xml
<link rel="stylesheet" href="../src/leaflet_dynamic_marker.css" />
````

````xml
<script src="../src/leaflet_dynamic_marker.js"></script>
````

- Add your js code
````js
var blueMarker = L.marker([21.0278, 105.8342], {
                    icon: 
                    	new L.DynamicMarker({
	                      number: 10, 
	                      markerColor: "blue"
	                  	})
	                  }).addTo(map);
````

