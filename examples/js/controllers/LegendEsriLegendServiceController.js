        app.controller("LegendEsriLegendServiceController", [ "$scope", function($scope) {
            angular.extend($scope, {
            	options: {
            		controls: {
            			layers: {
            				visible: false
            			}
            		}
            	},
                usa: {
	            	lat: 39.931486,
	                lng: -101.406250,
	                zoom: 3
	            },
                markers: {
                    m1: {
                        lat: 39.931486,
	                	lng: -101.406250,
                    }
                },
                layers: {
					baselayers: {
                        mapbox_light: {
                            name: 'Mapbox Light',
                            type: 'mapbox',
                            user: 'elesdoar',
                            key: 'citojtj9e00022iqjmdzhrdwd',
                            apiKey: 'pk.eyJ1IjoiZWxlc2RvYXIiLCJhIjoiY2l0bmcwaDNpMDQzMTJvbDRpaTltN2dlbiJ9.KDnhRVh9St6vpQovMI7iLg'
                        }
                   },
                   overlays: {
				    	usa_pop: {
					    	name: "USA 2000-2010 Population Change",
					        type: "agsDynamic",
					        url: "http://services.arcgisonline.com/arcgis/rest/services/Demographics/USA_1990-2000_Population_Change/MapServer",
					        visible: true,
					        layerOptions: {
				                opacity: 0.85,
				                attribution: "Copyright:© 2014 Esri, DeLorme, HERE, TomTom"
					        }
				    	},
				    	usa_social: {
					    	name: "USA Social Vulnerability Index",
					        type: "agsDynamic",
					        url: "http://services.arcgisonline.com/arcgis/rest/services/Demographics/USA_Social_Vulnerability_Index/MapServer",
					        visible: false,
					        layerOptions: {
				                opacity: 0.85,
				                attribution: "Copyright:© 2014 Esri, FAO, NOAA"
					        }
				    	},
                    },
                },
                legend: {
                	url: "http://services.arcgisonline.com/arcgis/rest/services/Demographics/USA_1990-2000_Population_Change/MapServer/legend?f=json",
                	legendClass: "info legend-esri",
					position: "bottomleft",
                },
                legendURL1: "http://services.arcgisonline.com/arcgis/rest/services/Demographics/USA_1990-2000_Population_Change/MapServer/legend?f=json",
                legendURL2: "http://services.arcgisonline.com/arcgis/rest/services/Demographics/USA_Social_Vulnerability_Index/MapServer/legend?f=json",
                switchLegend: function() {
                	$scope.layers.overlays.usa_social.visible = !$scope.layers.overlays.usa_social.visible;
                	$scope.legend.url =
                		$scope.legend.url == $scope.legendURL1? $scope.legendURL2:$scope.legendURL1;
                }
            });
        }]);