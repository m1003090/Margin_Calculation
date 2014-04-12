sap.ui.jsview("sap.ui.demo.myFiori.view.Home", {

	getControllerName: function () {
		return "sap.ui.demo.myFiori.view.Home";
	},
	
	createContent: function (oController) {
		
		// to avoid scroll bars on desktop the root view must be set to block display
		this.setDisplayBlock(true);
		
		// create app
		this.appcontainer = new sap.m.SplitContainer("SplitContainer");
		
		// load the master page
		var master = sap.ui.xmlview("Master", "sap.ui.demo.myFiori.view.Master");
		//master.getController().nav = this.getController().nav;
		this.getController().master=master.getController();
		this.appcontainer.addPage(master, true);
		
		// load the empty page
		var empty = sap.ui.xmlview("Empty", "sap.ui.demo.myFiori.view.Empty");
		this.appcontainer.addPage(empty, false);
		
		
		/*var login = sap.ui.jsview("Login", "sap.ui.demo.myFiori.view.Login");
		login.getController().nav = this.getController();
		this.app.addPage(login, true);*/
		// done
		return this.appcontainer;
	}
});