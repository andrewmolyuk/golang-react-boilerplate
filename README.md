# golang-react-boilerplate

This is a project that combines Go on the backend and React with Vite and SWC on the frontend.

## Backend

The backend of this project is built using Go. It provides the necessary APIs and handles the business logic of the application.

## Frontend

The frontend of this project is built using React with Vite and SWC. Vite is used as the build tool, and SWC is used as the JavaScript/TypeScript compiler.

## Getting Started

To get started with this project, follow the steps below:

1. Clone the repository: `git clone https://github.com/andrewmolyuk/golang-react-boilerplate`
2. Navigate to the project directory: `cd golang-react-boilerplate`
3. Initialize the project and install dependencies: `make init`
4. Start the development server: `make dev`

## Commands

### make init

This command is used to initialize the project and install all the necessary dependencies.

### make lint

This command is used to run the linters for both the frontend and backend code, ensuring code quality and consistency.

### make dev

This command is used to start the development server for both frontend and backend applications. It can be used separatelly for each of the projects : `make dev-web` or `make dev-users` for example.

### make tidy

The make tidy command is used to clean up the project by removing any unnecessary files or artifacts. It helps ensure that the project directory is organized and free from clutter. In addition it vendorize all golang projects.

### make upgrade

This command is used to run all dependancies in all projects.

### make build

This command is used to build the project for production.

### make compose-up

This command is used to start the Docker containers defined in the project's Docker Compose file.

### make compose-down

This command is used to stop the Docker containers defined in the project's Docker Compose file.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE.md).
