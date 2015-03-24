'use strict';


describe('Freelancing Widget', function () {
    beforeEach(function () {
        browser.get('http://localhost:3000/');
    });

    function createNewFreelancingWidget () {
        element(by.id('newWidget')).click();
        element(by.id('freelancingType')).click();
        element(by.id('redColor')).click();
        element(by.id('threeSize')).click();
        element(by.id('addWidget')).click();
    }

    describe('The main view', function () {

        it('should create a new freelance job widget', function () {
            createNewFreelancingWidget();
            expect(element(by.className('freelancingWidget')).isPresent()).toBeTruthy();
        });
    });

    describe('Widget', function () {
        iit('should get a list of freelance jobs by keyword', function () {
            element(by.id('keywordFilter')).sendKeys('java');
        });
    });
});
