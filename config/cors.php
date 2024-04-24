<?php
// Set CORS headers to allow requests from your React app's origin (replace with your actual origin)


header('Access-Control-Allow-Origin: ' . $_ENV['FRONTEND_URL']); // Adjust origin as needed
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true'); // Optional, enable if sending cookies
?>