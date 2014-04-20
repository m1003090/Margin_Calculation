jQuery.sap.declare("sap.ui.demo.myFiori.util.Formatter");

jQuery.sap.require("sap.ui.core.format.DateFormat");

sap.ui.demo.myFiori.util.Formatter = {
	
	_statusStateMap : {
		"1" : "sap-icon://add",
		"2" : "sap-icon://status-inactive",
		"3" : "sap-icon://less"
	},

	statusText :  function (value) {
		console.log(value);
		console.log( this.getModel("i18n"));
		
		var bundle = this.getModel("i18n").getResourceBundle();
		console.log(bundle);
		return bundle.getText("StatusText" + value, "?");
	},
	
	statusState :  function (value) {
		var map = sap.ui.demo.myFiori.util.Formatter._statusStateMap;
		return (value && map[value]) ? map[value] : "None";
	},
	
	round:function (value) {
		decimal= +value.toFixed(2);		return decimal;
	},
	
	
	date : function (value) {
		if (value) {
			var oDateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({pattern: "dd.MM.yyyy"}); 
			return oDateFormat.format(new Date(value));
		} else {
			return value;
		}
	},
	
	dateFormat2:function(value){
		
		jQuery.sap.require("sap.ui.core.format.DateFormat");  
		var oDateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({pattern: "dd.MM.yy"});   
		return oDateFormat.format(new Date(value));
	},
	
	formatMoney : function (nStr)
	{
		nStr += '';
		inD = '.';
		outD = ',';
		sep = '.';
		var dpos = nStr.indexOf(inD);
		var nStrEnd = '';
		if (dpos != -1) {
			nStrEnd = outD + nStr.substring(dpos + 1, nStr.length);
			nStr = nStr.substring(0, dpos);
		}
		var rgx = /(\d+)(\d{3})/;
		while (rgx.test(nStr)) {
			nStr = nStr.replace(rgx, '$1' + sep + '$2');
		}
		return nStr + nStrEnd;
	},
	
	formatID:function(value){
		 	if(value){
		 		return "ID: " + value;
		 	}else{
		 		return "Missing Id";
		 	}
	},
	formatNAME:function(value){
		if(value){
	 		return "Name: " + value;
	 	}else{
	 		return "Missing Name";
	 	}
		
	},
	formatARTIKELNAME:function(value){
		if(value){
	 		return "Artikel: " + value;
	 	}else{
	 		return "Missing Name";
	 	}
		
	},
	formatKeyFigureQuantity:function(value){
		if(value){
	 		return  value+"pcs";
	 	}else{
	 		return "Missing value";
	 	}
		
	},
	formatMoneyWithCurreny : function (nStr)
	{
		nStr += '';
		inD = '.';
		outD = ',';
		sep = '.';
		var dpos = nStr.indexOf(inD);
		var nStrEnd = '';
		if (dpos != -1) {
			nStrEnd = outD + nStr.substring(dpos + 1, nStr.length);
			nStr = nStr.substring(0, dpos);
		}
		var rgx = /(\d+)(\d{3})/;
		while (rgx.test(nStr)) {
			nStr = nStr.replace(rgx, '$1' + sep + '$2');
		}
		return nStr + nStrEnd+"€";
	},
	formatArtikelId:function(value){
		
		if(value){
			return "Artikel-ID: "+value;
		}
		else{
			return "missing value";
		}
	}
	
};