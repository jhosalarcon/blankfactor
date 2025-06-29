import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../pages/HomePage";
import RetirementPage from "../../pages/RetirementPage";
import ContactPage from "../../pages/ContactPage";

Given("I navigate to the Blankfactor homepage and accept the policies", () => {
  cy.viewport(1280, 800);
  HomePage.visit();
  HomePage.acceptPolicy();
});

When(
  'I navigate to the "Retirement and Wealth" section from the industries menu',
  () => {
    HomePage.hoverIndustriesMenu();
    HomePage.clickRetirementAndWealth();
  }
);

When(
  'I scroll to the "Powering innovation in retirement services" section',
  () => {
    RetirementPage.getInnovationSectionTitle();
    cy.wait(500);
  }
);

When("I extract the text from the third innovation tile", () => {
  RetirementPage.getThirdTile();
});

When(
  'I scroll to the bottom of the page and click the "Let\'s get started" button',
  () => {
    RetirementPage.getLetsGetStartedButton();
  }
);

Then("the contact page loads correctly", () => {
  ContactPage.verifyUrl();
});

Then("the title text of the contact page is printed to the console", () => {
  ContactPage.verifyAndLogTitle();
});
