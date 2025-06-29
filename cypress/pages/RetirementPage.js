class RetirementPage {
  getInnovationSectionTitle() {
    cy.contains("h2", "Powering innovation in retirement services").should(
      "be.visible"
    );
  }

  getThirdTile() {
    cy.contains(
      "h2",
      "Powering innovation in retirement services"
    ).scrollIntoView();

    cy.get(".cards-grid-slider .swiper-slide")
      .eq(2)
      .find(".flip-card-front, .card-text")
      .invoke("text")
      .then((text) => {
        cy.log("Text 3rd tile:", text.trim());
      });
  }

  getLetsGetStartedButton() {
    cy.get("a, button")
      .contains("Let's get started")
      .scrollIntoView()
      .click({ force: true });
  }
}

export default new RetirementPage();
