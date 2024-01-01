import sel from "../../fixtures/selectors.json";

describe("Movie page book a seat", () => {
    beforeEach(() => {
      cy.visit("/");
    });
  
    it("Should book a seat", () => {
      cy.get(sel.title).should("be.visible");
      cy.get(sel.tu).click();
      cy.get(sel.seanceTime).contains("00:00").click();
      const seats = require("../../fixtures/seats.json");
    seats.forEach((seat) => {
      cy.get(
        `.buying-scheme__wrapper > :nth-child(${seat.row}) > :nth-child(${seat.seat})`
      ).click();
    });
    cy.get(sel.accept).should("have.prop", "disabled", false);
    });
  });