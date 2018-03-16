import React from 'react';
import './app.scss';
import dealData from '../../assets/deals.json';
import SiteNav from '../site-nav/site-nav';
import DealTable from '../deal-table/deal-table';
import DealFilter from '../deal-filter/deal-filter';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      filter: {
        broadband: false,
        tv: false,
        mobile: false
      },
      data: dealData.deals
    };
  }

  handleFilterChange(event) {
    console.log(event);
  }

  render() {
    return (
      <div className="app">
        <SiteNav />
        <div className="deals-layout">
          <DealFilter handleChange={this.handleFilterChange} />
          <div className="deals-layout__grid">
            <DealTable deals={this.state.data} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
