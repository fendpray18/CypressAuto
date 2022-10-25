// {/* <reference types="Cypress" /> */}

class homeZurichPage {
  elements = {
    ZurichTextHome: () => cy.get('.offers-wrapper > h3')
  };

  validateZurichHome() {
    this.elements.ZurichTextHome().should('have.text',"Bersama Asuransi Perjalanan Dari Zurich");
  }
}

module.exports = new homeZurichPage();
