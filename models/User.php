<?php
require_once './includes/response.php';

class User
{
    private $id;
    private $username;
    private $email;

    private $password;

    public function __construct($id, $username, $email, $password)
    {
        $this->id = $id;
        $this->username = $username;
        $this->email = $email;
        $this->password = $password;
    }

    public function getId()
    {
        return $this->id;
    }

    public function getUsername()
    {
        return $this->username;
    }

    public function getEmail()
    {
        return $this->email;
    }

    public function getPassword(){
        return $this->password;
    }

    public function setUsername($username)
    {
        $this->username = $username;
    }

    public function setEmail($email)
    {
        $this->email = $email;
    }

    public function setPassword($password){
        $this->password = $password;
    }

    public static function getUserByUsername($username, $conn){
        $sql = 'SELECT * FROM user WHERE username = :username';
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':username', $username);

        if ($stmt->execute()) {
            if ($stmt->rowCount() > 0) {
                // username exists
                $userData = $stmt->fetch(PDO::FETCH_ASSOC);
                return new User($userData['id'], $userData['username'], $userData['email'], $userData['password']);
            }else{
                // username does not exist
                return null;
            }
        } else {
            // Error occurred while executing the SQL statement
            return 500;
        }
    }
}

?>