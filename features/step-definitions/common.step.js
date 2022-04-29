import { Given,When,Then, DataTable } from "@wdio/cucumber-framework";
import CalculatorPage from "../pageobjects/calculator.page";

Given(/^I am on the Borrowing Estimate Calculator page$/, async () => {

    CalculatorPage.openCalculatorPage("personal/home-loans/calculators-tools/much-borrow/");

    //CalculatorPage.btnApplicationTypeSingle.waitForDisplayed({timeout:30000}); //,1000,false,"Home page not loaded within 30s"
    //const AppTypeS = await CalculatorPage.btnApplicationTypeSingle.getAttribute('value').then((val) => {console.log(val);return val;});
    //console.log("AppType:",AppTypeS);

    expect(CalculatorPage.btnApplicationTypeSingle).toHaveAttribute('checked','true');
  

});

When(/^I give below inputs$/, async (table) => {
    await CalculatorPage.enterDetailsInBorrowingCalculator(table);
});