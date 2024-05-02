<?php

function kelvinToCelsius($tempKelvin) {
    return round($tempKelvin - 273.15);
}
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

    $weatherData = [
        'id' => uniqid('', true), // used for frontend displaying
        'location' => $data['name'],
        'country' => $data['sys']['country'],
        'feels_like' => $data['main']['feels_like'],
        'humidity' => $data['main']['humidity'],
        'pressure' => $data['main']['pressure'],
        'temp' => kelvinToCelsius($data['main']['temp']),
        'temp_min' => kelvinToCelsius($data['main']['temp_min']),
        'temp_max' => kelvinToCelsius($data['main']['temp_max']),
        // 'clouds' => $data['clouds'],
        'sunrise' => $data['sys']['sunrise'],
        'sunset' => $data['sys']['sunset'],
        'weather' => $data['weather'][0]['main'],
    ];


    // echo "Weather for " . $data['name'] . ": " . $data['weather'][0]['description'];

    // sendResponse(200, $data);
    sendResponse(200, $weatherData);
}
?>