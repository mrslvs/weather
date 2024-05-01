<?php
function getWeather($rawData, $test){
    $data = json_decode($rawData, true);
    
    $lat = $data['lat'];
    $lon = $data['lon'];
    
    $apiKey = $_ENV['WEATHER_API_KEY'];

    // API endpoint URL
    $weatherUrl = "https://api.openweathermap.org/data/2.5/weather?lat=$lat&lon=$lon&appid=$apiKey";

    $curl = curl_init();

    curl_setopt_array($curl, [
        CURLOPT_URL => $weatherUrl,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_FAILONERROR => true // Fail on HTTP errors
    ]);

    $response = curl_exec($curl);

    if(curl_errno($curl)) {
        $error_message = curl_error($curl);
        // Handle cURL error
        sendResponse(500, $error_message);
    }

    curl_close($curl);

    $data = json_decode($response, true);

    // echo "Weather for " . $data['name'] . ": " . $data['weather'][0]['description'];

    sendResponse(200, $data);
}
?>