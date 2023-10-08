import Footer from "./Footer";

describe("Footer", () => {
  beforeEach(() => {
    cy.mount(<Footer />);
  });

  it("should contain a footer", () => {
    cy.get("footer").should("exist");
  });
});
