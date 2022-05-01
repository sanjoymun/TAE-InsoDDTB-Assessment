# Introduction

This a bare minimum framework setup of WebdriverIO for TAE Assessment project

## Tests Covered:

* UI

## Framework/Languages used:

* Webdriverio
* JS
* Cucumber

## Design Pattern used:
* Page Object Model _(POM)_

## Prerequisite:
* npm - 8.6.0
* node - 18.10.0
* Chrome

## Steps to Run:

1. Clone GIT repository in named directory.

   **_Run:_**
    ```
     > cd ~/workspace/
     > mkdir <wdio-js_directory_name>
     > cd <wdio-js_directory_name>
     > git clone https://github.com/sanjoymun/TAE-InsoDDTB-Assessment.git
    ```     
2. Install all dependencies -

   **_Run:_**
    ```
        > cd ~/workspace/<wdio-js_directory_name>/wdio
        > npm install
     ```       
   **Note**:This will install all dependencies project will be using for executing.


3. To run test -

   **_Run:_**
    ```
    > cd ~/workspace/<wdio-js_directory_name>
    > npm run test [This will run all tests under feature file]
    > npm run test:one [ This will run individual scenario where '@one' tag has been used for scenario1 ]
    ```
    
 4. To generate report - 
    
    **_Run:_**
    ```
    > npm run generate-report:cucumber-html
    ```
    - HTML Reports will get generated after every run under ./reporter/cucumber-html-report folder

**Note: This framework can be integrated with CI/CD pipeline using Jenkins (for e.g.)
 
## Author

* Sanjoy Roy

## References

* https://webdriver.io/
