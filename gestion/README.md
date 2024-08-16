
# React Quiz App

![image](https://github.com/user-attachments/assets/842df3b8-23fd-4417-953f-abf51cf40b48)

## Overview
This React application is a simple quiz app that displays questions to users, tracks their answers, and shows the final score upon completion. It uses state management to handle the current question, the user's score, and the display of results.

![image](https://github.com/user-attachments/assets/470cf12b-b62a-4da3-a6be-15e3256f0230)

![image](https://github.com/user-attachments/assets/d570f200-d465-45ef-9616-80051a455606)

## State Management

- **`currentQuestion`**: Tracks the index of the current question being displayed.
- **`showScore`**: Controls whether the final score should be shown or not.
- **`score`**: Keeps track of the number of correct answers.

## Key Functions

- **`handleAnswerOptionClick`**:
  - **Purpose**: Handles user clicks on answer options.
  - **Functionality**:
    - Increments the score if the selected answer is correct.
    - Moves to the next question if available.
    - Displays the final score if there are no more questions.

## Quiz Data (Tafem File JSON)

The quiz data is structured in a JSON file, typically named `questions.json`, which includes an array of questions. Each question object contains:
- **`questionText`**: The text of the question.
- **`answerOptions`**: An array of answer options, each with:
  - **`answerText`**: The text of the answer option.
  - **`isCorrect`**: A boolean indicating if the answer is correct.

Example structure:
```json
[
  {
    "questionText": "What is the capital of France?",
    "answerOptions": [
      { "answerText": "Paris", "isCorrect": true },
      { "answerText": "London", "isCorrect": false },
      { "answerText": "Berlin", "isCorrect": false },
      { "answerText": "Madrid", "isCorrect": false }
    ]
  }
]
```

## Usage

1. **Setup**: Clone the repository and install dependencies using `npm install`.
2. **Run**: Start the application with `npm start`.
3. **Interact**: Answer questions to progress through the quiz and view your score at the end.
