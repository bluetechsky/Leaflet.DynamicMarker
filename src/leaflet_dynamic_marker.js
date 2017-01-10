/*
  Leaflet.DynamicMarker, a plugin for Leaflet to add dynamic color and text to map markers
  http://leafletjs.com
  https://github.com/bautroibaola/Leaflet.DynamicMarker
*/

/*global L*/

(function (){
  "use strict";
  L.DynamicMarker = L.Icon.extend({
    options: {
      iconSize: [35, 45],
      iconAnchor:   [17, 42],
      popupAnchor: [1, -32],
      className: 'dynamic-marker',
      icon: 'home',
      markerColor: 'blue',
      numberColor: 'white',
      number: ''
    },
    
    createIcon: function () {
      
      var div = document.createElement('div'),
          options = this.options;

      div.innerHTML = this._createInner();
      this._setIconStyles(div, 'icon-' + options.markerColor);

      return div;
    },

    _createInner: function() {
        var iconColorStyle = "", options = this.options;
            
        if(options.numberColor) {
            iconColorStyle = "style='color: " + options.numberColor + "' ";          
        }

      return "<span " + iconColorStyle + "><b>" + options.number + "</b></span>";
    },

    _setIconStyles: function (img, name) {
        var options = this.options,
            size = L.point(options['iconSize']),
            anchor = L.point(options.iconAnchor);
        
        img.className = 'dynamic-marker-' + name + ' ' + options.className;
        
        if (anchor) {
          img.style.marginLeft = (-anchor.x) + 'px';
          img.style.marginTop  = (-anchor.y) + 'px';
        }

        if (size) {
          img.style.width  = size.x + 'px';
          img.style.height = size.y + 'px';
        }
    }
  });

}());

