import Analytics from "./Analytics";

describe("<Analytics />", () => {
  it("should render", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Analytics />);
  });
});
