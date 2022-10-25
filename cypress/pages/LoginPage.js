class homeSaucePage {
  elements = {
    loginMouseHover: () => cy.get(':nth-child(2) > .dropdown-toggle'),
    usernameInput: () => cy.get('.dropdown-menu > form > :nth-child(2) > .form-control'),
    passwordInput: () => cy.get(':nth-child(3) > .form-control'),
    loginBtn: () => cy.get(':nth-child(5) > .btn'),
    errorMessage: () => cy.get('h3[data-test="error"]'),
  };

  pressLoginBtn() {
    this.elements.loginMouseHover().trigger("mouseover");
    this.elements.loginMouseHover().should('be.visible');
    this.elements.loginMouseHover().click();
  }

  typeUsername(username) {
    this.elements.usernameInput().type(username);
  }

  typePassword(password) {
    this.elements.passwordInput().type(password);
  }

  clickLogin() {
    this.elements.loginBtn().click();
  }
}

module.exports = new homeSaucePage();
