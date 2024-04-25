<?php
function sendResponse($statusCode, $message)
{
    // Set the HTTP status code
    http_response_code($statusCode);

    // Set the Content-Type header
    header('Content-Type: application/json');

    // Create response data
    $response = array(
        'message' => $message
    );

    // Encode response data as JSON
    $jsonResponse = json_encode($response);

    // Output the JSON response
    echo $jsonResponse;
}
?>