var wms_layers = [];


        var lyr_BaseMap_0 = new ol.layer.Tile({
            'title': 'Base Map',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_OutdoorLocations_1 = new ol.format.GeoJSON();
var features_OutdoorLocations_1 = format_OutdoorLocations_1.readFeatures(json_OutdoorLocations_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OutdoorLocations_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OutdoorLocations_1.addFeatures(features_OutdoorLocations_1);
var lyr_OutdoorLocations_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OutdoorLocations_1, 
                style: style_OutdoorLocations_1,
                popuplayertitle: 'Outdoor Locations',
                interactive: true,
                title: '<img src="styles/legend/OutdoorLocations_1.png" /> Outdoor Locations'
            });
var format_IndoorLocations_2 = new ol.format.GeoJSON();
var features_IndoorLocations_2 = format_IndoorLocations_2.readFeatures(json_IndoorLocations_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndoorLocations_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndoorLocations_2.addFeatures(features_IndoorLocations_2);
var lyr_IndoorLocations_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IndoorLocations_2, 
                style: style_IndoorLocations_2,
                popuplayertitle: 'Indoor Locations',
                interactive: true,
                title: '<img src="styles/legend/IndoorLocations_2.png" /> Indoor Locations'
            });
var format_Feb25AutoWebsiteTraffic_3 = new ol.format.GeoJSON();
var features_Feb25AutoWebsiteTraffic_3 = format_Feb25AutoWebsiteTraffic_3.readFeatures(json_Feb25AutoWebsiteTraffic_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Feb25AutoWebsiteTraffic_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Feb25AutoWebsiteTraffic_3.addFeatures(features_Feb25AutoWebsiteTraffic_3);
var lyr_Feb25AutoWebsiteTraffic_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Feb25AutoWebsiteTraffic_3, 
                style: style_Feb25AutoWebsiteTraffic_3,
                popuplayertitle: 'Feb-25 Auto Website Traffic',
                interactive: true,
                title: '<img src="styles/legend/Feb25AutoWebsiteTraffic_3.png" /> Feb-25 Auto Website Traffic'
            });
var format_Feb25ManualWebsiteTraffic_4 = new ol.format.GeoJSON();
var features_Feb25ManualWebsiteTraffic_4 = format_Feb25ManualWebsiteTraffic_4.readFeatures(json_Feb25ManualWebsiteTraffic_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Feb25ManualWebsiteTraffic_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Feb25ManualWebsiteTraffic_4.addFeatures(features_Feb25ManualWebsiteTraffic_4);
var lyr_Feb25ManualWebsiteTraffic_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Feb25ManualWebsiteTraffic_4, 
                style: style_Feb25ManualWebsiteTraffic_4,
                popuplayertitle: 'Feb-25 Manual Website Traffic',
                interactive: true,
                title: '<img src="styles/legend/Feb25ManualWebsiteTraffic_4.png" /> Feb-25 Manual Website Traffic'
            });
var format_Mar25AutoWebsiteTraffic_5 = new ol.format.GeoJSON();
var features_Mar25AutoWebsiteTraffic_5 = format_Mar25AutoWebsiteTraffic_5.readFeatures(json_Mar25AutoWebsiteTraffic_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mar25AutoWebsiteTraffic_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mar25AutoWebsiteTraffic_5.addFeatures(features_Mar25AutoWebsiteTraffic_5);
var lyr_Mar25AutoWebsiteTraffic_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mar25AutoWebsiteTraffic_5, 
                style: style_Mar25AutoWebsiteTraffic_5,
                popuplayertitle: 'Mar-25 Auto Website Traffic',
                interactive: true,
                title: '<img src="styles/legend/Mar25AutoWebsiteTraffic_5.png" /> Mar-25 Auto Website Traffic'
            });
var format_Mar25ManualWebsiteTraffic_6 = new ol.format.GeoJSON();
var features_Mar25ManualWebsiteTraffic_6 = format_Mar25ManualWebsiteTraffic_6.readFeatures(json_Mar25ManualWebsiteTraffic_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mar25ManualWebsiteTraffic_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mar25ManualWebsiteTraffic_6.addFeatures(features_Mar25ManualWebsiteTraffic_6);
var lyr_Mar25ManualWebsiteTraffic_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mar25ManualWebsiteTraffic_6, 
                style: style_Mar25ManualWebsiteTraffic_6,
                popuplayertitle: 'Mar-25 Manual Website Traffic',
                interactive: true,
                title: '<img src="styles/legend/Mar25ManualWebsiteTraffic_6.png" /> Mar-25 Manual Website Traffic'
            });

lyr_BaseMap_0.setVisible(true);lyr_OutdoorLocations_1.setVisible(true);lyr_IndoorLocations_2.setVisible(true);lyr_Feb25AutoWebsiteTraffic_3.setVisible(true);lyr_Feb25ManualWebsiteTraffic_4.setVisible(true);lyr_Mar25AutoWebsiteTraffic_5.setVisible(true);lyr_Mar25ManualWebsiteTraffic_6.setVisible(true);
var layersList = [lyr_BaseMap_0,lyr_OutdoorLocations_1,lyr_IndoorLocations_2,lyr_Feb25AutoWebsiteTraffic_3,lyr_Feb25ManualWebsiteTraffic_4,lyr_Mar25AutoWebsiteTraffic_5,lyr_Mar25ManualWebsiteTraffic_6];
lyr_OutdoorLocations_1.set('fieldAliases', {'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Location Name': 'Location Name', 'Location Type': 'Location Type', });
lyr_IndoorLocations_2.set('fieldAliases', {'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Location Name': 'Location Name', 'Location Type': 'Location Type', });
lyr_Feb25AutoWebsiteTraffic_3.set('fieldAliases', {'Lat': 'Lat', 'Long': 'Long', 'Number of visits': 'Number of visits', 'Month': 'Month', });
lyr_Feb25ManualWebsiteTraffic_4.set('fieldAliases', {'Lat': 'Lat', 'Long': 'Long', 'Number of visits': 'Number of visits', 'Month': 'Month', });
lyr_Mar25AutoWebsiteTraffic_5.set('fieldAliases', {'Lat': 'Lat', 'Long': 'Long', 'Number of visits': 'Number of visits', 'Month': 'Month', });
lyr_Mar25ManualWebsiteTraffic_6.set('fieldAliases', {'Lat': 'Lat', 'Long': 'Long', 'Number of visits': 'Number of visits', 'Month': 'Month', });
lyr_OutdoorLocations_1.set('fieldImages', {'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Location Name': 'TextEdit', 'Location Type': 'TextEdit', });
lyr_IndoorLocations_2.set('fieldImages', {'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Location Name': 'TextEdit', 'Location Type': 'TextEdit', });
lyr_Feb25AutoWebsiteTraffic_3.set('fieldImages', {'Lat': 'TextEdit', 'Long': 'TextEdit', 'Number of visits': 'Range', 'Month': 'TextEdit', });
lyr_Feb25ManualWebsiteTraffic_4.set('fieldImages', {'Lat': 'TextEdit', 'Long': 'TextEdit', 'Number of visits': 'Range', 'Month': 'TextEdit', });
lyr_Mar25AutoWebsiteTraffic_5.set('fieldImages', {'Lat': 'TextEdit', 'Long': 'TextEdit', 'Number of visits': 'Range', 'Month': 'TextEdit', });
lyr_Mar25ManualWebsiteTraffic_6.set('fieldImages', {'Lat': 'TextEdit', 'Long': 'TextEdit', 'Number of visits': 'Range', 'Month': 'TextEdit', });
lyr_OutdoorLocations_1.set('fieldLabels', {'Latitude': 'no label', 'Longitude': 'no label', 'Location Name': 'inline label - visible with data', 'Location Type': 'inline label - visible with data', });
lyr_IndoorLocations_2.set('fieldLabels', {'Latitude': 'no label', 'Longitude': 'no label', 'Location Name': 'inline label - visible with data', 'Location Type': 'inline label - visible with data', });
lyr_Feb25AutoWebsiteTraffic_3.set('fieldLabels', {'Lat': 'no label', 'Long': 'no label', 'Number of visits': 'inline label - visible with data', 'Month': 'inline label - visible with data', });
lyr_Feb25ManualWebsiteTraffic_4.set('fieldLabels', {'Lat': 'no label', 'Long': 'no label', 'Number of visits': 'inline label - visible with data', 'Month': 'inline label - visible with data', });
lyr_Mar25AutoWebsiteTraffic_5.set('fieldLabels', {'Lat': 'no label', 'Long': 'no label', 'Number of visits': 'inline label - visible with data', 'Month': 'inline label - visible with data', });
lyr_Mar25ManualWebsiteTraffic_6.set('fieldLabels', {'Lat': 'no label', 'Long': 'no label', 'Number of visits': 'inline label - visible with data', 'Month': 'inline label - visible with data', });
lyr_Mar25ManualWebsiteTraffic_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});