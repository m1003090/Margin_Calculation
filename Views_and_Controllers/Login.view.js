sap.ui.jsview("sap.ui.demo.myFiori.view.Login", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf contract2go-sapui5.login
	*/ 
	getControllerName : function() {
		return "sap.ui.demo.myFiori.view.Login";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf contract2go-sapui5.login
	*/ 
	createContent : function(oController) {
		

		var oImage = new sap.ui.commons.Image("welcomeLogo", null);
		oImage.setSrc("./images/App-header.jpg");
		oImage.setAlt("Welcome to Gicom Margin Calculation");
		oImage.setWidth("100%");
			
		
		var oSimpleForm = new sap.ui.layout.form.SimpleForm(
				"sf1",
				{
					maxContainerCols: 2,
					columnsL: 2,
					columnsM: 2,
					content:[
							new sap.ui.core.Title({text:"Login"}),
							new sap.ui.commons.Label({text:"Host"}),
							new sap.ui.commons.TextField({id:"hostname"}),
							new sap.ui.commons.Label({text:"Port"}),
							new sap.ui.commons.TextField({id:"portnumber"}),
							new sap.ui.commons.Label({text:"Username"}),
							new sap.ui.commons.TextField({id:"userTfId"}),
							new sap.ui.commons.Label({text:"Password"}),
							new sap.ui.commons.PasswordField({id:"passwordTfId"}),
							new sap.m.Button({id:"loginButtonId",text:"Login",layoutData: new sap.ui.layout.ResponsiveFlowLayoutData({weight:4})}  )
							]
				});
		
		
		oButton = sap.ui.getCore().byId('loginButtonId');
		oButton.attachPress(
			    function (oControlEvent) {
			    	oHost = sap.ui.getCore().byId('hostname').getValue();
			    	oPort = sap.ui.getCore().byId('portnumber').getValue();
				    oUsername = sap.ui.getCore().byId('userTfId').getValue();
				    oPassword = sap.ui.getCore().byId('passwordTfId').getValue();
				    oController.login(oHost,oPort,oUsername,oPassword);


			    }
			);
		

		var oGlobalFlexbox = new sap.m.FlexBox({
			  items: [
			        oImage,oSimpleForm
			  ],
			  direction: sap.m.FlexDirection.Column,
			  justifyContent : sap.m.FlexJustifyContent.Center,
			  alignItems: sap.m.FlexAlignItems.Center,
			  width: "100%",
			});
		
		
		var page = new sap.m.Page({
			showHeader:false,
			enableScrolling:false,	
			showFooter:true,
			content: [
			          oGlobalFlexbox
			]
		});
	    jQuery.sap.require("sap.ui.commons.MessageBox"); 

return page;
	}

});
