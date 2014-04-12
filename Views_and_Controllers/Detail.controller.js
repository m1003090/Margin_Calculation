jQuery.sap.require("sap.ui.demo.myFiori.util.Formatter");
sap.ui.controller("sap.ui.demo.myFiori.view.Detail", {

		/* onInit:function(){
				  this.getView().addDelegate({onAfterShow : function(evt) {
		sap.ui.getCore().byId("busyDialog").close();
    }});
		
		},*/
		
		/*onAfterRendering : function(){
		sap.ui.getCore().byId("busyDialog").close();
		},*/

		handleNavButtonPress : function (evt) {
			this.nav.back("Master");
		},
		
		handleLineItemPress : function (evt) {
			var context = evt.getSource().getBindingContext();
			this.nav.to("ArtikelInfo", context);},
			
		handleFilter:function (evt) {
			var key=this.byId("groupSelect").getSelectedKey();
			var table = this.byId("detailtable");
			var chart = this.byId("dataset");
			if (key=="high"){
			var listfilter = new sap.ui.model.Filter("STATUS", sap.ui.model.FilterOperator.EQ, 'sap-icon://up');
			table.getBinding("items").filter(listfilter);
			chart.getBinding("data").filter(listfilter);
			}
			else if(key=="medium"){
			var listfilter = new sap.ui.model.Filter("STATUS", sap.ui.model.FilterOperator.EQ, 'sap-icon://status-inactive');
			table.getBinding("items").filter(listfilter);
			chart.getBinding("data").filter(listfilter);
			}
			else if(key=="low"){
			var listfilter = new sap.ui.model.Filter("STATUS", sap.ui.model.FilterOperator.EQ, 'sap-icon://down');
			table.getBinding("items").filter(listfilter);
			chart.getBinding("data").filter(listfilter);
			}
			else if(key=="refresh"){
			var template = this.byId("columns");
			console.log(template);
			table.bindItems('MASTERDATA',template);
			chart.bindData('MASTERDATA');
			
		}
		},
		handlesearch : function (evt) {
	
			// create model filter
			var filters = [];
			var query = evt.getParameter("query");
			console.log(query);
			if (query && query.length > 0) {
				var filter = new sap.ui.model.Filter("STORELOCATION", sap.ui.model.FilterOperator.Contains, query);
				console.log(filter);
				filters.push(filter);
			}
			// update list binding
			var table = this.byId("detailtable");
			var chart = this.byId("dataset");
			table.getBinding("items").filter(filters);
			chart.getBinding("data").filter(filters);
		},
		
		test:function(){
		alert("Hello");
		
		},
		

});
