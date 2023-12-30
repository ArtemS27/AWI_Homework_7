import sel from "../../fixtures/selectors.json";

describe("Movie page correct display", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should open page", () => {
    cy.get(sel.title).should("be.visible");
  });

  it("Should show correct number of days", () => {
    cy.get(sel.days).should("have.length", 7);
  });
});
