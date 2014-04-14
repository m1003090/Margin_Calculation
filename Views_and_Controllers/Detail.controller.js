jQuery.sap.require("sap.ui.demo.myFiori.util.Formatter");
sap.ui.controller("sap.ui.demo.myFiori.view.Detail", {

    onInit: function () {
        oTable = new sap.m.Table("detailTable", {
            title: "Store Information",
            noDataText: "No Stores Found",
            select: this.handleLineItemPress,
            growing:true,
            growingThreshold:10,
            columns: [
            new sap.m.Column({
                width: "12em",
                header: new sap.m.Label({
                    text: "STORE LOCATION"
                })
            }), new sap.m.Column({
                header: new sap.m.Label({
                    text: "MARGIN"
                }),
                minScreenWidth: "Tablet",
                demandPopin: true,
                hAlign: "Center"
            }), new sap.m.Column({
                header: new sap.m.Label({
                    text: "STATUS"
                }),
                minScreenWidth: "Tablet",
                demandPopin: true,
                hAlign: "Center"
            })],
            items: {
                path: "MASTERDATA",
                sorter: new sap.ui.model.Sorter("MARGINEURO", true),
                template: new sap.m.ColumnListItem("columnlistitem", {
                    type: "Navigation",
                    press: this.handleLineItemPress,
                    cells: [
                    new sap.m.ObjectIdentifier({
                        title: "{STORELOCATION}",
                        text: "{STOREID}"
                    }), new sap.m.ObjectNumber({
                        number: "{path:'MARGINEURO', formatter: 'sap.ui.demo.myFiori.util.Formatter.formatMoney'}",
                        numberUnit: "EUR"
                    }), new sap.m.ObjectStatus({
                        icon: "{STATUS}"
                    })]
                })
            }
        });
        oTable.setHeaderText(null);
        oTable.setShowSeparators("Inner");
        this.getView().byId("idIconTabBar").insertContent(oTable);

    },

/*	onBeforeRendering:function(){
				var oController = this.getController().byId("columnlistitem");
				oController.setType("Active").attachPress(this.handleLineItemPress);
			},*/

    handleNavButtonPress: function (evt) {
        this.nav.back("Master");
    },

    handleLineItemPress: function (evt) {
        var context = evt.getSource().getBindingContext();
        var tmpNav = sap.ui.getCore().byId("Detail").getController().nav;
        tmpNav.to("ArtikelInfo", context);
    },

    handleFilter: function (evt) {
        var key = this.byId("groupSelect").getSelectedKey();
        var table = this.byId("detailtable");
        var chart = this.byId("dataset");
        if (key == "high") {
            var listfilter = new sap.ui.model.Filter("STATUS", sap.ui.model.FilterOperator.EQ, 'sap-icon://up');
            table.getBinding("items").filter(listfilter);
            chart.getBinding("data").filter(listfilter);
        } else if (key == "medium") {
            var listfilter = new sap.ui.model.Filter("STATUS", sap.ui.model.FilterOperator.EQ, 'sap-icon://status-inactive');
            table.getBinding("items").filter(listfilter);
            chart.getBinding("data").filter(listfilter);
        } else if (key == "low") {
            var listfilter = new sap.ui.model.Filter("STATUS", sap.ui.model.FilterOperator.EQ, 'sap-icon://down');
            table.getBinding("items").filter(listfilter);
            chart.getBinding("data").filter(listfilter);
        } else if (key == "refresh") {
            var template = this.byId("columns");
            console.log(template);
            table.bindItems('MASTERDATA', template);
            chart.bindData('MASTERDATA');

        }
    },
    handlesearch: function (evt) {

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
        var table = sap.ui.getCore().byId("detailTable");
        var chart = this.byId("dataset");
        table.getBinding("items").filter(filters);
        chart.getBinding("data").filter(filters);
    },

    test: function () {
        alert("Hello");

    },

    handleIconTabBarSelect: function (oEvent) {
        var oTable = oEvent.getSource().getContent()[0];
         var oChart = this.byId("dataset");
        var oBindingTable = oTable.getBinding("items"),sKey = oEvent.getParameter("selectedKey"),oFilter;
        var oBindingChart = oChart.getBinding("data"),sKey = oEvent.getParameter("selectedKey"),oFilter;
        if (sKey === "Positive") {
            oFilter = new sap.ui.model.Filter("STATUS", "EQ", 'sap-icon://up');
            oBindingTable.filter([oFilter]);
             oBindingChart.filter([oFilter]);
        } else if (sKey === "Neutral") {
            oFilter = new sap.ui.model.Filter("STATUS", "EQ", 'sap-icon://status-inactive');
            oBindingChart.filter([oFilter]);
             oBindingTable.filter([oFilter]);
        } else if (sKey === "Negative") {
            oFilter = new sap.ui.model.Filter("STATUS", "EQ", 'sap-icon://down');
            oBindingTable.filter([oFilter]);
             oBindingChart.filter([oFilter]);
        } else {
            oBindingTable.filter([]);
             oBindingChart.filter([]);
        }
    }

});