describe("E2E Test", () => {
  it("Visits the Home Page and Check search properties", async () => {
    cy.visit("/"); // Visit your application URL

    cy.get("[data-cy=search-input]").should("exist"); // Check if there is an search input
    cy.get("[data-cy=search-btn]").should("exist"); // Check search button
  });

  it("Perform search actions", async () => {
    cy.visit("/"); // Visit your application URL

    cy.get("[data-cy=search-input]").clear().type("dromoka captain"); // Input search keyword
    cy.get("[data-cy=search-btn]").click();
    cy.get("[data-cy=dromoka captain-deck]").should("exist"); // Check search result
    cy.get("[data-cy=dromoka captain-card-add-btn").click(); // Click add card button
    cy.get("[data-cy=card-amount]").should("eq", "1"); // Check if there is an increasment from card amount
    cy.get("[data-cy=average-mana-cost]").should("eq", "3.00"); // Check average mana cost
    cy.get("[data-cy=dromoka captain-deck]").should("not.exist"); // Check if the clicked deck is moved to mycard page
    cy.get("data-cy=my-card-btn").click();
    cy.url().should("eq", "http://localhost:5173/mycard");
    cy.get("[data-cy=dromoka captain-deck]").should("exist");
  });
});
