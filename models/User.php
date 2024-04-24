<?php

function isUsernameTaken($username, $conn)
{
    $sql = 'SELECT COUNT(*) FROM user WHERE username = :username';
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':username', $username);
    $stmt->execute();
    $count = $stmt->fetchColumn();
    return $count > 0;
}

function isEmailTaken($email, $conn)
{
    $sql = 'SELECT COUNT(*) FROM user WHERE email = :email';
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':email', $email);
    $stmt->execute();
    $count = $stmt->fetchColumn();
    return $count > 0;
}

function register($username, $email, $password, $conn)
{
    isUsernameTaken((string) $email, $conn);
    isUsernameTaken((string) $username, $conn);
}
?>