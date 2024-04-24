<?php

// .env
require __DIR__ . '../vendor/autoload.php'; // Include Composer's autoloader
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

require_once ("./config/cors.php");

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
  echo 'ok';
} else {
  echo __DIR__;
}
?>