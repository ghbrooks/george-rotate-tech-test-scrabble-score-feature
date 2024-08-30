# George's Tech Test Notes

Not a completed project, but the main functionality exists.
To see a local version running:
-Clone the repo and this branch
-Make sure the environment is as per the 'Using this project' section of these docs
-Install the dependencies with yarn
-Run `yarn run dev`

# Using this project

Clone the project, change into the directory and install the dependencies.

Please use
node version

```
16.0.0
```

yarn version

```
1.22.19
```

Install dependencies

```bash
yarn
```

create a .env file

```bash
touch .env
```

Run the project

```bash
yarn dev
```

# The task

# Time Expectation:

We don't expect you to spend more than 1.5 hours on this test. Please commit your work regularly so that we can see your thought process, and we look forward to discussing your approach during the review.

# Task 1: Create a Scrabble Score API (Node.js)

Objective:
Develop a RESTful API within an existing Node.js backend (which is part of a monorepo) to compute the Scrabble score for a given word.

Monorepo Context:
The monorepo already contains a Node.js backend and a React frontend.
You will add your new API endpoint to the existing backend.

## Requirements:

How this api should work:
Create an api that accepts a word and calculates the score.
[What is scrabble?](https://en.wikipedia.org/wiki/Scrabble)
As an example, the api should accept a word like "cabbage" and this should return a score worth 14 points:

The logic:
3 points for C
1 point for A, twice
3 points for B, twice
2 points for G
1 point for E
And to total:

3 + 2*1 + 2*3 + 2 + 1
= 3 + 2 + 6 + 3
= 5 + 9
= 14

API Endpoint:
Method: POST
Endpoint URL: /api/scrabble-score
Input: A JSON object containing the word.

```json
{
  "word": "example"
}
```

Output: A JSON object containing the computed score.

```json
{
  "score": 18
}
```

Implementation Details:

Backend Technology: Use Node.js (Express, fastify) for implementing the API.
Letter Values: Use the Scrabble letter values provided:

A, E, I, O, U, L, N, R, S, T = 1

D, G = 2

B, C, M, P = 3

F, H, V, W, Y = 4

K = 5

J, X = 8

Q, Z = 10

Edge Cases:
Ensure the API handles case insensitivity (e.g., "Cabbage" and "cabbage" should return the same score).
Return an error message if the input word contains non-alphabetic characters.
Handle empty or null input by returning an appropriate error message.

Monorepo Integration:
Folder Structure: Add your API logic under the existing backend folder structure.
Routing: Integrate the new /api/scrabble-score route into the current routing setup.
Configuration: Ensure any necessary configurations, such as environment variables or middleware, are correctly set up to support your API.
Error Handling: Ensure that your API follows the existing error-handling patterns used in the backend.

Testing:
If time permits, write unit tests for the API endpoint using a testing framework like Jest, or similar.
Include tests for edge cases, such as input with special characters, numbers, or mixed case.

Documentation:
Update the monorepo's main README or backend-specific README to include instructions on how to use the new API endpoint.
Provide example API requests and responses.

Commit Regularly:
As you work through this task, please commit regularly to the repository. These commits will help us understand your approach, thought process, and how you manage your time. Even if you don't fully complete the task, we'll be able to see your progress and how you tackled the problem.

# Task 2: Connect the React Frontend to the Scrabble Score API

Objective:
Extend the existing React frontend to interact with the newly created Scrabble Score API, allowing users to input words and view their corresponding Scrabble scores.

Monorepo Context:
The frontend is part of the same monorepo and is already set up with basic functionality.

## Requirements:

Frontend UI:
Extend the existing UI to include a form with an input field and a submit button.
Allow users to type a word into the input field and submit it to the new /api/scrabble-score API endpoint.
Functionality:

On submitting the form, send a POST request to the /api/scrabble-score endpoint.
Capture the API response and display the word and its score in a table below the form.
Ensure the table updates dynamically to show a history of all submitted words and their corresponding scores.

Implementation Details:
React Components: Modify or create new components as needed to handle the form submission and table rendering.
State Management: Use React's state management to manage the state of the word-score pairs. Ensure the form resets after submission and the new entry is added to the table.
Error Handling: Implement user-friendly error messages if the API returns an error (e.g., invalid input). Prevent form submission for empty strings or non-alphabetic characters.

Styling:
Go wild, this is your chance to show us your design flare. You have creative freedom.
Ensure the UI is responsive and maintains a consistent look and feel with the rest of the application.

Testing:
If time permits, write unit tests for the new React components, particularly focusing on the form submission and table rendering logic.
Monorepo Integration:

Ensure that the new frontend functionality follows the existing project structure and coding standards.
Update the monorepo's build and deployment scripts (if necessary) to account for the new functionality.

Commit Regularly:
Please continue to commit regularly while working on the frontend portion. We want to see how you integrate with the existing codebase, manage your time, and resolve any challenges you encounter.

Deliverables:
Commit your changes to the existing monorepo in a branch named scrabble-score-feature.
Ensure that all code follows the project's linting and formatting guidelines.
Update the monorepo README with details about the new feature, including how to run and test it locally.
This test assesses your ability to work within an existing codebase, integrate new features into a Node.js backend, and connect those features to a React frontend. The focus is on how you approach the problem within the given time frame, so commit regularly, and don't worry if you can't complete every detail. We look forward to discussing your work in the follow-up review.
