Feature: Borrowing Estimate Calculator and Reset Borrowing Estimate Calculator
	@regression
	Scenario: TC-001 Borrowing Estimate Calculation
		Given I am on the Borrowing Estimate Calculator page
		When I give below inputs
			| AppType | NumOfDependants | PropertyFor     | AnnualIncomeBeforeTax | AnnualOtherIncome | MonthlyLivingExp | MonthlyHomeLoanRepayments | MonthlyOtherLoanRepayments | MonthlyOtherCommitments | TotCreditCardLimits |
			| Single  | 0         		| Home to live in | 80000        		 | 10000             | 500              | 0                         | 100                        | 0                       | 10000               |
		And I click on Work out how much I could borrow button
		Then I should see has a borrowing estimate of $482,000
	
	@sanity
	Scenario: TC-002 Reset Borrowing Estimate Calculator
		Given I am on the Borrowing Estimate Calculator page
		When I give below inputs
            | AppType | NumOfDependants | PropertyFor     | AnnualIncomeBeforeTax | AnnualOtherIncome | MonthlyLivingExp | MonthlyHomeLoanRepayments | MonthlyOtherLoanRepayments | MonthlyOtherCommitments | TotCreditCardLimits |
			| Joint  | 0         		| Residential investment | 80000        		  | 10000             | 500              | 0                         | 100                        | 0                       | 10000               |
		And I click on Start over button
		Then Borrowing Calculator Form should be cleared
	