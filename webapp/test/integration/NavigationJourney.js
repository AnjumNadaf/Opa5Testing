/*global QUnit*/

sap.ui.define([
	"sap/ui/test/opaQunit",
	"./pages/View1"
], function (opaTest) {
	"use strict";

	QUnit.module("Navigation Journey");

	opaTest("Should see the initial page of the app", function (Given, When, Then) {
		// Arrangements
		Given.iStartMyApp();

		// Assertions
		Then.onTheAppPage.iShouldSeeTheApp();

		//Cleanup
		Then.iTeardownMyApp();
	});
	opaTest("Should able to see the Button in view", function(Given,   When,  Then){
			Given.iStartMyApp();
					
					
			// When.onTheAppPage.iPressOnTheButton();
					 
					 
			Then.onTheAppPage.iShouldSeeTheButton();
		
		 	Then.iTeardownMyApp();
	 	});

	opaTest("Should able to Change the Button Text", function(Given, When, Then){


          Given.iStartMyApp();

		  When.onTheAppPage.iPressOnTheButton();

		//   Then.onTheAppPage.iSholudSeeButton2().
		  

		Then.onTheAppPage.theButtonShouldHaveADifferentText();

		  Then.iTeardownMyApp();


	});
	
	opaTest("Should press a Button", function (Given, When, Then) {
        // Arrangements
        Given.iStartMyApp();

        //Actions
        // When.iPressOnTheThirdButton();
		When.onTheAppPage.iPressOnTheThirdButton();

        // Assertions
        Then.onTheAppPage.theButtonShouldHaveADifferentTextThird();

		Then.iTeardownMyApp();


    });


	opaTest("Should trigger a press event on Select list item", function (Given, When, Then) {
        // Startup the application using Given
		Given.iStartMyApp();

        When.onTheAppPage.iPressonSelectItemList();

		Then.iTeardownMyApp();
        });

    // opaTest("Sholud Able to Press Evnet on Input Fields", function(Given,When,Then){


	// 	Given.iStartMyApp();

	// 	When.onTheAppPage.iPressOnTheInput();

	// 	Then.iTeardownMyApp();
	// })
	
	opaTest("Should able to see the Title Text", function(Given, When, Then){
		Given.iStartMyApp();

		Then.onTheAppPage.iSholudSeeTheText();

		Then.iTeardownMyApp();
		
	})
});
