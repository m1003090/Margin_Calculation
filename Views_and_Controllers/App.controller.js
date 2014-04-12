sap.ui.controller("sap.ui.demo.myFiori.view.App", {
	
	/**
	 * Navigates to another page
	 * @param {string} pageId The id of the next page
	 * @param {sap.ui.model.Context} context The data context to be applied to the next page (optional)
	 */
	to : function (pageId, context) {
			console.log(pageId);
		
		var app = sap.ui.getCore().byId("root");
		var splitContainer = sap.ui.getCore().byId("SplitContainer");
		if (pageId=="Login"){	
			app.getPage(pageId);
			app.to(pageId);
		}
		// load page on demand
		var master = ("Master" === pageId);
		console.log(master);
		if (splitContainer.getPage(pageId, master) === null) {
			var page = sap.ui.view({
				id : pageId,
				viewName : "sap.ui.demo.myFiori.view." + pageId,
				type : "XML"
			});
			console.log(master);
			page.getController().nav = this;
			splitContainer.addPage(page, master);
			
			//page.setBindingContext(context);
			jQuery.sap.log.info("app controller > loaded page: " + pageId);
		}
		
		splitContainer.to(pageId);
		if (context) {
			var page = splitContainer.getPage(pageId);
			page.setBindingContext(context);
			} 
		

		//sap.ui.getCore().byId("busyDialog").close();
	},
	/**
	 * Navigates back to a previous page
	 * @param {string} pageId The id of the next page
	 */
	back : function (pageId) {
		var splitContainer = sap.ui.getCore().byId("SplitContainer");
		splitContainer.backToPage(pageId);
	}
});