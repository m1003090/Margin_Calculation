jQuery.sap.declare("sap.ui.demo.myFiori.Component");

sap.ui.core.UIComponent.extend("sap.ui.demo.myFiori.Component", {

	createContent : function() {
		sap.ui.core.BusyIndicator.show();  
		// create root view
		var oView = sap.ui.view({
			id : "app",
			viewName : "sap.ui.demo.myFiori.view.App",
			type : "JS",
			viewData : { component : this }
		});
		
		
		var i18nModel = new sap.ui.model.resource.ResourceModel({
			bundleUrl : "i18n/messageBundle.properties"});

		// set the resource model as global model with the name "i18n"
		oView.setModel(i18nModel, "i18n"); 
		
		var oModel = new sap.ui.model.odata.ODataModel("../TEST_ODATA7.xsodata/",true);
		oView.setModel(oModel);
		sap.ui.core.BusyIndicator.hide();
		
		var deviceModel = new sap.ui.model.json.JSONModel({
			isTouch : sap.ui.Device.support.touch,
            isNoTouch : !sap.ui.Device.support.touch,
            isPhone : jQuery.device.is.phone,
            isNoPhone : !jQuery.device.is.phone,
            listMode : (jQuery.device.is.phone) ? "None" : "SingleSelectMaster",
            listItemType : (jQuery.device.is.phone) ? "Active" : "Inactive"
        });
        deviceModel.setDefaultBindingMode("OneWay");
        oView.setModel(deviceModel, "device");
		// done
		return oView;
	}
});