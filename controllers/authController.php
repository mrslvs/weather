<?php
// require_once ('../includes/getBodyData.php');
function isEmailTaken($email, $conn)
{
    $sql = 'SELECT COUNT(*) FROM user WHERE email = :email';
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':email', $email);
    $stmt->execute();
    $count = $stmt->fetchColumn();
    return $count > 0;
}

function isUsernameTaken($username, $conn)
{
    $sql = 'SELECT COUNT(*) FROM user WHERE username = :username';
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':username', $username);
    $stmt->execute();
    $count = $stmt->fetchColumn();
    return $count > 0;
}

function register($rawData, $conn)
{
    $data = json_decode($rawData, true);
    // echo $data['username'];

    if (isEmailTaken((string) $data['email'], $conn)) {
        sendResponse(409, 'Email already used');
        return;
    }

    if (isUsernameTaken((string) $data['username'], $conn)) {
        sendResponse(409, 'Username taken');
        return;
    }

    $hashed_password = password_hash($data['password'], PASSWORD_DEFAULT);

    $sql = 'INSERT INTO user (username, email, password) VALUES (:username, :email, :password)';
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':username', $data['username']);
    $stmt->bindParam(':email', $data['email']);
    $stmt->bindParam(':password', $hashed_password);

    if ($stmt->execute()) {
        // Registration successful
        sendResponse(201, 'Registration successful');
    } else {
        // Error occurred while executing the SQL statement
        sendResponse(200, 'Error registering user');
    }
}
?>