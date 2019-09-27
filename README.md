# McKinleyrice Assignment
Prerequisite:
You must have npm and node installed on your machine to setup this assignment.

How to setup an assignment:

Use following commands:

npm install

npm start
 
1) This api for creation of user:

Request Url: POST http://localhost:5000/signup

Request Json:
{
    "user_id": 1,
    "username" : "McKenley12345",
    "password": "McKenley",
    "first_name": "Aishwarya",
    "last_name": "Gaud",
    "contact_number": "9096556535"
    }


Response Json:
{
    "message": "user inserted successfully",
    "user": {
        "_id": "5d8e5bb9bff0e556bc499787",
        "user_id": "1",
        "username": "McKenley12345",
        "password": "McKenley",
        "first_name": "Aishwarya",
        "last_name": "Gaud",
        "contact_number": "9096556535",
        "created_at": "2019-09-27T18:58:01.012Z",
        "updated_at": "2019-09-27T18:58:01.013Z",
        "__v": 0
    }
}    
    
    
2) This api is to validate requested user logged in successfully/not

2.1 Testcase :

Request Url: POST http://localhost:5000/login


Request Json:
{
"username" : "McKenley12345",
    "password": "McKenley"
    }
    
    
Response Json:    
{
    "user": {
        "msg": "Login Successfully",
        "user_details": {
            "_id": "5d8e5bb9bff0e556bc499787",
            "user_id": "1",
            "username": "McKenley12345",
            "password": "McKenley",
            "first_name": "Aishwarya",
            "last_name": "Gaud",
            "contact_number": "9096556535",
            "created_at": "2019-09-27T18:58:01.012Z",
            "updated_at": "2019-09-27T18:58:01.013Z",
            "__v": 0
        }
    }
}

    
2.2 Testcase :

Request Url: POST http://localhost:5000/login


Request Json:

{
"username" : "McKenley12345",
    "password": "McKenle1y9090"
    }
    
    
Response Json:    

{
    "message": "Invalid username or password entered"
}

2.3 Testcase :


Request Url: POST http://localhost:5000/login


Request Json:

{
"username" : "McKenley12345"
    }
    
Response Json:    

{
    "err": "Username and Password are required"
}

2.4 Testcase :


Request Url: POST http://localhost:5000/login


Request Json:

{
    }
    
Response Json:    

{
    "err": "Username and Password are required"
}

Note: 

I couldn't understand second api so couldn't create due to time requirement.
