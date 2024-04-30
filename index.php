<?php
// .env
require __DIR__ . '../vendor/autoload.php'; // Include Composer's autoloader
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

require_once ("./config/cors.php");
require_once ("./models/User.php");
require_once ("./includes/response.php");
// require_once ("./models/User.php");
require_once ("./controllers/authController.php");
require_once ("./includes/database.php");

$method = $_SERVER['REQUEST_METHOD'];
$request = str_replace('/weather', '', $_SERVER['REQUEST_URI']);

switch ($method) {
  case "OPTIONS":
    sendResponse(200, "preflight ok"); //prefligt request error " Response to preflight request doesn't pass access control check: It does not have HTTP ok status"
    break;
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
        case '/login':
          login(file_get_contents('php://input'), $conn);
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
?>