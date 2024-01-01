import admin from "../../fixtures/admin.json";
import sel from "../../fixtures/selectors.json";

describe("Movie administration page test", () => {
  beforeEach(() => {
    cy.fixture("admin.json").as("data");
    cy.visit("/admin/");
  });

  it("Login page correct display test", () => {
    cy.get(sel.adminText).should("be.visible");
  });

  it("Should log in", () => {
    cy.login(admin[0].email, admin[0].password);
    cy.get(sel.hallsControl).should("be.visible");
  });

  it("Should throw an error if email or password incorrect", () => {
    cy.login(admin[1].email, admin[1].password);
    cy.get("body").should("contain", "Ошибка авторизации");
  });

  it("Should book seats", () => {
    cy.login(admin[0].email, admin[0].password);
    cy.get(sel.zver)
      .invoke("text")
      .then((text) => {
        console.log(text);
        cy.visit("https://qamid.tmweb.ru");
        cy.get(sel.tu).click();
        cy.get(sel.firstMovieTitle).should("have.text", text);
      });
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
