jQuery.sap.require("sap.ui.demo.myFiori.util.Formatter");
sap.ui.controller("sap.ui.demo.myFiori.view.Artdetail", {
	
		handleNavButtonPress : function (evt) {
			this.nav.back("ArtikelInfo");
		}

	});