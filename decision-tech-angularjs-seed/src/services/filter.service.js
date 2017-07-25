import angular from 'angular';


angular.module('app').service('filter.service', filterService);

function filterService(){
    return {
        filterDeals: (deals) => deals
    }
}