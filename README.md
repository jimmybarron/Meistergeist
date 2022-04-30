![logo](https://raw.githubusercontent.com/jimmybarron/mastermind/2ebf9fb985a09a4bcb84699d1ab7d76a205c1db1/public/logo192.png?token=GHSAT0AAAAAABQZJF2O3MIDXGUAM6CPMNDKYTMUI2A)

# [The game can be played here](https://meistergeist.netlify.app/)

# Meistergeist

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) using React Hooks. Meistergeist is 'Mastermind' in German, the game created here. The design was inspired by the Bauhaus art style.

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

You can also click the above link to play it on a hosted Netlify site.

## State Structure

All state is saved in 'App' with the exception of a controlled input and a random number variable.

## Random Number API

A fetch request is issued and the response is turned into a string called 'secretCode' and saved in state.

## Input & Errors

A controlled component input sends 'guess', and the 'secretCode' to 'checkGuess' to be evaluated and validated.\
If it's not correct, 'guess' is evaluated for how many digits are correct and of what type, eg. 'numMatch' and 'numAndPosMatch'. The result, a 'guessAttempt' is outputted as an object into the 'guesses' state. If a guess is submitted with less than 4 characters a message is shown.

## Guess & GuessAttempts

The 'guessAttempts' component maps through the past guesses and outputs JSX with UI feedback called 'Markers'. The markers correspond to the number of 'numMatch'(white circles) and 'numAndPosMatch'(black circles) in each guess. To avoid giving hints, the markers are randomized by concatenating two arrays of JSX of all the markers, and shifting the resulting array a random number of times.

## Win / Lose Announcements

If the guess matches, the 'win' stats is triggered and 'GuessInput' is hidden, and 'ResetButton' is shown. If 9 attempts are made without 'win' being triggered, win is set to 'false'. The 'Announcement' component handles design and text changes based on win conditions, as well as the animated "progress bar" background.

## UI Animations

Interaction animations are based off of conditionals and driven using the [Framer Motion library](https://github.com/framer/motion).

[The Figma designs I created and inspiration can viewed here.](https://www.figma.com/file/vq8WrHnOpdjM16KDK1xke0/Meistergeist?node-id=0%3A1)
