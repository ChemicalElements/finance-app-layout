import Hero from "./Hero";

describe("<Hero />", () => {
  beforeEach(() => {
    cy.mount(<Hero />);
  });

  it("should contain a typed component", () => {
    cy.get("[data-cy=hero-typed]").should("exist");
  });

  it("should contain a button", () => {
    cy.get("[data-cy=hero-button]").should("exist");
  });
});
