# Node.js + MongoDB User API

Following the assignment guidelines, the rationale was to build a simple and easy-to-understand codebase, fully containerized with Docker for quick setup.  
The solution was designed as a plug-and-play microservice that can be reused with other databases by simply changing the host configuration in the `.env` file.  
It validates user IDs, retrieves user details only when the age is greater than 21, and returns a unified 404 response if the user is not found or under the age limit.

Usage:

docker compose build <br>
docker compose up -d <br>
curl http://localhost:3333/users/64f1a0b1234567890abc0001 (terminal) or http://localhost:3333/users/64f1a0b1234567890abc0001 (web browser)


