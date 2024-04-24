<?php

// .env
require __DIR__ . '../vendor/autoload.php'; // Include Composer's autoloader
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

require_once ("./config/cors.php");
require_once ("./config/db.php");
require_once ("./models/User.php");
require_once ("./includes/response.php");
require_once ("./models/User.php");

try {
  $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}


if ($_SERVER['REQUEST_METHOD'] === 'GET') {
  // $isUsernameTaken = isUsernameTaken('x', $conn);

  // if ($isUsernameTaken) {
  //   echo "username taken";
  // } else {
  //   echo "username free";
  // }
  // sendResponse(200, 'you sent get request');

  // register('test', 'ok', 'x', $conn);
  register('ok', 'test', 'x', $conn);
} else {
  register('test2', 'test2', 'hesloheslo', $conn);
  // sendResponse(404, 'you sent post request');
  //   $url = 'https://api.openweathermap.org/data/2.5/weather?lat=48&lon=17&appid=' . $_ENV['WEATHER_API_KEY'];
  //   $ch = curl_init($url);
  // curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  // $response = curl_exec($ch);

  // if ($response === false) {
  //   echo 'Error: ' . curl_error($ch);
  // } else {
  //   // Process the API response
  //   echo $response;
  // }

  // curl_close($ch);
}
?>