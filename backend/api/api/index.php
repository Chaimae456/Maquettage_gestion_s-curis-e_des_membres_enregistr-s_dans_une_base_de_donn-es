<?php
// for strict var types
// declare(strict_types = 1);
// for auto load any class on src
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods:  POST,PUT, GET, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: multipart/form-data , Access-Control-Allow-Headers, Authorization, X-Requested-With");

require dirname(__DIR__) ."/vendor/autoload.php";
// calling Error Handler
set_error_handler("ErrorHandler::handleError");
set_exception_handler("ErrorHandler::handleException");
// DOT env i need to create new folder env to keep my data secured 


// url trait 
$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
$part = explode("/" , $path);
$resource = $part[3]; 
$id  = $part[4] ?? null;

$database =new Database("localhost","php_auth_api","root","");
$usergataway = new UsersGataway($database);

$auth = new Auth($usergataway);

    if($resource == "users"){
        $controller = new UsersController($usergataway);
        $controller->progressRequest($_SERVER['REQUEST_METHOD'],$id);
    }else
    {
        http_response_code(400);
        exit;
    }

// data base 





