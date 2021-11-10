> Write test cases which test the following actions/checks:
> - [x] check GET
> - [x] check POST
> - [x] check DELETE
> - [x] check authentication
> - [x] check query parameters: mandatory, optional
> - [x] check schema

# Test cases

## Precondition
1. **Given** the API key is set for all requests

## `TC-1` A movie can be retrieved by ID
1. **Given** the {movie_id} is added to the GET request
1. **When** the "GET movie by id" request is sent
1. **Then** the response should contain status code 200

## `TC-2` The retrieved movie has proper schema
1. **Given** the {movie_id} is added to the GET request
1. **When** the "GET movie by id" request is sent
1. **Then** the response should contain the proper movie title
1. **And** the response should have proper schema

## `TC-3` A rating can be added to a movie
1. **Give** the {movie_id} is added to the POST request
1. **And** the {"value": 8.0} is added to the POST request's body
1. **When** the "POST movie rating" request is sent
1. **Then** the response should contain status code 201

## `TC-4` The movie rating should return proper error message
1. **Give** the {movie_id} is added to the POST request
1. **And** the {"value": 8.0} is added to the POST request's body
1. **When** the "POST movie rating" request is sent
1. **Then** the response should contain the "Success." status message

## `TC-5` Invalid rating cannot be added to a movie
1. **Give** the {movie_id} is added to the POST request
1. **And** the {"value": 10.1} is added to the POST request's body
1. **When** the "POST movie rating" request is sent
1. **Then** the response should contain the proper status message

## `TC-6` Movie rating can be deleted
1. **Given** the {movie_id} is added to the DELETE request
1. **When** the "DELETE movie rating by id" request is sent
1. **Then** the response should contain status code 200

## `TC-7` Proper status message should be returns when rating is deleted
1. **Given** the {movie_id} is added to the DELETE request
1. **When** the "DELETE movie rating by id" request is sent
1. **Then** the response should contain the "The item/record was deleted successfully." status message

## `TC-8` Missing ID should be handled properly
1. **Given** the {movie_id} is not added to the GET request
1. **When** the "GET movie by id" request is sent
1. **Then** the response should contain status code 404
