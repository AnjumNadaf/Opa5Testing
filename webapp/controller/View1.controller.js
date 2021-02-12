sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("project2.controller.View1", {
			onInit: function () {
            


                //  var that = this;
				// window.setTimeout(function() {
				// 	that.byId("pressMeButton2").setVisible(true);
				// }, 1000);
			},

			onPress : function () {
				this.getView().byId("pressMeButton").setText("I got pressed");
		  },
		  onPress3:function(){
			  debugger;
			  this.getView().byId("pressMeButton3").setText("I got pressed third time");
		  }
			
			
		});
	});
