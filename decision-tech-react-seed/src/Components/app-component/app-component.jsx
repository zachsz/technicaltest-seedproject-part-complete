import React from 'react';
import './app-component.scss';
import { SiteNav } from '../sitenav/sitenav-component';
import { BroadbandGrid } from '../broadbandgrid/broadbandgrid-component'
import { DealFilter } from '../dealfilter/dealfilter-component';

var service = function () {
  return {
    fetchDeals: () => {
      return fetch('/assets/deals.json')
        .then(res => res.json())
        .then(rest => rest.deals)
    }
  }

}();
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'deals': [], responsiveVisible: false, filterState: {
        productTypes:
        {
          phone: true,
          broadband: true
        }
      }
    };

    service.fetchDeals().then(deals => {
      this.setState({ 'deals': deals })
    })
  }
  filterChanged(value) {
    console.log(value)
  }
  render() {
    return (<div className="app">
      <SiteNav />
      <div className="deals-layout">
        <DealFilter filterChanged={this.filterChanged} filterState={this.state.filterState} />
        <div className="deals-layout__grid" >
          <BroadbandGrid deals={this.state.deals} />
        </div>
      </div>
    </div>);
  }
}