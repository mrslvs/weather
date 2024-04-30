<?php
// require_once ('../includes/getBodyData.php');
// require_once ("../models/User.php");    
// require_once __DIR__ . '/../models/User.php';
// function isEmailTaken($email, $conn)
// {
//     $sql = 'SELECT COUNT(*) FROM user WHERE email = :email';
//     $stmt = $conn->prepare($sql);
//     $stmt->bindParam(':email', $email);
//     $stmt->execute();
//     $count = $stmt->fetchColumn();
//     return $count > 0;
// }

// function isUsernameTaken($username, $conn)
// {
//     $sql = 'SELECT COUNT(*) FROM user WHERE username = :username';
//     $stmt = $conn->prepare($sql);
//     $stmt->bindParam(':username', $username);
//     $stmt->execute();
//     $count = $stmt->fetchColumn();
//     return $count > 0;
// }

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

    // $hashed_password = password_hash($data['password'], PASSWORD_DEFAULT);

    // $sql = 'INSERT INTO user (username, email, password) VALUES (:username, :email, :password)';
    // $stmt = $conn->prepare($sql);
    // $stmt->bindParam(':username', $data['username']);
    // $stmt->bindParam(':email', $data['email']);
    // $stmt->bindParam(':password', $hashed_password);

    // if ($stmt->execute()) {
    //     // Registration successful
    //     sendResponse(201, 'Registration successful');
    // } else {
        //     // Error occurred while executing the SQL statement
        //     sendResponse(500, 'Error registering user');
        // }
        
    if (User::saveUserToDatabase((string) $data['username'], (string) $data['email'], (string) $data['password'], $conn)){
        sendResponse(201, 'Registration successful');
    }else{
        sendResponse(500, 'Error registering user');        
    }
}


function login($rawData, $conn){
    $data = json_decode($rawData, true);

    // $sql = 'SELECT * FROM user WHERE username = :username';
    // $stmt = $conn->prepare($sql);
    // $stmt->bindParam(':username', $data['username']);

    // if ($stmt->execute()) {
    //     // Login successful
    //     if ($stmt->rowCount() > 0) {
    //         $User = $stmt->fetch(PDO::FETCH_ASSOC);

    //         sendResponse(200, "Login successful and id is: {$userId}");
    //     }else{
        
        //         sendResponse(404, "User error");
    //     }
    // } else {
        //     // Error occurred while executing the SQL statement
        //     sendResponse(500, 'Error logging in');
        // }
        
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