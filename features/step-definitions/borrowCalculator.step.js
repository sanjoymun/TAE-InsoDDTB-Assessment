import { ANDROID_CONFIG } from "@wdio/cli/build/constants";
import { Given,When,Then } from "@wdio/cucumber-framework";
import CalculatorPage from "../pageobjects/calculator.page";


When(/^I click on Work out how much I could borrow button$/, async () => {
    await CalculatorPage.clickOnHowMuchICouldBorrowButton();
});

Then(/^I should see has a borrowing estimate of (.*)$/, async (amount) => {
    await browser.waitUntil(
        async () => (await $(".borrow__result__action > span").getAttribute('aria-live')) === "assertive",{timeout: 10000,timeoutMsg: "expected text is different after 10s"}
      );
    (await CalculatorPage.txtHomeLoanBorrowStaticText).scrollIntoView();
    const actualBorrowAmount = await CalculatorPage.txtHomeLoanBorrowAmount.getText().then((val) => {console.log(val);return val;});
    console.log("Eligible Borrowing Amount:",actualBorrowAmount,"expected amount",amount);
    await expect(CalculatorPage.txtHomeLoanBorrowAmount).toHaveText(amount);
});