describe("Login UI", () => {
  it("debe iniciar sesión correctamente", () => {
    cy.visit("http://localhost:3000");
    cy.get("#email").type("luisa@test.com");
    cy.get("#password").type("123456");
    cy.contains("Ingresar").click();
    cy.get("#result").should("contain", "Login exitoso");
  });
});
