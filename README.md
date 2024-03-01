# Feedback UI React Application

### By Moses Atia

This project is a Feedback UI application built with React. It allows users to leave feedback for a service or product with a rating and comments. The application features a clean and intuitive user interface and uses context to manage state within the application.

## Live Demo

To check out a live demo of the application [click here](https://feedback-app-m-a.netlify.app/)

## Features

- Submit feedback with a rating out of 10.
- View a list of all feedback received.
- View average rating from all feedback.
- Edit and delete feedback from the list.

## Installation

To get this project up and running on your local machine, follow these steps:

1. Clone the repository to your local machine.
   ```
   git clone https://github.com/your-username/feedback-app.git
   ```
2. Navigate to the project directory.
   ```
   cd feedback-app
   ```
3. Install the required npm packages.
   ```
   npm install
   ```
4. Start the development server.
   ```
   npm start
   ```

## Running the Local Version with Mock Database

The online demo does not include a database connection for data persistence. However, the local version you download from this repository includes a mock local server using `json-server` dependency, providing full CRUD functionality to create, read, update, and delete feedback data stored in a mock database (`db.json` located in the root directory).

To run the local version with the mock database:

1. Ensure you have `json-server` installed globally. If not, install it using npm:
   ```
   npm install -g json-server
   ```
2. Start the `json-server` on port 8000 (or any port of your choice):
   ```
   json-server --watch db.json --port 8000
   ```
3. In a separate terminal, start the React development server as described in the installation steps.
4. Alternatively, you can run both servers (localhost:3000 (UI) and localhost:8000 (DB)) using the command:
   ```
   npm run dev
   ```

This setup allows you to interact with the mock database while using the application locally.

## Technologies Used

- React (17+)
- Context API for state management
- Framer Motion for animations
- React Router for page routing
- UUID for unique key generation
- `json-server` for a local mock database

## Project Structure

- `App.js`: The main application component that sets up routing and context.
- `FeedbackList`: A component to render a list of feedback items.
- `FeedbackStats`: A component to display statistics about the feedback (e.g., average rating).
- `FeedbackForm`: A form component to submit new feedback.
- `AboutPage`: A static component that displays information about the application.
- `FeedbackContext`: The context provider for our application state.
- `AboutIconLink`: A component that provides a link to the About page.

## Usage

- The home page presents the user with an option to rate the service and leave a review.
- Submitted reviews are displayed below with the option to delete.
- The statistics component calculates and displays the average rating and total number of reviews.

## Contributing

Contributions to improve the application are welcome. Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgements

- Brad Traversy for the excellent tutorial on React ("React Front to Back" on Udemy).
