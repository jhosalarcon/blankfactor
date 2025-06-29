class HomePage {
  visit() {
    cy.visit("https://blankfactor.com/");
  }

  acceptPolicy() {
    cy.get(
      'button[aria-label="Accept Cookies"], button:contains("Accept"), .cookie-policy__button')
      .first()
      .click({ force: true });
  }

  hoverIndustriesMenu() {
    cy.get("#menu-main-menu")
      .contains("Industries")
      .should("be.visible")
      .trigger("mouseover");
  }

  clickRetirementAndWealth() {
    cy.contains("a", "Retirement and wealth", { timeout: 10000 }).click({
      force: true,
    });
    cy.url().should("include", "/industries/retirement-and-wealth/");
    cy.scrollTo(0, 500);
    cy.contains("Powering innovation in retirement services").should(
      "be.visible"
    );
  }
}

export default new HomePage();
