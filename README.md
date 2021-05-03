# Internet Resource Registration Data webapp
This is an app with a node.js Express backend, and a React-Bootstrap frontend, both written in Typescript.

It is made to retrieve information on Internet Resource Registrations, based on IP (both v4 and v6) addresses/ranges.

Transpilation from TypeScript to JavaScript is handled automatically by docker containers, which are also used to run the frontend and backend.

Finally, at the root of this repository, is a docker-compose.yml file, which can be used to start both containers in parellel.

To build, install and start the webapp's containers, install docker-compose, clone this repository, enter the folder, and type ```docker-compose up``` in a terminal.

Then, to access the webapp, go to localhost:8080. The backend is on port 8081.