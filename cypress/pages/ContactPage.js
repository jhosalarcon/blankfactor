class ContactPage {
  verifyUrl() {
    cy.url().should("include", "/contact/");
  }

  verifyAndLogTitle() {
    cy.title().should("eq", "Contact | Blankfactor");
    cy.title().then((title) => {
      cy.log(`The page title is: "${title}"`);
    });
  }
}

export default new ContactPage();
