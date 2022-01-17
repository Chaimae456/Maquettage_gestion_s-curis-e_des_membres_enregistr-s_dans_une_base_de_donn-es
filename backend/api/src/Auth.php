<?php 

class Auth
{
    public function __construct(private UsersGataway $usergataway)
    {
    }
    public function authenticateAPIKey():bool
    {
        if (empty($_SERVER["HTTP_X_API_KEY"]))
        {
            http_response_code(400);
            echo json_encode(["message"=>"missing API Key"]);
            return false;
        }
        if($this->usergataway->getByApiKey($_SERVER["HTTP_X_API_KEY"]) === false){
            http_response_code(401);
            echo json_encode(["message"=>"invalid api key"]);
            return false;
        }
        return true;
    }
}