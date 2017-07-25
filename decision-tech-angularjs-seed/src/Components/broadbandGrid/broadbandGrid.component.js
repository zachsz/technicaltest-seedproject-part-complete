import angular from 'angular';
import './broadbandGrid.component.scss';
angular.module('app').component('broadbandGrid', {
        require: {
            deals: '^deals'
        },
    template: `<div>
<table class="broadband-grid">
    <thead class="broadband-grid__headings">
        <tr>
            <th>About</th>
            <th>contract length</th>
            <th>speed/usage</th>
            <th>Offer</th>
            <th>TV</th>
            <th>Mobile</th>
            <th>Cost</th>
        </tr>
    </thead>
    <tbody class="broadband-grid__section">
        <tr class="broadband-grid__deal" ng-repeat="deal in $ctrl.deals.broadbandDeals">
<td class="broadband-grid__deal__property">{{::deal.title}}</td>
<td class="broadband-grid__deal__property">{{::deal.contractLength}}months</td>
<td class="broadband-grid__deal__property">{{::deal.speed.label}} MB <br/> {{::deal.usage.label}}</td>
<td class="broadband-grid__deal__property"><img ng-src="{{::deal.offer.smallLogo}}"/></td>
<td class="broadband-grid__deal__property">
<div ng-if="::deal.popularChannels.length > 0" ng-repeat="channel in ::deal.popularChannels">
    <img ng-src="{{channel.logo}}" /></div>
    <div ng-if="::deal.popularChannels.length == 0">N/A</div>
    </td>
<td class="broadband-grid__deal__property" ng-if="::deal.mobile">
    Data: {{::deal.mobile.data.label}}<br/>
    Minutes: {{::deal.mobile.minutes.label}}<br/>
    Texts: {{::deal.mobile.texts.label}}<br/>
    Connection: {{::deal.mobile.connectionType.label}}
</td>
<td class="broadband-grid__deal__property" ng-if="::!deal.mobile"> N/A </td>
<td class="broadband-grid__deal__property" >£{{deal.prices[0].totalContractCost}}</td>

            </tr>
            </tbody>
            </table>

</div>
	
	`
})
