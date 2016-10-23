(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', toBuyController)
    .controller('AlreadyBoughtController', alreadyBoughtController)
    .service('shoppingListCheckOffService', shoppingListCheckOffService);

    toBuyController.$inject = ['shoppingListCheckOffService'];
    function toBuyController(shoppingListCheckOffService) {
        var buyCtrl = this;

        buyCtrl.items = shoppingListCheckOffService.getToBuyItems();

        buyCtrl.buyItem = shoppingListCheckOffService.moveItemToBoughtItemsList;
    }

    toBuyController.$inject = ['shoppingListCheckOffService'];
    function alreadyBoughtController(shoppingListCheckOffService) {
        var boughtCtrl = this;

        boughtCtrl.items = shoppingListCheckOffService.getBoughtItems();
    }

    function shoppingListCheckOffService() {
        var service = this;

        var toBuyItems = [{ name: "cookies", quantity: 10 }, { name: "chocolate", quantity: 5 },
            { name: "candy", quantity: 15 }];

        var boughtItems = [];

        service.moveItemToBoughtItemsList = function(itemIndex) {
            var item = toBuyItems.splice(itemIndex, 1);
            boughtItems.push(item[0]);
        };

        service.getToBuyItems = function() {
            return toBuyItems;
        };

        service.getBoughtItems = function() {
            return boughtItems;
        };
    }



})();
