var wms_layers = [];


        var lyr_ESRIGraylight_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_AdministrasiDesa_1 = new ol.format.GeoJSON();
var features_AdministrasiDesa_1 = format_AdministrasiDesa_1.readFeatures(json_AdministrasiDesa_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AdministrasiDesa_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdministrasiDesa_1.addFeatures(features_AdministrasiDesa_1);
var lyr_AdministrasiDesa_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AdministrasiDesa_1, 
                style: style_AdministrasiDesa_1,
                popuplayertitle: "Administrasi Desa",
                interactive: true,
                title: '<img src="styles/legend/AdministrasiDesa_1.png" /> Administrasi Desa'
            });
var format_Servicearea24_2 = new ol.format.GeoJSON();
var features_Servicearea24_2 = format_Servicearea24_2.readFeatures(json_Servicearea24_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Servicearea24_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Servicearea24_2.addFeatures(features_Servicearea24_2);
var lyr_Servicearea24_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Servicearea24_2, 
                style: style_Servicearea24_2,
                popuplayertitle: "Service area (2,4)",
                interactive: true,
                title: '<img src="styles/legend/Servicearea24_2.png" /> Service area (2,4)'
            });
var format_Servicearea12_3 = new ol.format.GeoJSON();
var features_Servicearea12_3 = format_Servicearea12_3.readFeatures(json_Servicearea12_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Servicearea12_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Servicearea12_3.addFeatures(features_Servicearea12_3);
var lyr_Servicearea12_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Servicearea12_3, 
                style: style_Servicearea12_3,
                popuplayertitle: "Service area (1,2)",
                interactive: true,
                title: '<img src="styles/legend/Servicearea12_3.png" /> Service area (1,2)'
            });
var format_WISATAKOTABATU_4 = new ol.format.GeoJSON();
var features_WISATAKOTABATU_4 = format_WISATAKOTABATU_4.readFeatures(json_WISATAKOTABATU_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WISATAKOTABATU_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WISATAKOTABATU_4.addFeatures(features_WISATAKOTABATU_4);
var lyr_WISATAKOTABATU_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WISATAKOTABATU_4, 
                style: style_WISATAKOTABATU_4,
                popuplayertitle: "WISATA KOTA BATU",
                interactive: true,
    title: 'WISATA KOTA BATU<br />\
    <img src="styles/legend/WISATAKOTABATU_4_0.png" /> Batu Night Spectacular<br />\
    <img src="styles/legend/WISATAKOTABATU_4_1.png" /> Eco Green Park<br />\
    <img src="styles/legend/WISATAKOTABATU_4_2.png" /> Jawa Timur Park 1<br />\
    <img src="styles/legend/WISATAKOTABATU_4_3.png" /> Jawa Timur Park 2<br />\
    <img src="styles/legend/WISATAKOTABATU_4_4.png" /> Jawa Timur Park 3<br />\
    <img src="styles/legend/WISATAKOTABATU_4_5.png" /> Museum Angkut<br />\
    <img src="styles/legend/WISATAKOTABATU_4_6.png" /> Museum Satwa<br />\
    <img src="styles/legend/WISATAKOTABATU_4_7.png" /> Taman Rekreasi Selecta<br />\
    <img src="styles/legend/WISATAKOTABATU_4_8.png" /> The Bagong Advanture (Museum Tubuh)<br />'
        });

lyr_ESRIGraylight_0.setVisible(true);lyr_AdministrasiDesa_1.setVisible(true);lyr_Servicearea24_2.setVisible(true);lyr_Servicearea12_3.setVisible(true);lyr_WISATAKOTABATU_4.setVisible(true);
var layersList = [lyr_ESRIGraylight_0,lyr_AdministrasiDesa_1,lyr_Servicearea24_2,lyr_Servicearea12_3,lyr_WISATAKOTABATU_4];
lyr_AdministrasiDesa_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'KELURAHAN': 'KELURAHAN', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Servicearea24_2.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'type': 'type', 'start': 'start', 'Jangkauan': 'Jangkauan', });
lyr_Servicearea12_3.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'type': 'type', 'start': 'start', 'Jangkauan': 'Jangkauan', });
lyr_WISATAKOTABATU_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Nama': 'Nama', 'Tahun Berdiri': 'Tahun Berdiri', 'Lokasi': 'Lokasi', 'Foto': 'Foto', });
lyr_AdministrasiDesa_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'KELURAHAN': '', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Servicearea24_2.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', 'Jangkauan': '', });
lyr_Servicearea12_3.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', 'Jangkauan': '', });
lyr_WISATAKOTABATU_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Nama': 'TextEdit', 'Tahun Berdiri': 'TextEdit', 'Lokasi': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_AdministrasiDesa_1.set('fieldLabels', {'KDPPUM': 'hidden field', 'KELURAHAN': 'inline label - visible with data', 'REMARK': 'hidden field', 'KDPBPS': 'hidden field', 'FCODE': 'hidden field', 'LUASWH': 'hidden field', 'UUPP': 'hidden field', 'SRS_ID': 'hidden field', 'LCODE': 'hidden field', 'METADATA': 'hidden field', 'KDEBPS': 'hidden field', 'KDEPUM': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDBBPS': 'hidden field', 'KDBPUM': 'hidden field', 'WADMKD': 'hidden field', 'WIADKD': 'hidden field', 'WADMKC': 'hidden field', 'WIADKC': 'hidden field', 'WADMKK': 'hidden field', 'WIADKK': 'hidden field', 'WADMPR': 'hidden field', 'WIADPR': 'hidden field', 'TIPADM': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_Servicearea24_2.set('fieldLabels', {'id': 'hidden field', 'Nama': 'hidden field', 'type': 'hidden field', 'start': 'hidden field', 'Jangkauan': 'inline label - visible with data', });
lyr_Servicearea12_3.set('fieldLabels', {'id': 'hidden field', 'Nama': 'hidden field', 'type': 'hidden field', 'start': 'hidden field', 'Jangkauan': 'inline label - visible with data', });
lyr_WISATAKOTABATU_4.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Nama': 'inline label - visible with data', 'Tahun Berdiri': 'inline label - visible with data', 'Lokasi': 'inline label - visible with data', 'Foto': 'inline label - visible with data', });
lyr_WISATAKOTABATU_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});