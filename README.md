# Magic the gathering at Loyaltek

This project was created following Loyaltek's recruitment process.
This app that takes data from (the developers of `Magic the Gathering`) and uses it to create your own Magic the Gathering deck.
This app searches for cards, adds them to your deck, and calculates their average mana cost.
While developing this app, I focused on improving the user experience in card search.
Magic the Gathering API returns about **25** types, **491** subtypes, and **6** supertypes.
To facilitate this search, I customized a reusable **autocomplete component** and used it to make card searches more convenient for users.

## Features

- Search Cards

  - Performs a search using the Name, Set, Type, Supertype, and Subtype properties and displays the results.
  - Name and Set are searched using an input component, and Types, Supertypes and Subtypes are searched using an autocomplete component.

- Add/Remove Cards to the Deck
  - All cards are unique, and you can add or delete them from the Deck by clicking on them.
  - When you add or remove cards from your deck, the interface will be updated by calculating the number of cards in the deck and their average mana cost.
    -If you want to add more than 30 cards to the deck, a notification will pop up to let you know.

## Tech Stacks

- React
- Redux Toolkit
- TailwindCSS

## Installation

To run this application, follow these steps.

1. Make sure node.js and npm are installed on your system.
2. Open a terminal and run the following command:

```bash
  npm install
  npm run dev
```

You can access the app using `http://localhost:5173`

## Test

You can test this application using the following command in the terminal

      npx cypress run
