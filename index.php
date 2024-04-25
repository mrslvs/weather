<?php

// .env
require __DIR__ . '../vendor/autoload.php'; // Include Composer's autoloader
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

require_once ("./config/cors.php");
require_once ("./models/User.php");
require_once ("./includes/response.php");
require_once ("./models/User.php");
require_once ("./controllers/authController.php");
require_once ("./includes/database.php");

$method = $_SERVER['REQUEST_METHOD'];
$request = str_replace('/weather', '', $_SERVER['REQUEST_URI']);

switch ($method) {
  case 'GET':
    switch ($request) {
      case '/':
        sendResponse(200, "get / ok");
        break;
      default:
        sendResponse(404, "Not found");
        break;
    }
    break;
  case 'POST':
    switch ($request) {
      case '/register':
        register(file_get_contents('php://input'), $conn);
        break;
      default:
        sendResponse(404, "Not found");
        break;
    }
    break;
  default:
    sendResponse(404, "Method {$method} nnot Allowed");
    break;
}


// require_once ("./config/db.php");
// try {
//   $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
//   // set the PDO error mode to exception
//   $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
// } catch (PDOException $e) {
//   echo "Connection failed: " . $e->getMessage();
// }

// if (isset($_SERVER['HTTP_ORIGIN']) && $_SERVER['HTTP_ORIGIN'] === $_ENV["FRONTEND_URL"]) {
// }

// if ($_SERVER['REQUEST_METHOD'] === 'GET' && parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH) === '/register') {
//   sendResponse(201, 'yesss');
//   echo "yesss";
//   // $data = file_get_contents('php://input');
//   // $registerData = json_decode($data, true);

//   // if (isset($registerData['username'], $registerData['email'], $registerData['password'])) {
//   //   // Extract user data
//   //   $username = $registerData['username'];
//   //   $email = $registerData['email'];
//   //   $password = $registerData['password'];

//   //   register($username, $email, $password, $conn);
//   // }
// }


// ==================== THIS IS NEW not working handling /register
// // Check if it's a POST request
// if ($_SERVER['REQUEST_METHOD'] === 'POST') {

//   // Check if the endpoint matches
//   if (parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH) === '/register') {
//     echo "register route ok";
//   }
// }


// ========= old stuff -comment starts on next line
// if ($_SERVER['REQUEST_METHOD'] === 'GET') {
//   // $isUsernameTaken = isUsernameTaken('x', $conn);

//   // if ($isUsernameTaken) {
//   //   echo "username taken";
//   // } else {
//   //   echo "username free";
//   // }
//   // sendResponse(200, 'you sent get request');

//   // register('test', 'ok', 'x', $conn);
//   // register('ok', 'test', 'x', $conn);
//   // $y = $_GET["dataObject"];
//   // echo $y;

//   // $data = file_get_contents('php://input'); // Get raw data from the body of http request
//   // $dataObject = json_decode($data, true);
//   // $y = $dataObject['y'];
//   // echo $y;

//   // echo 'getrequest';
//   // sendResponse(200, $y);
// } else {
//   // register('test2', 'test2', 'hesloheslo', $conn);


//   // $y = $_POST["dataObject"];
//   // echo $y;
//   $data = file_get_contents('php://input'); // Get raw data from the body of http request
//   $dataObject = json_decode($data, true);
//   $y = $dataObject['y'];
//   echo $y;

//   // sendResponse(404, 'you sent post request');
//   //   $url = 'https://api.openweathermap.org/data/2.5/weather?lat=48&lon=17&appid=' . $_ENV['WEATHER_API_KEY'];
//   //   $ch = curl_init($url);
//   // curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
//   // $response = curl_exec($ch);

//   // if ($response === false) {
//   //   echo 'Error: ' . curl_error($ch);
//   // } else {
//   //   // Process the API response
//   //   echo $response;
//   // }

//   // curl_close($ch);
// }
// ========= old stuff -comment ends on last line
?>