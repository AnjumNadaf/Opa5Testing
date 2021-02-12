sap.ui.define([
	"sap/ui/test/Opa5",
	"sap/ui/test/actions/Press",
	"sap/ui/test/matchers/PropertyStrictEquals",
	"sap/ui/test/matchers/Ancestor"
], function (Opa5,Press,PropertyStrictEquals,Ancestor) {
	"use strict";
	var sViewName = "View1";
	Opa5.createPageObjects({
		onTheAppPage: {

			actions: {
				iPressOnTheButton: function () {
					return this.waitFor({
						viewName:sViewName,
						id: "pressMeButton",
						actions: new Press(),
						errorMessage: "did not find the Button"
					});
				},
				iPressOnTheThirdButton: function () {
					return this.waitFor({
						viewName:sViewName,
						id: "pressMeButton3",
						actions: new Press(),
						errorMessage: "did not find the Button"
					});
				},
				iPressonSelectItemList:function(){
					return this.waitFor({
						viewName:sViewName,
						id:"mySelect",
						actions: new Press(),
						success:function(oSelect){
							this.waitFor({
								controlType:"sap.ui.core.Item",
								matchers:[
								  new Ancestor(oSelect),
								  new Properties({ key: "14"})
								],
								actions: new Press(),
								errorMessage: "Cannot select 14 from mySelect"
							})
						}
					})
				},

				// iPressOnTheInput:function(){
				// 	return this.waitFor({
				// 		viewName:sViewName,
				// 		id:"myInput",
						
				// 		success:function(){
				// 			this.waitFor({
				// 				controlType:"sap.m.Input",
				// 				actions: [
				// 					new EnterText({ text: "Hello " }),
				// 					new EnterText({ text: "World", clearTextFirst: true  })
				// 				],
				// 				errorMessage:"Cannot Change the Input Values"
				// 			})
				// 		}
				// 	})
				// }
  
				
			},

			assertions: {

				iShouldSeeTheApp: function () {
					return this.waitFor({
						id: "app",
						viewName: sViewName,
						success: function () {
							Opa5.assert.ok(true, "The " + sViewName + " view is displayed");
						},
						errorMessage: "Did not find the " + sViewName + " view"
					});
				},
				iShouldSeeTheButton:function(){
					return this.waitFor({
						viewName:sViewName,
						id:"FirstButton",
						success:function(){
							Opa5.assert.ok(true,"The " + " Button1 is Visible"  );
						},
						errorMessage : "Did not find the Button" 
					});
				},

				// iSholudSeeButton2:function(){
				// 	return this.waitFor({
				// 		viewName:sViewName,
				// 		id:"pressMeButton",
				// 		success:function(){
				// 			Opa5.assert.ok(true, "Second Button is Visible");
				// 		},
				// 		errorMessage :"Did not find the Second Button"
				// 	})
				// },

				theButtonShouldHaveADifferentText: function () {
					return this.waitFor({
						viewName:  sViewName,
						id: "pressMeButton",
						matchers: new PropertyStrictEquals({
							name: "text",
							value: "I got pressed"
						}),
						success: function (oButton) {
							Opa5.assert.ok(true, "The button's text changed to: " + oButton.getText());
						},
						errorMessage: "did not change the Button's text"
					});
				},
				

				theButtonShouldHaveADifferentTextThird: function () {

					return this.waitFor({
						viewName:  sViewName,
						id: "pressMeButton3",
						matchers: new PropertyStrictEquals({
							name: "text",
							value: "I got pressed third time"
						}),
						success: function (oButton) {
							Opa5.assert.ok(true, "The button's text changed to: " + oButton.getText());
						},
						errorMessage: "did not change the Button's text"
					});

              
					
		

              },

			  iSholudSeeTheText:function(){
				  return this.waitFor({
					  viewName:sViewName,
					  controlType:"sap.m.Title",
					  
					  matchers: new I18NText({
						propertyName: "text",
						key: "title"
					}),

					success: function (aDialogs) {
						Opa5.assert.ok(true, "Found title with i18n key \"title\"");
					},
					errorMessage: "Did not find a title with i18n key \"title\""
				  })
			  }

			  

			 


			}
		}
 });

});
