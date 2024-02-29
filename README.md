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

## Technologies Used

- React (17+)
- Context API for state management
- Framer Motion for animations
- React Router for page routing
- UUID for unique key generation

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
