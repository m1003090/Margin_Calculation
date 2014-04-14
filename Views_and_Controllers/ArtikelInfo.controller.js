	jQuery.sap.require("sap.ui.demo.myFiori.util.Formatter");
sap.ui.controller("sap.ui.demo.myFiori.view.ArtikelInfo", {
	
		handleNavButtonPress : function (evt) {
			this.nav.back("Detail");
		},
handleListItemPress : function (evt) {
	var context = evt.getSource().getBindingContext();
	this.nav.to("Artdetail", context);
},

handlesearch : function (evt) {
	
	// create model filter
	var filters = [];
	var query = evt.getParameter("query");
	console.log(query);
	if (query && query.length > 0) {
		var filter = new sap.ui.model.Filter("ARTIKELNAME", sap.ui.model.FilterOperator.Contains, query);
		console.log(filter);
		filters.push(filter);
	}
	// update list binding
	var tilecontainer = this.byId("container");
	tilecontainer.getBinding("content").filter(filters);
},
});