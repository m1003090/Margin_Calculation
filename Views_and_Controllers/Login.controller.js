sap.ui.controller("sap.ui.demo.myFiori.view.Login", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf contract2go-sapui5.login
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf contract2go-sapui5.login
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf contract2go-sapui5.login
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf contract2go-sapui5.login
*/
//	onExit: function() {
//
//	}
	
	getServiceUrl: function(sServiceUrl) {  
	    var sOrigin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "");  
	    if (!jQuery.sap.startsWith(sServiceUrl, sOrigin)) {  
	        return "proxy/" + sServiceUrl.replace("://", "/");  
	    } else {  
	          return sServiceUrl.substring(sOrigin.length);  
	    }  
	}, 
	

login: function(host,port,username,password,serviceURL){
		this.host = host;
		this.port = port;
		this.username = username;
		this.password = password;
		jQuery.sap.require("sap.ui.commons.MessageBox"); 
		if(!username){
			sap.ui.commons.MessageBox.show("Enter a valid Username!", sap.ui.commons.MessageBox.Icon.INFORMATION, "Error", [sap.ui.commons.MessageBox.Action.OK]);
	}else if(!password){
			sap.ui.commons.MessageBox.show("Enter a valid Password", sap.ui.commons.MessageBox.Icon.INFORMATION, "Error", [sap.ui.commons.MessageBox.Action.OK]);
	}else if(!host){
		sap.ui.commons.MessageBox.show("Enter a host name", sap.ui.commons.MessageBox.Icon.INFORMATION, "Error", [sap.ui.commons.MessageBox.Action.OK]);
	}else if(!port){
		sap.ui.commons.MessageBox.show("Enter a valid port number", sap.ui.commons.MessageBox.Icon.INFORMATION, "Error", [sap.ui.commons.MessageBox.Action.OK]);
	}else{
		//var url = "http://ec2-54-194-70-128.eu-west-1.compute.amazonaws.com:8000";
		var url = "http://"+host+":"+port+"/fiori_dev/Fiori_App/TEST_ODATA6.xsodata/";
		var mHeaders = {};
		//mHeaders['Access-Control-Allow-Origin'] = '*';
		var oModel = new sap.ui.model.odata.ODataModel(url,true,username,password,mHeaders);
         this.csrfToken = ""; 
         sap.ui.getCore().setModel(oModel);
		this.loading = new sap.m.BusyDialog({});
		this.loading.setTitle("Performing login");
		this.loading.setText("Please wait...");	
		this.loading.open();
         
         $.ajax( {  
             type:'GET',
             url:url, 
             contentType: 'application/json',
             username: username,
             password: password,
             beforeSend: function(xhr){xhr.setRequestHeader('X-CSRF-Token', 'Fetch');xhr.setRequestHeader('Accept', "application/json");},
             async:true,
             success:function(data,textStatus,request) {  
            	 var controller = sap.ui.getCore().byId('Login').getController();
            	 //controller.loading.setTitle("Getting data");
            	 var app = sap.ui.getCore().byId("root");
            	 controller.loading.close();
            	 if (!app.getPage("Home")){
            	 var homeView =  sap.ui.jsview("Home","sap.ui.demo.myFiori.view.Home");
            	 homeView.getController().nav = controller.nav;
            	 homeView.getController().master.nav = controller.nav;
            	 app.addPage(homeView);
            	 app.to(homeView);
             }else {
            	 var homeview = sap.ui.getCore().byId('Home');
            	 app.to(homeview);
             }}
        }).done(function() {
        	//done
        })	
        .fail(function(request, type, errorThrown) {
        	var controller = sap.ui.getCore().byId('Login').getController();
       	 	controller.loading.close();
        	  var message = "There was an error with the AJAX request.\n";
        	    switch (type) {
        	        case 'timeout':
        	            message += "The request timed out.";
        	            break;
        	        case 'notmodified':
        	            message += "The request was not modified but was not retrieved from the cache.";
        	            break;
        	        case 'parsererror':
        	            message += "XML/Json format is bad.";
        	            break;
        	        default:
        	            message += "HTTP Error (" + request.status + " " + request.statusText + ").";
        	    }
        	    message += "\n";
        	    jQuery.sap.require("sap.ui.commons.MessageBox"); 
                sap.ui.commons.MessageBox.show( 
                     message, 
                     sap.ui.commons.MessageBox.Icon.INFORMATION, 
                     'Error'  );        });
         
         
		}
		
        
	}
	
	
});
