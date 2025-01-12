# Uber Backend API Documentation

## Endpoints

### POST /users/register

#### Description
This endpoint is used to register a new user.

#### Request Body
The request body must be a JSON object containing the following fields:
- `firstName` (string, required): The first name of the user. Must be at least 3 characters long.
- `lastName` (string, optional): The last name of the user. Must be at least 3 characters long if provided.
- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user. Must be at least 6 characters long.

#### Example Request
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### Responses

- **201 Created**
  - **Description**: User successfully registered.
  - **Body**: A JSON object containing the authentication token and user details.
  - **Example**:
    ```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "user": {
        "_id": "60c72b2f9b1e8b001c8e4d5a",
        "fullName": {
          "firstName": "John",
          "lastName": "Doe"
        },
        "email": "john.doe@example.com",
        "password": "$2b$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36Zf4aWl1/2e",
        "socketId": null
      }
    }
    ```

- **400 Bad Request**
  - **Description**: Invalid input data.
  - **Body**: A JSON object containing the validation errors.
  - **Example**:
    ```json
    {
      "errors": [
        {
          "msg": "Invalid email",
          "param": "email",
          "location": "body"
        },
        {
          "msg": "First name must have at least 3 characters",
          "param": "firstName",
          "location": "body"
        },
        {
          "msg": "Password must have at least 6 characters",
          "param": "password",
          "location": "body"
        }
      ]
    }
    ```

- **500 Internal Server Error**
  - **Description**: An error occurred on the server.
  - **Body**: A JSON object containing the error message.
  - **Example**:
    ```json
    {
      "message": "An error occurred while processing your request."
    }
    ```

### POST /users/login

#### Description
This endpoint is used to log in an existing user.

#### Request Body
The request body must be a JSON object containing the following fields:
- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user. Must be at least 6 characters long.

#### Example Request
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### Responses

- **200 OK**
  - **Description**: User successfully logged in.
  - **Body**: A JSON object containing the authentication token and user details.
  - **Example**:
    ```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "user": {
        "_id": "60c72b2f9b1e8b001c8e4d5a",
        "fullName": {
          "firstName": "John",
          "lastName": "Doe"
        },
        "email": "john.doe@example.com",
        "password": "$2b$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36Zf4aWl1/2e",
        "socketId": null
      }
    }
    ```

- **400 Bad Request**
  - **Description**: Invalid input data.
  - **Body**: A JSON object containing the validation errors.
  - **Example**:
    ```json
    {
      "errors": [
        {
          "msg": "Invalid email",
          "param": "email",
          "location": "body"
        },
        {
          "msg": "Password must have at least 6 characters",
          "param": "password",
          "location": "body"
        }
      ]
    }
    ```

- **500 Internal Server Error**
  - **Description**: An error occurred on the server.
  - **Body**: A JSON object containing the error message.
  - **Example**:
    ```json
    {
      "message": "An error occurred while processing your request."
    }
    ```
