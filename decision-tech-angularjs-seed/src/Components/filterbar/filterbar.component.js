import angular from 'angular';
import './filterbar.component.scss';



const controller = function ($scope) {
    var vm = this;
    vm.$onInit = () => {

        vm.ngModel = vm.deals.filterState;

        vm.onChange = function () {
            vm.deals.filterResults();
        }
    }
     $scope.$on('toggleFilterVisibility', ()=> vm.responsiveVisible = !vm.responsiveVisible)
}
controller.$inject = ['$scope']

const template = `<div class="filter-menu" ng-class="{'filter-menu--visible-responsive' : $ctrl.responsiveVisible}">
    <ul>
        <li><input type="checkbox" ng-disabled="true" ng-model="$ctrl.ngModel.productTypes['broadband']" ng-change="$ctrl.onChange()" /> Broadband</li>
        <li><input type="checkbox" ng-model="$ctrl.ngModel.productTypes['tv']" ng-change="$ctrl.onChange()" /> TV</li>
        <li><input type="checkbox" ng-model="$ctrl.ngModel.productTypes['mobile']" ng-change="$ctrl.onChange()" /> Mo</li>
    </ul>
    <div ng-if="$ctrl.ngModel.productTypes['broadband']">
        <div>Speed</div>
            <select ng-model="$ctrl.ngModel['speed']" ng-change="$ctrl.onChange()">
            <option value="">Any</option>
            <OPTION value="17408">17MB</option>
            <OPTION value="53248">52MB</option>
            <OPTION value="77824">76MB</option>
    </select>
        </div>
        <div ng-if="$ctrl.ngModel.productTypes['mobile']">
            <div>Mobile Data</div>
            <select ng-model="$ctrl.ngModel['mobileData']" ng-change="$ctrl.onChange()">
            <option value="">Any</option>
            <OPTION value="2">2GB</option>
            <OPTION value="5">5GB</option>
    </select>
        </div>
    </div>`

angular.module('app').component('filterbar', {
    controller: controller,
    require: {
        deals: '^deals'
    },
    template: template
})