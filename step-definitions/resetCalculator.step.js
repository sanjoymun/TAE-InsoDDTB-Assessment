import { Given, When, Then } from "@wdio/cucumber-framework";
import CalculatorPage from "../pageobjects/calculator.page";
import sharedData from "../utils/sharedData";
import cucumberJson from 'wdio-cucumberjs-json-reporter';

When(/^I click on Start over button$/, async () => {
    cucumberJson.attach('Clicking on Start over button to refresh the form');
  await CalculatorPage.clickOnStartOverButton();
});

Then(/^Borrowing Calculator Form should be cleared$/, async () => {

    cucumberJson.attach('Validating Borrowing Calculator form reset');
  await expect(
    CalculatorPage.getYourDetailsSectionButtonByText(
      sharedData.constBorrowCalcDefaultValuesObj.AppType
    )
  ).toHaveAttribute("checked", "true");

  await expect(CalculatorPage.selectNumberOfDependents).toHaveValue(
    sharedData.constBorrowCalcDefaultValuesObj.NumOfDependants
  );

  await expect(
    CalculatorPage.getYourDetailsSectionButtonByText(
      sharedData.constBorrowCalcDefaultValuesObj.PropertyFor
    )
  ).toHaveAttribute("checked", "true");

  await expect(CalculatorPage.inputAnnualIncomeBeforeTax).toHaveValue(
    sharedData.constBorrowCalcDefaultValuesObj.AnnualIncomeBeforeTax
  );
  await expect(CalculatorPage.inputAnnualOtherIncome).toHaveValue(
    sharedData.constBorrowCalcDefaultValuesObj.AnnualOtherIncome
  );
  await expect(CalculatorPage.inputMonthlyLivingExpenses).toHaveValue(
    sharedData.constBorrowCalcDefaultValuesObj.MonthlyLivingExp
  );
  await expect(CalculatorPage.inputMonthlyHomeLoanRepayments).toHaveValue(
    sharedData.constBorrowCalcDefaultValuesObj.MonthlyHomeLoanRepayments
  );
  await expect(CalculatorPage.inputMonthlyOtherLoanRepayments).toHaveValue(
    sharedData.constBorrowCalcDefaultValuesObj.MonthlyOtherLoanRepayments
  );
  await expect(CalculatorPage.inputMonthlyOtherCommitments).toHaveValue(
    sharedData.constBorrowCalcDefaultValuesObj.MonthlyOtherCommitments
  );
  await expect(CalculatorPage.inputTotalCreditCardLimits).toHaveValue(
    sharedData.constBorrowCalcDefaultValuesObj.TotCreditCardLimits
  );

  await expect(CalculatorPage.btnBorrowCalculater).toBeDisplayed();
});
