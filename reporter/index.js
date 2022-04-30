const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: './reporter/json',
	reportPath: './reporter/cucumber-html-report',
    reportName: "TAE Assessment - Test Summary Report",
    displayReportTime: true,
	metadata:{
        browser: {
            name: 'chrome',
            version: '100'
        },
        device: 'Local test machine',
        platform: {
            name: 'windows',
            version: '11'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Test project'},
            {label: 'Release', value: '1.2.3'},
            {label: 'Cycle', value: 'A1.1'},
        ]
    }
});