class CalculatorPage{

    //define elements
    
    get btnLogin(){
        return $('#skip_logon');
    }
    
   //============ Your Details ==============//
   get selectNumberOfDependents(){
       return $('select[title="Number of dependants"]');
   }
   get btnBorrowTypeHome(){
    return $('#borrow_type_home');
   }
   get btnBorrowTypeInvestment(){
    return $('#borrow_type_investment');
   }
   //==========================================//

   //========= Your Earnings ==================//
   get inputAnnualIncomeBeforeTax(){
    return $('#q2q1i1 + input');
   }
   get inputAnnualOtherIncome(){
    return $('#q2q2i1 + input');
   }
   //==========================================//

   //============== Your Expenses =============//
   get inputMonthlyLivingExpenses(){
       return $('#expenses');
   }
   get inputMonthlyHomeLoanRepayments(){
    return $('#homeloans');
   }
   get inputMonthlyOtherLoanRepayments(){
    return $('#otherloans');
   }
   get inputMonthlyOtherCommitments(){
    return $('#q3q4i1 + input');
   }
   get inputTotalCreditCardLimits(){
    return $('#credit');
   }
   get btnBorrowCalculater(){
    return $('#btnBorrowCalculater');
   }

   //==========================================//

   get txtHomeLoanBorrowStaticText(){
       return $('.homeloan__borrow__text');
   }
   get txtHomeLoanBorrowAmount(){
    return $('#borrowResultTextAmount');
   }
   get btnStartOver(){
    return $('.start-over');
   }
   //actions
    openCalculatorPage(url){
        browser.url(`https://www.anz.com.au/${url}`);
    }
    getYourDetailsSectionButtonByText = function(btnText){
        const xpAthFortheButton = (btnText) => { 
            return  `//label[contains(text(),"${btnText}")]/input`;
        }
        return $(`${xpAthFortheButton(btnText)}`);
    }
    enterDetailsInBorrowingCalculator = async (table) => {       
        
        const tableRow = table.hashes();
        
        for(const ele of tableRow ){
                       
            await this.getYourDetailsSectionButtonByText(ele.AppType).click();
            (await this.selectNumberOfDependents).selectByVisibleText(ele.NumOfDependants);    
            await this.getYourDetailsSectionButtonByText(ele.PropertyFor).click();                      
            
            (await this.inputAnnualIncomeBeforeTax).setValue(ele.AnnualIncomeBeforeTax);        
            (await this.inputAnnualOtherIncome).setValue(ele.AnnualOtherIncome);
            
            (await this.inputMonthlyLivingExpenses).setValue(ele.MonthlyLivingExp);
            (await this.inputMonthlyHomeLoanRepayments).setValue(ele.MonthlyHomeLoanRepayments);
            (await this.inputMonthlyOtherLoanRepayments).setValue(ele.MonthlyOtherLoanRepayments);
            (await this.inputMonthlyOtherCommitments).setValue(ele.MonthlyOtherCommitments);
            (await this.inputTotalCreditCardLimits).setValue(ele.TotCreditCardLimits);

            
        }
    
    }
    clickOnHowMuchICouldBorrowButton = async () => {
        (await this.btnBorrowCalculater).moveTo();
        (await this.btnBorrowCalculater).click();
        
    }
    clickOnStartOverButton = async () => {
        (await this.btnStartOver).click();
    }
    
}
export default new CalculatorPage();