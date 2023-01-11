# st-backend

Here is the API documentation for the /traveller endpoint:

GET /traveller
This endpoint retrieves a list of all travellers in the system.

Parameters: None

Response:

200 OK: The request was successful and the list of travellers was returned.

GET /traveller/:id

This endpoint retrieves a specific traveller by their ID.

Parameters:

id: The ID of the traveller to retrieve.

Response:

200 OK: The request was successful and the traveller was returned.
404 Not Found: No traveller was found with the specified ID.

POST /traveller/register

This endpoint creates a new traveller in the system.

Parameters:

first_name: The first name of the traveller.

last_name: The last name of the traveller.

email: The email address of the traveller.

date: The date of birth of the traveller.

address: The address of the traveller.

phone_number: The phone number of the traveller.

city: The city where the traveller lives.

password: The password for the traveller's account.

Response:

201 Created: The request was successful and the traveller was created.

POST /traveller/login

This endpoint logs a traveller into the system.

Parameters:

email: The email address of the traveller.

password: The password for the traveller's account.

Response:

200 OK: The request was successful and the traveller was logged in.
401 Unauthorized: The email and password combination was invalid.

PUT /traveller/:id

This endpoint updates a specific traveller by their ID.

Parameters:

id: The ID of the traveller to update.

first_name: The updated first name of the traveller.

last_name: The updated last name of the traveller.

email: The updated email address of the traveller.

date: The updated date of birth of the traveller.

address: The updated address of the traveller.

phone_number: The updated phone number of the traveller.

city: The updated city where the traveller lives.

password: The updated password for the traveller's account.

Response:

200 OK: The request was successful and the traveller was updated.
404 Not Found: No traveller was found with the specified ID.

DELETE /traveller/:id

This endpoint deletes a specific traveller by their ID.

Parameters:

id: The ID of the traveller to delete.

Response:

200 OK: The request was successful and the traveller was deleted.
404 Not Found: No traveller was found with the specified ID.

[backend](https://smart-traveller.deta.dev/)
