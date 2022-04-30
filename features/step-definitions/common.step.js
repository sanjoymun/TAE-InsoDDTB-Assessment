import { Given, When, Then, DataTable } from "@wdio/cucumber-framework";
import CalculatorPage from "../pageobjects/calculator.page";
import cucumberJson from "wdio-cucumberjs-json-reporter";

Given(/^I am on the Borrowing Estimate Calculator page$/, async () => {
  cucumberJson.attach(
    "Launching browser and navigating to Borrowing Estimate Calculator Page"
  );

  CalculatorPage.openCalculatorPage(
    "personal/home-loans/calculators-tools/much-borrow/"
  );

  cucumberJson.attach(
    "Validating Borrowing Estimate Calculator page's existance"
  );

  expect(
    CalculatorPage.getYourDetailsSectionButtonByText("Single")
  ).toHaveAttribute("checked", "true");
});

When(/^I give below inputs$/, async (table) => {
  cucumberJson.attach("Giving inputs in the Borrowing Calculator page");

  await CalculatorPage.enterDetailsInBorrowingCalculator(table);
});
