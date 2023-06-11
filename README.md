# JavaScript Quiz Game

A simple quiz game built with HTML, CSS, and JavaScript. Test your knowledge with a series of questions and see if you can achieve a high score!

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
- [Gameplay](#gameplay)
- [High Scores](#high-scores)
- [Sources](#sources)

## Features
- Multiple-choice questions with options
- Timer countdown for each question
- Score calculation based on the time taken to answer the questions
- Saving and displaying high scores with user initials

## Getting Started
1. Clone the repository or download the source code files.
2. Open the `index.html` file in a web browser.

## Gameplay
1. Click the "Start" button to begin the quiz.
2. Read the question and select an answer by clicking on the provided options.
3. The next question will appear automatically after choosing an answer.
4. The timer at the bottom of the answers on the screen shows the remaining time to complete the quiz.
5. The quiz ends when all the questions are answered or the timer reaches 0.
6. The final score will be displayed along with a form to enter initials for saving the score.
7. The final score is equal to the ammount of time remaining.

## High Scores
- The high scores are saved and displayed in descending order, with the highest score at the top.
- Only the top 10 scores are saved, and lower scores are discarded.
- Each time a user completes the quiz and saves their score, their initials and score are added to the high scores list.
- The high scores list is persisted using local storage, so the scores will be retained even if the page is refreshed or reopened.

## Sources

This is a list containing anything that was looked up in order to create the code. Any code not made by myself is cited.

-https://simplestepscode.com/javascript-quiz-tutorial/
-https://www.w3schools.com/html/tryit.asp?filename=tryhtml_lists_unordered_none
