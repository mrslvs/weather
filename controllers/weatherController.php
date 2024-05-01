<?php
function getWeather($rawData, $test){
    $data = json_decode($rawData, true);
    sendResponse(201, "lat: {$data['lat']} and lon: {$data['lon']}");
}
?>