sap.ui.jsview("sap.ui.demo.myFiori.view.Master", {

	getControllerName: function () {
		return "sap.ui.demo.myFiori.view.Master";
	},
	

	createContent: function (oController) {

		var list = new sap.m.List({
			id:"list",
			growing:true,
			mode:"{device>/listMode}",
				items:[]
		});

		var items = new sap.m.ObjectListItem({
           title : "{LIFNR}",
            type:"{device>/listItemType}",
            type: sap.m.ListType.Active,
            icon : "./images/SUPPLIER-sm.png",
            number : "{MARGIN}",
            numberUnit : "EUR",
            attributes : sap.m.ObjectAttribute("attr",{text:"{NAME}"}),
            press: [oController.handleListItemPress, oController],

		});
	
		list.bindItems("/SUPPLIERINFO",items);
		
		var searchField = new sap.m.SearchField("searchfield",{
			width : "100%",
			placeholder : "Search Supplier",
			showRefreshButton:false,
			refreshButtonToolTip:"Search Supplier",
			search:[oController.handlesearch, oController]
		});
		
		var page1 = new sap.m.Page({
			title:"Supplier Data",	
            content : [searchField,list],
            enableScrolling: true
		});
		
		 return page1;
	}
});