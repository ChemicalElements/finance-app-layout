import Newsletter from "./Newsletter";

describe("<Newsletter />", () => {
  beforeEach(() => {
    cy.mount(<Newsletter />);
  });

  it("should contain a form", () => {
    cy.get("form").should("exist");
  });
});
