import { Given,When,Then } from "@wdio/cucumber-framework";
import CalculatorPage from "../pageobjects/calculator.page";


When(/^I click on Start over button$/, async(  ) => {
    await CalculatorPage.clickOnStartOverButton();
} );

Then(/^Borrowing Calculator Form should be cleared$/, async(  ) => {
        
    //let propertyVal = await CalculatorPage.btnApplicationTypeSingle.getAttribute('checked').then((res) => {console.log(res);return res;}); 
    //console.log("App Type Default Selection Property:",propertyVal);
    await expect(CalculatorPage.btnApplicationTypeSingle).toHaveAttribute('checked','true');
        
    //propertyVal = await CalculatorPage.btnBorrowTypeHome.getAttribute('checked').then((res) => {console.log(res);return res;}); 
    //console.log("Borrower Home Type Default Selection Property:",propertyVal);
    await expect(CalculatorPage.btnBorrowTypeHome).toHaveAttribute('checked','true');

    await expect(CalculatorPage.btnBorrowCalculater).toBeDisplayed();
} );

