import admin from "../../fixtures/admin.json";
import sel from "../../fixtures/selectors.json";

describe("Movie administration page test", () =>{
    beforeEach(() => {
        cy.fixture("admin.json").as("data");
        cy.visit("/admin/");
    });

    it("Create and delete a new hall", () => {
        cy.login(admin[0].email, admin[0].password);
        cy.get(sel.addHall).click();
        cy.get(sel.hallNameInput).type("New hall");
        cy.get(sel.confirm).click();
        cy.get(sel.firstHall).should("contain", "New hall");
        cy.get(sel.firstHallDelete).click();
        cy.get(sel.confirm).click();
        cy.get(sel.allHalls).should((el) => {
            expect(el).to.have.length(9);
        })
    });
});