jQuery.sap.require("sap.ui.demo.myFiori.util.Formatter");
sap.ui.controller("sap.ui.demo.myFiori.view.Master", {


	handleLogoff:function(){
            	 var app = sap.ui.getCore().byId("root");
            	 var splitContainer = sap.ui.getCore().byId("SplitContainer");
            	 //var homeview = sap.ui.getCore().byId("Home");
            	 app.backToPage('Login');
            	 
	},
		
	handleListItemPress : function (evt) {
		 
		var context = evt.getSource().getBindingCoFDtentext();
		var tmpNav = sap.ui.getCore().byId("Master").getController().nav;
		tmpNav.to("Detail",context);
	},
	
	handleListSelect : function (evt) {
	 /*this.loading = new sap.m.BusyDialog("busyDialog",{
	  title:  "Test",	
	  text:"Loading Data"});
	  this.loading.open(); */
		var context = evt.getParameter("listItem").getBindingContext();
		console.log(context);
		var tmpNav = sap.ui.getCore().byId("Master").getController().nav;
		tmpNav.to("Detail",context);

	},


	handlesearch : function (evt) {
		
		// create model filter
		var filters = [];
		var query = evt.getParameter("query");
		console.log(query);
		if (query && query.length > 0) {
			var filter = new sap.ui.model.Filter("NAME", sap.ui.model.FilterOperator.Contains, query);
			console.log(filter);
			filters.push(filter);
		}
		console.log(filters);
		// update list binding
		var list = this.byId("list");
		console.log(list);
		list.getBinding("items").filter(filters);
	},
	
	
	filterPositive:function (evt) {
		var listfilter = new sap.ui.model.Filter("STATUS", sap.ui.model.FilterOperator.EQ, 'sap-icon://up');
		var list = this.byId("list");
		list.getBinding("items").filter(listfilter);
		},
		
	filterNeutral:function (evt) {
		var listfilter = new sap.ui.model.Filter("STATUS", sap.ui.model.FilterOperator.EQ, 'sap-icon://status-inactive');
		var list = this.byId("list");
		list.getBinding("items").filter(listfilter);
		},
	
	filterNegative:function (evt) {
		var listfilter = new sap.ui.model.Filter("STATUS", sap.ui.model.FilterOperator.EQ, 'sap-icon://down');
		var list = this.byId("list");
		list.getBinding("items").filter(listfilter);
		},
		
	Refresh:function (evt) {
		var list = this.byId("list");
		var template = this.byId("template");
		list.bindItems('/SUPPLIERINFO',template)
		},
	});