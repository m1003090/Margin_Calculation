sap.ui.jsview("sap.ui.demo.myFiori.view.App", {

	getControllerName: function () {
		return "sap.ui.demo.myFiori.view.App";
	},
	
	createContent: function (oController) {
		
		// to avoid scroll bars on desktop the root view must be set to block display
		this.setDisplayBlock(true);
		
		// create app
		this.app = new sap.m.App("root");
		
		// load the master page
		var login = sap.ui.jsview("Login", "sap.ui.demo.myFiori.view.Login");
		login.getController().nav = this.getController();
		this.app.addPage(login, true);
		// done
		return this.app;
	}
});