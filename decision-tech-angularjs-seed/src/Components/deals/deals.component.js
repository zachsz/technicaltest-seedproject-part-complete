
import angular from 'angular';
import './deals.component.scss';


const controller = function (filterService, apiService) {
    var vm = this;
    var broadbandDeals = [];
    vm.$onInit = function () {
        vm.loading = true;
        vm.deals = [];

        vm.filterState = {
            productTypes:
            {
                phone: true,
                broadband: true
            }

        };

        vm.filterResults = function () {
            vm.broadbandDeals = filterService.filterDeals(broadbandDeals);
        }

        apiService.getDeals().then(deals => {
            broadbandDeals = deals;
            vm.filterResults();
            vm.loading = false;
        })
    }
}
controller.$inject = ['filter.service', 'api.service'];

const template = `
<div class="deals-layout">
        <filterbar></filterbar>
    <div class="deals-layout__grid" >
            <div ng-if="$ctrl.loading">Loading...</div>
            <broadband-grid deals="$ctrl.deals"></broadband-grid>
        </div>
    </div>
</div>`;

angular.module('app').component('deals', {
    controller: controller,
    template: template
})