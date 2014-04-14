sap.ui.jsview("sap.ui.demo.myFiori.view.Detail", {

	getControllerName: function () {
		return "sap.ui.demo.myFiori.view.Detail";
	},

	createContent: function (oController) {

		//var oModelDetail =  new sap.ui.model.odata.ODataModel("../TEST_ODATA4.xsodata/",true);
		
		//oModelDetail.read(context.getPath(), null, {"$expand":"MASTERDATA"});
		var list2 = new sap.m.List("test2");

				var template = new sap.m.ObjectListItem({
					id:"columns",
		            title : "{NAME}",
		            type: sap.m.ListType.Active,
		            icon : "http://www.themarketpeople.com/TMP/images/SUPPLIER-sm.png",
		            number : "{LIFNR}",
		            numberUnit : "{MASTERDATA/STOREID}",
		            attributes : new sap.m.ObjectAttribute("attr2",{text:"{CITY}"}),
		            press: [oController.handleListItemPress, oController]});
				var searchField = new sap.m.SearchField("searchfield2",{
					width : "100%",
					placeholder : "Search Supplier",
					showRefreshButton:false,
					refreshButtonToolTip:"Search Supplier",
					search:[oController.handlesearch, oController]
				});

				var page2 = new sap.m.Page({
					title:"Supplier Data",	
		            content : [searchField,list2],
		            enableScrolling: true
				});
						
		return page2;
		
	}
});