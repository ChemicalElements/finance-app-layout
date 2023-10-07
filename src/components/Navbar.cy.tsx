import Navbar from "./Navbar";

describe("<Navbar />", () => {
  beforeEach(() => {
    cy.mount(<Navbar />);
  });

  it("should contain a brand", () => {
    cy.get("[data-cy=navbar-brand]").should("exist");
  });

  it("should contain a button", () => {
    cy.get("[data-cy=navbar-button]").should("exist");
  });

  it("should contain a menu", () => {
    cy.get("[data-cy=navbar-menu]").should("exist");
  });
});
