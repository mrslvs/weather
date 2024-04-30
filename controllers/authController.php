<?php
function register($rawData, $conn)
{
    $data = json_decode($rawData, true);
    // echo $data['username'];

    if (User::isEmailTaken((string) $data['email'], $conn)) {
        sendResponse(409, 'Email already used');
        return;
    }

    if (User::isUsernameTaken((string) $data['username'], $conn)) {
        sendResponse(409, 'Username taken');
        return;
    }
        
    if (User::saveUserToDatabase((string) $data['username'], (string) $data['email'], (string) $data['password'], $conn)){
        sendResponse(201, 'Registration successful');
    }else{
        sendResponse(500, 'Error registering user');        
    }
}


function login($rawData, $conn){
    $data = json_decode($rawData, true);
        
    $User = User::getUserByUsername($data['username'], $conn);
    
    if ($User === 500){
        sendResponse(500, 'Error logging in');
    }else if(!$User){
        sendResponse(404, "User error");
    }else{
        sendResponse(200, "Login successful and id is: {$User->getId()}");
    }
}
?>