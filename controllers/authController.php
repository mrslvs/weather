<?php
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

function register($username, $email, $password, $conn)
{
    if (isEmailTaken((string) $email, $conn)) {
        sendResponse(409, 'Email already used');
        return;
    }

    if (isUsernameTaken((string) $username, $conn)) {
        sendResponse(409, 'Username taken');
        return;
    }

    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    $sql = 'INSERT INTO user (username, email, password_hash) VALUES (:username, :email, :password_hash)';
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':username', $username);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':password_hash', $hashed_password);

    if ($stmt->execute()) {
        // Registration successful
        sendResponse(200, 'Registration successful');
    } else {
        // Error occurred while executing the SQL statement
        sendResponse(500, 'Error registering user');
    }
}
?>