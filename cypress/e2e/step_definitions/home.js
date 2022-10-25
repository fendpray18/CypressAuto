import {
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
const homePage = require("../../pages/HomePage");

Given("A user opens a travellin website", () => {
  cy.visit("/");
});
When("The intial text {string} is displayed", (ZurichTextsHome) => {
  homePage.elements.ZurichTextHome().should("have.text", ZurichTextsHome);
});
