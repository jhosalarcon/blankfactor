# Blankfactor

This project contains an automated test suite using Cypress and Cucumber to validate user interactions on the [Blankfactor](https://blankfactor.com) website.

---

## Test scenario

The automation performs the following steps:

1. Navigate to “http://blankfactor.com”. Accept our policy.
2. Navigate to Industries and open the Retirement and Wealth section
3. Scroll down until the section “Powering innovation in retirement services” and copy the text from the 3rd tile in the section (AI & Machine learning) by hovering it with the mouse.
4. Scroll to the bottom of the page and click on the "Let's get started" button.
5. Once the page is loaded, verify the page URL and the title.
6. Print the text from the title.

---

## Project structure

```
blankfactor/
├── cypress/
│   ├── e2e/
│   │   ├── features/
│   │   │   └── blankfactor.feature  <-- (Our Gherkin file goes here)
│   │   └── step_definitions/
│   │       └── blankfactor.steps.js <-- (The implementation of the steps)
│   ├── pages/
│   │   ├── HomePage.js              <-- (POM for the main page)
│   │   ├── RetirementPage.js        <-- (POM for the Retirement page)
│   │   └── ContactPage.js           <-- (POM for the contact page)
│   └── support/
│       ├── commands.js
│       └── e2e.js
├── node_modules/
├── cypress.config.js
├── package.json
└── README.md
```

---

## Installation


1. **Clone or unzip** this project
2. Navigate into the project folder

```bash
cd blankfactor
```

3. Install dependencies

```bash
npm install
```

4. Download Cypress binary

```bash
npx cypress install
```

---

## Run the tests

Open the Cypress Test Runner:

```bash
npx cypress open
```

Then, select the `.feature` file to run the scenario in the UI.

Alternatively, run it in headless mode:

```bash
npx cypress run --e2e
```

---

## Tech Stack

- Cypress `v13.11.0`
- Cucumber Preprocessor `@badeball/cypress-cucumber-preprocessor@20.0.5`
- bahmutov/esbuild-preprocessor `^2.2.0`

---

## Author

Jhosmary Alarcón
